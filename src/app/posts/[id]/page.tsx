"use client";
import posts from "@/data/posts";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <div>Пост не найден</div>;
  }

  // хранения лайков
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false); 

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes_${id}`);
    if (savedLikes) {
      setLikes(Number(savedLikes));
      setHasLiked(true);
    }
  }, [id]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1); 
      localStorage.setItem(`likes_${id}`, "1"); // Сохраняем информацию о лайке в Local Storage
      setHasLiked(true); 
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <div>
        <p className="text-white-700">{post.content}</p>
        <small className="text-gray-400">{post.date}</small>
        <br />
        <br />
        <span className="flex items-start">Likes in the post: {likes}</span>
        <button
          className="bg-blue-500 text-white font-semibold py-1 px-3 rounded hover:bg-blue-600 transition duration-200"
          onClick={handleLike}
          disabled={hasLiked}
        >
          Like
        </button>
      </div>
      <div className="mt-10">
        <Link href="/posts">
          <button className="bg-300 p-2 rounded-lg outline outline-offset-3">
            Назад к списку постов
          </button>
        </Link>
      </div>
    </div>
  );
}
