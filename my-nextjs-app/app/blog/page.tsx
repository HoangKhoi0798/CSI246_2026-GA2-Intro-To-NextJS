// app/blog/page.tsx

// This is a Server Component (default in Next.js 15)
// Instead of useEffect, we can fetch data directly in our component!
import { getBlogPosts } from "@/app/lib/data";
import Card from "@/app/ui/components/card";
import Link from "next/link";

// Notice we can use 'async' directly on the component
// This means: wait for the data before sending HTML to the browser
export default async function BlogPage() {
  // throw new Error("test"); // Add this line

  const posts = await getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Blog Posts</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            className="hover:border-blue-500 transition-colors"
          >
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:text-blue-600"
            >
              Read more →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
