'use client';
import { useState } from "react";
import NewsGrid from "@/components/NewsGrid";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleMoreClick = () => {
    setVisibleCount((prev) => prev + 4); 
  };

  return (
    <main className="px-6 py-8">
      <div className="flex justify-between items-center mb-6 max-w-[1424px] mx-auto">
        <h1 className="text-3xl font-bold text-left xl:-ml-[2%]">Even Better</h1>
        <button
          onClick={handleMoreClick}
          className="text-sm font-medium underline"
        >
          MORE
        </button>
      </div>
      <NewsGrid visibleCount={visibleCount} />
    </main>
  );
}
