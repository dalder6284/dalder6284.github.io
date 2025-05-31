import React from "react";

export default function BlogPost({
    title,
    date,
    children,
}: {
    title: string;
    date: string;
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <a
                href="/#/blog"
                className="flex items-center text-sm hover:text-gray-500 mb-4"
            >
                <span className="mr-2">&larr;</span>Back
            </a>

            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500 mb-6">{date}</p>
            <article className="prose prose-lg">{children}</article>
        </div>
    );
}
