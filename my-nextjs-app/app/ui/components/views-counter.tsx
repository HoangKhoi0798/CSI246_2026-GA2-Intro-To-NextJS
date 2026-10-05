// app/ui/components/views-counter.tsx
import { getViewCount } from "@/app/lib/data";

export default async function ViewsCounter({ postId }: { postId: string }) {
  // This runs on the server - no useEffect needed!
  const views = await getViewCount(postId);

  return <div className="text-sm text-gray-500">{views} views</div>;
}
