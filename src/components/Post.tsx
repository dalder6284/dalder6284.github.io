import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import BlogPost from "../components/BlogPost";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import fm from "front-matter";


const postFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [meta, setMeta] = useState({ title: "", date: "" });
  const [content, setContent] = useState("");

  useEffect(() => {
    const load = async () => {
      const filePath = `../posts/${slug}.md`;
      const loader = postFiles[filePath];
      if (!loader) {
        console.error(`No post found for slug: ${slug}`);
        return;
      }

      const raw = await loader() as string;
      const parsed = fm<{ title: string; date: string }>(raw);
      setMeta({
        title: parsed.attributes.title,
        date: parsed.attributes.date,
      });
      setContent(parsed.body);
    };

    load();
  }, [slug]);

  function formatDate(date: Date): string {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  return (
    <BlogPost
      title={meta.title}
      date={formatDate(new Date(meta.date))}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-bold" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-lg leading-relaxed text-gray-800" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6 text-gray-700" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </BlogPost >
  );
}
