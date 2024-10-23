// pages/index.js
"use client";
import posts from "@/data/posts";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Мой блог</h1>
      <Link href={"/"}>
        <button className="bg-gray p-2 rounded-lg outline outline-offset-3 mb-10">
          Back
        </button>
      </Link>
      <ul className="space-y-10 flex flex-col gap-1">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`}>
            <li
              key={post.id}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-gray-600">
                {post.content.slice(0, post.content.length - 180)}....
              </p>
              <small className="text-gray-500">{post.date}</small>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}