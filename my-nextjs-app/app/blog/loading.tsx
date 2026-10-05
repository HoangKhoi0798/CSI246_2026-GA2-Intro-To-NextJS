// app/blog/loading.tsx

// This loading component is shown while the blog page data is being fetched
// It provides a skeleton UI that matches the layout of the actual blog page
export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Animated loading skeleton for the page title */}
      <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />

      <div className="space-y-4">
        {/* Skeleton for a blog post card */}
        <div className="border rounded-lg p-4">
          {/* Animated loading skeleton for post title */}
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-3" />
          {/* Animated loading skeleton for post excerpt */}
          <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
