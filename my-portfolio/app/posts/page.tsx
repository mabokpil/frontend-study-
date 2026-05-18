import { SearchBar } from "./SearchBar";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const metadata = { title: "포스트" };

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();
  const sliced = posts.slice(0, 10);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">포스트 목록</h1>
      <SearchBar posts={sliced} />
    </div>
  );
}
