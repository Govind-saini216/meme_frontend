import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function SubHeader() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-2 px-2 bg-[#130a01] sticky top-0 z-30 border-b">

      {/* ⬅ LEFT BUTTON */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* 🔁 SCROLLABLE NAV */}
      <div
        ref={scrollRef}
        className=" flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap py-2 flex-1"
      >
        {[
          ["All", "all"],
          ["Cat Memes", "cat memes"],
          ["Dank Memes", "dank memes"],
          ["Funny Memes", "funny memes"],
          ["Funny Memes Dog", "funny memes dog"],
          ["Funny Videos", "funny videos"],
          ["Games Memes", "game memes"],
          ["Happy Birthday Memes", "Happy Birthday Memes"],
          ["Hilarious Memes", "Hilarious Memes"],
          ["iPhone Ringtones", "iPhone Ringtones"],
          ["IPL Memes", "IPL Memes"],
          ["Laughing Memes", "Laughing Memes"],
          ["Meme", "Meme"],
          ["Meme Sounds", "Meme Sounds"],
          ["Memes Sad", "Memes Sad"],
          ["Memes Soundboard", "Memes Soundboard"],
          ["Memes Yes", "Memes Yes"],
          ["Meme Templates", "Meme Templates"],
          ["Offensive Memes", "Offensive Memes"],
          ["Politics", "Politics"],
          ["Popular Memes", "Popular Memes"],
          ["Social", "Social"],
          ["Spongebob Memes", "Spongebob Memes"],
          ["Trending Memes", "Trending Memes"],
          ["Troll Faces Memes", "Troll Faces Memes"],
        ].map(([label, filter]) => (
          <Link
            key={label}
            to={filter === "all" ? "all" : `/all?filter=${filter}`}
            className="px-4 py-1.5 rounded-full border text-sm font-medium bg-gray-100 hover:bg-gray-200 transition"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* ➡ RIGHT BUTTON */}
      <button
        onClick={scrollRight}
        aria-label="Scroll right"
        className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
