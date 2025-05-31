import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import fm from "front-matter"; // ← this is the new front-matter import

const postFiles = import.meta.glob("../../posts/*.md", {
  query: "?raw",
  import: "default",
});

type PostMeta = {
  slug: string;
  title: string;
  date: Date;
  preview: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const entries = await Promise.all(
        Object.entries(postFiles).map(async ([path, load]) => {
          const raw = (await load()) as string;
          const slug = path.split("/").pop()?.replace(".md", "") ?? "unknown";

          const { attributes, body } = fm<{ title: string; date: string }>(raw);
          const preview = body.split("\n").find(line => line.trim())?.slice(0, 200) + "...";

          return {
            slug,
            title: attributes.title ?? slug,
            date: new Date(attributes.date),
            preview,
          };
        })
      );

      entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setPosts(entries);
    };

    loadPosts();
  }, []);

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
    <>
      <NavBar />
      <div className="text-center py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase">
          Blog
        </h1>
      </div>
      <div className="max-w-2xl mx-auto p-6">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500 text-lg mt-12">
            Nothing here yet...
          </div>
        ) : (
          <ul className="space-y-6">
            {posts.map(({ slug, title, date, preview }) => (
              <li key={slug}>
                <Link to={`/blog/${slug}`}>
                  <section className="border border-gray-200 p-4 hover:border-1 hover:border-black">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-gray-500 text-sm mb-2">
                      {date instanceof Date ? formatDate(date) : date}
                    </p>
                    <p className="text-gray-700 text-base line-clamp-2">{preview}</p>
                  </section>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

    </>
  );
}
