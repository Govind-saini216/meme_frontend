import { FaEye } from "react-icons/fa";

const MemeCard = ({ meme }) => {
  return (
    <div
      className="
        bg-[#191825] rounded-xl overflow-hidden transition hover:bg-[#202020]
          cursor-pointer
        /* MOBILE: FULL WIDTH */
        w-full h-auto
        /* TABLET & DESKTOP */
        sm:w-[180px] sm:h-[250px]
        md:w-[200px] md:h-[270px]
        lg:w-[230px] lg:h-[230px]
      "
    >
      {/* THUMBNAIL */}
      <div className="relative">
        <img
          src={meme.thumbnail}
          alt={meme.title}
          className="
            w-full object-cover
            /* MOBILE: BIG THUMBNAIL */
            h-[200px]

            /* OTHERS */
            sm:h-[130px]
            md:h-[135px]
            lg:h-[140px]
          "
        />

        {/* DURATION */}
        <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-[2px] rounded">
          {meme.duration}
        </span>
      </div>

      {/* INFO */}
      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold text-white line-clamp-2">
          {meme.title}
        </h3>

        <p className="text-xs text-gray-400">
          {meme.channel}
        </p>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <FaEye />
          <span>{meme.views}</span>
          <span>•</span>
          <span>{meme.timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default MemeCard;
