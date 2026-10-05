// app/blog/[id]/page.tsx
import { getBlogPost } from "@/app/lib/data";
import { notFound } from "next/navigation";

// Dynamic route page component for individual blog posts
// [id] in the folder name creates a dynamic route parameter
// params prop automatically receives the dynamic segment value from the URL
export default async function BlogPost({ params }: { params: { id: string } }) {
  // Extract the blog post ID from the URL parameters
  const { id } = await params;

  // Fetch the blog post data using the ID
  // This is an async operation that waits for the data
  const post = await getBlogPost(id);
  console.log(post);

  // If no post is found, trigger Next.js's not-found page
  if (!post) {
    console.log("No Post");
    notFound();
  }

  // Render the blog post with a responsive layout
  return (
    <article className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl">{post.content}</div>
    </article>
  );
}
