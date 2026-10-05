"use client"; // This marks the component as a Client Component

// app/ui/components/like-button.tsx
import { useState } from "react";

export default function LikeButton() {
  // We can use hooks because this is a Client Component
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Likes: {likes}
    </button>
  );
}
