"use client";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

interface NewsGridProps {
  visibleCount: number;
}

export default function NewsGrid({ visibleCount }: NewsGridProps) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("/api/news");
        const data = await res.data;
        if (res.status === 200) setArticles(data.articles);
        else throw new Error(data.error || "Unknown error");
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 max-w-[1424px] mx-auto">
      {articles.slice(0, visibleCount).map((article, idx) => (
        <NewsCard key={idx} article={article} />
      ))}
    </div>
  );
}
