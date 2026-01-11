import React, { useEffect, useState } from "react";
import { FaTrash, FaUpload, FaVideo } from "react-icons/fa";

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);


  /* ========================= 📥 FETCH VIDEOS FROM DB ========================= */
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_DOMAIN_NAME}/videos`
        );
        const data = await res.json();

        if (data.success) {
          setVideos(data.videos);
        }
      } catch (error) {
        console.error("Error fetching videos", error);
      }
    };

    fetchVideos();
  }, []);

  /* =========================  ⬆️ UPLOAD VIDEO ========================= */

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!title || !file) {
      alert("Title aur video required hai");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);
    formData.append("title", title);

    setUploading(true);
    setUploadProgress(0);

    const xhr = new XMLHttpRequest();

    xhr.open(
      "POST",
      `${import.meta.env.VITE_DOMAIN_NAME}/upload`
    );

    // 🔥 REAL TIME PROGRESS
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round(
          (event.loaded / event.total) * 100
        );
        setUploadProgress(percent);
      }
    };

    xhr.onload = () => {
      setUploading(false);

      if (xhr.status === 201) {
        const data = JSON.parse(xhr.responseText);

        setVideos((prev) => [data.video, ...prev]);
        setTitle("");
        setUploadProgress(0);

        alert("Video uploaded successfully");
      } else {
        alert("Upload failed");
      }
    };

    xhr.onerror = () => {
      setUploading(false);
      alert("Upload error");
    };

    xhr.send(formData);
  };



  /* =========================  🗑 DELETE (Frontend only) ========================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_DOMAIN_NAME}/videos/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        setVideos((prev) => prev.filter((video) => video._id !== id));
      }
    } catch (err) {
      console.error("Delete failed", err);
    }
  };


  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        🎬 Video Dashboard
      </h1>

      {/* ================= UPLOAD ================= */}
      <div className="bg-white rounded-xl p-6 shadow mb-6 border space-y-4">
        <input
          type="text"
          placeholder="Enter video title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-400"
        />


        {/* <label className="flex flex-col items-center justify-center border-2 border-dashed border-cyan-400 rounded-xl p-8 cursor-pointer hover:bg-cyan-50 transition"> */}
        <label className={`flex flex-col items-center justify-center border-2 border-dashed border-cyan-400 rounded-xl p-8 cursor-pointer transition
  ${uploading ? "opacity-60 pointer-events-none" : "hover:bg-cyan-50"}
`}>
          <FaUpload className="text-3xl text-cyan-500 mb-2" />
          <p className="font-semibold text-gray-700">
            Click to upload videos
          </p>
          <p className="text-sm text-gray-500">
            MP4, WebM supported
          </p>
          <input
            type="file"
            accept="video/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      {uploading && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-cyan-500 h-3 transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>

          <p className="text-sm text-gray-600 mt-1 text-center">
            Uploading... {uploadProgress}%
          </p>
        </div>
      )}


      {/* ================= COUNT ================= */}
      <div className="mb-4 text-gray-700 font-medium">
        Total Videos Uploaded:{" "}
        <span className="text-cyan-600 font-bold">
          {videos.length}
        </span>
      </div>

      {/* ================= VIDEO LIST ================= */}
      {videos.length === 0 ? (
        <div className="text-gray-500 text-center mt-10">
          No videos uploaded yet 🚫
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video._id}
              className="bg-white rounded-xl shadow border overflow-hidden"
            >

              <video
                src={video.videoUrl}
                controls
                preload="metadata"
                className="w-full h-48 object-cover"
              />


              <div className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <FaVideo className="text-cyan-500" />
                  <h3 className="font-semibold text-sm truncate">
                    {video.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {video.description}
                </p>

                <p className="text-xs text-gray-500 mb-3">
                  File: {video.name} • {video.size}
                </p>

                <button
                  onClick={() => handleDelete(video._id)}
                  className="flex items-center gap-2 text-red-500 text-sm cursor-pointer active:scale-3d"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
