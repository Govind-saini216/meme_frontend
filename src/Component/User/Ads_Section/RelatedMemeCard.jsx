import { FaEye } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const RelatedMemeCard = ({ meme }) => {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(meme.duration);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        setDuration(formatDuration(videoRef.current.duration));
      };
    }
  }, []);

  const formatDuration = (seconds) => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};


  return (
    <div className="flex gap-3 items-start bg-transparent hover:bg-[#1f1f1f] p-2 rounded-lg transition cursor-pointer w-full">

      {/* THUMBNAIL */}
      <div className="relative w-[120px] h-[68px] flex-shrink-0 rounded-md overflow-hidden bg-black">
        <img
          src={meme.thumbnail}
          alt={meme.title}
          className="w-full h-full object-cover"
        />

        {/* HIDDEN VIDEO (only for duration) */}
        <video
          ref={videoRef}
          src={meme.videoUrl}
          preload="metadata"
          className="hidden"
        />

        {/* DURATION */}
        {duration && (
          <span className="absolute bottom-1 right-1
                           bg-black/80 text-white
                           text-[10px] px-1.5 py-[1px]
                           rounded font-medium">
            {duration}
          </span>
        )}
      </div>

      {/* INFO */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2">
          {meme.title}
        </h3>

        <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
          <FaEye className="text-[11px]" />
          <span>{meme.views}</span>
          <span>•</span>
          <span>{meme.timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedMemeCard;
