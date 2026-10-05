// app/demo/page.tsx
// Import both server and client components
import ViewsCounter from "@/app/ui/components/views-counter";
import LikeButton from "@/app/ui/components/like-button";

// This is a Server Component by default since it's in the app directory
export default function DemoPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        Server vs Client Components Demo
      </h1>

      <div className="space-y-4 border rounded p-4">
        {/* ViewsCounter is a Server Component that fetches and displays data on the server */}
        <div>
          <h2 className="text-xl mb-2">Server Component:</h2>
          <ViewsCounter postId="1" />
        </div>

        {/* LikeButton is a Client Component (marked with 'use client') that handles interactivity */}
        <div>
          <h2 className="text-xl mb-2">Client Component:</h2>
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
