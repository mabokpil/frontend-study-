"use client";

import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface SearchBarProps {
  posts: Post[];
}

export function SearchBar({ posts }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(posts);

  useEffect(() => {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFiltered(result);
  }, [query, posts]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="포스트 검색..."
        className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black mb-6"
      />
      <p className="text-sm text-gray-400 mb-4">{filtered.length}개 결과</p>
      <div className="flex flex-col gap-4">
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center py-8">검색 결과가 없어요</p>
        ) : (
          filtered.map((post) => (
            <div key={post.id} className="p-6 border rounded-lg">
              <span className="text-xs text-gray-400 mb-1 block">
                #{post.id}
              </span>
              <h2 className="font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
