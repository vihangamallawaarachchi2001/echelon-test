'use client'

export default function NewsCard({ article }: any) {
    return (
      <div className="flex flex-col min-w-[246px] min-h-[164px] ">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="h-48 w-full object-cover rounded-sm"
          />
        )}
        <h2 className="font-bold text-md mt-2 leading-snug">{article.title}</h2>
        <p className="text-xs text-gray-600 mt-1">BY {article.author?.toUpperCase() || "UNKNOWN"}</p>
      </div>
    );
  }
  