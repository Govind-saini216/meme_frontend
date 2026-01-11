const VideoAdSection = () => {
  return (
    <div className="w-full flex justify-center my-6">
      {/* OUTER WRAPPER */}
      <div className="bg-black rounded-xl p-4 flex justify-center">
        
        {/* AD BOX */}
        <div className="relative bg-white rounded-lg overflow-hidden w-[300px] sm:w-[336px] h-[250px] flex items-center justify-center">
          
          {/* AD LABEL */}
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-3 py-1 rounded">
            Advertisement
          </span>

          {/* PLACEHOLDER / GOOGLE AD */}
          {/* Replace this img with Google AdSense code */}
          <img
            src="https://dummyimage.com/336x250/facc15/000000&text=AD+CONTENT"
            alt="Advertisement"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default VideoAdSection;
