import { Link } from "react-router-dom";
import { formatViews } from "../utils/formatViews";
import { Helmet } from "react-helmet-async";
import VideoAdSection from "../Ads_Section/VideoAdSection";
import RelatedMemeCard from "../Ads_Section/RelatedMemeCard";
import { useMemo, useState } from "react";

const WatchVideo = ({ videoTopRef, activeVideo, suggestedVideos }) => {
    const [showAll, setShowAll] = useState(false);

    const INITIAL_COUNT = 15;
    const PER_PAGE = 5;

    const [page, setPage] = useState(Math.ceil(INITIAL_COUNT / PER_PAGE));
    const uniqueSuggestedVideos = useMemo(() => {
        const map = new Map();
        suggestedVideos.forEach(video => {
            if (!map.has(video._id)) {
                map.set(video._id, video);
            }
        });
        return Array.from(map.values());
    }, [suggestedVideos]);

    const visibleVideos = showAll
        ? uniqueSuggestedVideos.slice(0, page * PER_PAGE)
        : uniqueSuggestedVideos.slice(0, INITIAL_COUNT);


    if (!activeVideo) return null;




    return (
        <>
            <Helmet>
                <title>Beautiful Meme Video Download</title>

                <meta
                    name="keywords"
                    content="beautiful meme video download, video memes, funny videos download, viral memes, comedy videos, meme videos, trending videos, meme template, viralmemes.co.in"
                />

                <meta
                    name="description"
                    content="Download the Wow Beautiful memes video. Perfect for reaction edits, reels, and shorts. Express admiration, surprise, and funny appreciation moments with this trending meme to boost engagement and shares instantly."
                />
            </Helmet>

            <div
                ref={videoTopRef}
                className="w-full flex flex-col lg:flex-row gap-6"
            >
                {/* ================= LEFT : VIDEO PLAYER ================= */}
                <div className="w-full lg:w-[75%]">
                    {/* VIDEO BOX */}
                    <div className="w-full bg-black rounded-xl overflow-hidden">
                        <video
                            src={activeVideo.videoUrl}
                            controls
                            autoPlay
                            playsInline
                            className="w-full h-[72vh] lg:h-[78vh] object-contain bg-black"
                        />
                    </div>

                    {/* VIDEO INFO */}
                    <div className="mt-4 text-white">
                        <h1 className="text-xl lg:text-2xl font-bold leading-snug">
                            {activeVideo.title}
                        </h1>

                        <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
                            <span>{formatViews(activeVideo.views || 0)} views</span>
                            <span>•</span>
                            <span>
                                {new Date(activeVideo.createdAt).toLocaleDateString()}
                            </span>
                             <span>
                                Like
                            </span>
                            <span>
                                Share
                            </span>
                            <span>
                                Download
                            </span>
                        </div>

                    </div>


                    <VideoAdSection />

                    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800">

                        {/* ===== DESCRIPTION ===== */}
                        <div className="mb-6">
                            <p className="text-white leading-relaxed line-clamp-3">
                                Download memes for YouTube video edit Perfect for funny edits,
                                reactions, and short clips. High-quality meme videos, easy to use,
                                and ideal for creators who want more laughs, engagement, and
                                viral-style content.
                            </p>

                            <button className="text-red-500 text-sm mt-3 hover:text-red-400 font-medium transition-colors">
                                Show more
                            </button>
                        </div>

                        {/* ===== TAGS HEADER ===== */}
                        <div className="flex items-center gap-2 text-zinc-400 mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                                <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                            </svg>

                            <span className="text-sm font-medium">Tags</span>
                        </div>

                        {/* ===== TAG LIST ===== */}
                        <div className="flex flex-wrap gap-2">
                            <a
                                href="/tag/meme"
                                className="px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700/50
                 text-red-400 text-sm rounded-lg hover:text-red-300
                 transition-all border border-zinc-700 hover:border-zinc-600"
                            >
                                #Meme
                            </a>

                            <a
                                href="/tag/memes-download"
                                className="px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700/50
                 text-red-400 text-sm rounded-lg hover:text-red-300
                 transition-all border border-zinc-700 hover:border-zinc-600"
                            >
                                #Memes Download
                            </a>

                            <a
                                href="/tag/memes-download-for-youtube-video-edit"
                                className="px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700/50
                 text-red-400 text-sm rounded-lg hover:text-red-300
                 transition-all border border-zinc-700 hover:border-zinc-600"
                            >
                                #Memes Download For YouTube Video Edit
                            </a>

                            <a
                                href="/tag/memes"
                                className="px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700/50
                 text-red-400 text-sm rounded-lg hover:text-red-300
                 transition-all border border-zinc-700 hover:border-zinc-600"
                            >
                                #Memes
                            </a>
                        </div>

                    </div>


                </div>

                {/* ================= RIGHT : RELATED VIDEOS ================= */}
                <div className="w-full lg:w-[25%]">
                    <div className="bg-[#171111] rounded-xl p-4 h-full">
                        {/* HEADING */}
                        <h2 className="text-lg lg:text-xl font-bold text-white mb-3">
                            Related Videos
                        </h2>

                        {/* FILTER BUTTONS */}
                        <div className="flex gap-2 mb-4">
                            <button className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-semibold">
                                All Videos
                            </button>
                            <button className="px-3 py-1.5 rounded-lg bg-[#111827] text-white text-xs border border-gray-700">
                                From Meme Templates
                            </button>
                        </div>

                        {/* SUGGESTED LIST */}
                        {/* <div className="flex flex-col gap-3 h-auto   overflow-y-auto hide-scrollbar pr-1 scroll-smooth">

                            {suggestedVideos.map(video => (
                                <Link key={video._id} to={`/video/${video._id}`}>
                                    <RelatedMemeCard
                                        meme={{
                                            thumbnail: video.videoUrl
                                                .replace("/video/upload/", "/video/upload/so_0/")
                                                .replace(".mp4", ".jpg"),
                                            title: video.title,
                                            views: `${formatViews(video.views || 0)} views`,
                                            duration: "Video",
                                            timeAgo: new Date(video.createdAt).toLocaleDateString(),
                                        }}
                                    />
                                </Link>
                            ))}
                        </div> */}

                        {/* SUGGESTED LIST */}
                        <div className="flex flex-col gap-3 h-auto overflow-y-auto hide-scrollbar pr-1 scroll-smooth">

                            {visibleVideos.map(video => (
                                <Link key={video._id} to={`/video/${video._id}`}>
                                    <RelatedMemeCard
                                        meme={{
                                            thumbnail: video.videoUrl
                                                .replace("/video/upload/", "/video/upload/so_0/")
                                                .replace(".mp4", ".jpg"),
                                            videoUrl: video.videoUrl,   // 🔥 IMPORTANT
                                            title: video.title,
                                            views: `${formatViews(video.views || 0)} views`,
                                            timeAgo: new Date(video.createdAt).toLocaleDateString(),
                                        }}
                                    />

                                </Link>
                            ))}

                            {/* ===== VIEW ALL / LOAD MORE (MERGED) ===== */}
                            {visibleVideos.length < uniqueSuggestedVideos.length && (
                                <button
                                    onClick={() => {
                                        if (!showAll) {
                                            setShowAll(true);
                                        } else {
                                            setPage(prev => prev + 1);
                                        }
                                    }}
                                    className="text-sm text-blue-400 hover:underline mt-2"
                                >
                                    {showAll ? "Load More" : "View All"}
                                </button>
                            )}


                        </div>

                    </div>
                </div>


            </div>


        </>
    );
};

export default WatchVideo;
