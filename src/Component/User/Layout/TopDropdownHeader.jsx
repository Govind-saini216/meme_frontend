import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiTrendingUp,
  FiHeart,
  FiVideo,
  FiMusic,
  FiImage,
  FiGrid,
  FiVolume2,
  FiFileText,
} from "react-icons/fi";

const TopDropdownHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-30 bg-[#a09b0c] text-white border-b border-white/10">

      {/* ===== TOP BAR ===== */}
      <div className="flex flex-wrap items-center gap-6 px-6 py-3 text-sm">

        <Link
          to="/all/tranding"
          className="flex items-center gap-2 hover:text-yellow-400"
        >
          <FiTrendingUp /> Trending
        </Link>

        <Link
          to="/all/favourite"
          className="flex items-center gap-2 hover:text-yellow-400"
        >
          <FiHeart /> Favorites
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 hover:text-yellow-400"
        >
          <FiGrid /> Explore
        </button>
      </div>

      {/* ===== DROPDOWN ===== */}
      {open && (
        <div className="absolute left-0 top-full w-[260px] bg-[#111] border border-white/10 shadow-xl">

          <div className="px-5 py-4 text-lg font-semibold border-b border-white/10">
            Explore
          </div>

          <div className="flex flex-col px-3 py-3 text-sm gap-1">
            <Item icon={<FiVideo />} text="Meme Videos" to="/memes/videos" />
            <Item icon={<FiMusic />} text="Sound Effects" to="/sound-effects" />
            <Item icon={<FiImage />} text="Meme Template" to="/meme-template" />
            <Item icon={<FiFileText />} text="Meme News" to="/meme-news" />
            <Item icon={<FiImage />} text="Viral Gif" to="/viral-gif" />
            <Item icon={<FiVolume2 />} text="Sound Buttons" to="/sound-buttons" />
            <Item icon={<FiGrid />} text="Sound Board" to="/sound-board" />
            <Item icon={<FiImage />} text="Meme Generator" to="/meme-generator" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopDropdownHeader;

const Item = ({ icon, text, to }) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-3 py-2 rounded-md
    hover:bg-white/10 transition"
  >
    <span className="text-lg">{icon}</span>
    {text}
  </Link>
);
