import { useEffect, useState, useRef } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import MemeCard from "../Ads_Section/MemeCard";
import WatchVideo from "./WatchVideo";
import { formatViews } from "../utils/formatViews.js";
import BottomFixedAd from "../Ads_Section/BottomFixedAd.jsx";
import { Helmet } from "react-helmet-async";
import banner from '../../../assets/img/topb.png';
import Right from '../../../assets/img/right.png'
import Left from '../../../assets/img/left.png'


/* ====================== HOME COMPONENT ====================== */
const Home = () => {
  const { id: routeVideoId } = useParams();

  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20); // 🔥 IMPORTANT
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const isWatchingVideo = Boolean(routeVideoId);

  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const videoTopRef = useRef(null);

  /* ====================== 📥 FIRST LOAD (ONLY 20 VIDEOS) ====================== */
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_DOMAIN_NAME}/videos?skip=0&limit=20`
        );
        const data = await res.json();

        if (data.success) {
          setVideos(data.videos);
          setVisibleCount(20); // 🔒 force exactly 20

          if (data.videos.length < 20) {
            setHasMore(false);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  /* ====================== 🔼 AUTO SCROLL ====================== */
  useEffect(() => {
    if (routeVideoId && videoTopRef.current) {
      videoTopRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [routeVideoId]);

  /* ====================== 🎯 ACTIVE + SUGGESTED ====================== */
  const activeVideo = videos.find(v => v._id === routeVideoId);
  const suggestedVideos = videos.filter(v => v._id !== routeVideoId);

  const filteredVideos = filter
    ? videos.filter(video =>
      video.title?.toLowerCase().includes(filter.toLowerCase())
    )
    : videos;

  /* ====================== ➕ LOAD MORE (5 VIDEOS) ====================== */
  const loadMoreVideos = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_DOMAIN_NAME}/videos?skip=${videos.length}&limit=5`
      );
      const data = await res.json();

      if (data.success) {
        if (data.videos.length === 0) {
          setHasMore(false);
          return;
        }

        // 🔥 prevent duplicate IDs
        setVideos(prev => {
          const ids = new Set(prev.map(v => v._id));
          const uniqueNew = data.videos.filter(v => !ids.has(v._id));
          return [...prev, ...uniqueNew];
        });

        setVisibleCount(prev => prev + data.videos.length);

        if (data.videos.length < 5) {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ====================== 👁️ INCREASE VIEW ====================== */
  const increaseView = async (id) => {
    try {
      await fetch(
        `${import.meta.env.VITE_DOMAIN_NAME}/video/view/${id}`,
        { method: "PUT" }
      );

      setVideos(prev =>
        prev.map(v =>
          v._id === id ? { ...v, views: (v.views || 0) + 1 } : v
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

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

      <div className="bg-black">

        {/* ===== TOP HORIZONTAL AD ===== */}
        <div className="w-full py-4 flex justify-center">
          <div className="bg-white w-full sm:w-[90%] md:w-[728px] lg:w-[500px] h-[110px] sm:h-[130px] rounded-lg flex items-center justify-center">
            <img className="w-full h-full" src={banner} alt="banner image" />
          </div>
        </div>

        <div className="text-amber-50 bg-black w-full min-h-screen px-[10px] sm:px-4 py-5 grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* ===== LEFT AD ===== */}
          {/* {!isWatchingVideo && (
            <div className="hidden lg:flex lg:col-span-1">
              <div className="w-full h-screen sticky top-20 flex items-center justify-center bg-white text-black rounded-lg">
                <img className="w-full h-full" src={Left} alt="banner image" />
              </div>
            </div>
          )} */}

          {/* ===== MAIN CONTENT ===== */}
          <div className={routeVideoId ? "lg:col-span-6" : "lg:col-span-4"}>
            {routeVideoId && activeVideo ? (
              <WatchVideo
                videoTopRef={videoTopRef}
                activeVideo={activeVideo}
                suggestedVideos={suggestedVideos}
              />
            ) : (
              <>
                <div className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-[2px] sm:gap-5 sm:justify-items-center">
                  {filteredVideos
                    .slice(0, visibleCount) // 🔥 FINAL CONTROL
                    .map(video => (
                      <div key={video._id} className="m-2 sm:mb-0">
                        <Link to={`/video/${video._id}`} onClick={() => increaseView(video._id)} >
                          <MemeCard
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
                      </div>
                    ))}
                </div>

                {/* ===== LOAD MORE BUTTON ===== */}
                {hasMore && (
                  <div className="w-full flex justify-center mt-6">
                    <button
                      onClick={loadMoreVideos}
                      disabled={loading}
                      className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 disabled:opacity-50"
                    >
                      {loading ? "Loading..." : "Load More"}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ===== RIGHT AD ===== */}
          {!isWatchingVideo && (
            <div className="hidden lg:flex lg:col-span-1">
              <div className="w-full h-screen sticky top-20 flex items-center justify-center bg-white text-black rounded-lg">
                <img className="w-full h-full" src={Right} alt="banner image" />
              </div>
            </div>
          )}

        </div>

        <BottomFixedAd />
      </div>
    </>

  );
};

export default Home;
