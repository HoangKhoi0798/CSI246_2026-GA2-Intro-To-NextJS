// app/lib/data.ts

// Define the shape of our blog post data
// This type ensures consistency across our application
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  views: number;
};

// This function simulates fetching blog posts from an API or database
// In a real application, this would connect to your data source
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      excerpt: "Learn the basics of Next.js and the App Router",
      content: "Full content would go here...",
      views: 100,
    },
    {
      id: "2",
      title: "Understanding Server Components",
      excerpt: "Deep dive into React Server Components",
      content: "Full content would go here...",
      views: 50,
    },
  ];
};

// Function to fetch a single blog post by ID
// Returns null if the post isn't found - this helps with error handling
export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  const posts = await getBlogPosts();
  return posts.find((post) => post.id === id) || null;
};

export async function getViewCount(postId: string): Promise<number> {
  const post = await getBlogPost(postId);
  return post?.views ?? 0;
}
