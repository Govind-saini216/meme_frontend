import { useState } from "react";
import banner from '../../../assets/img/banner.webp';

export default function BottomFixedAd() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* ===== COLLAPSED HANDLE ===== */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="fixed bottom-2 left-1/2 -translate-x-1/2 z-[999]
                     bg-white shadow-lg rounded-full
                     w-10 h-6 flex items-center justify-center"
        >
          ▲
        </button>
      )}

      {/* ===== FIXED BOTTOM AD ===== */}
      <div
        className={`fixed left-0 bottom-0 w-full z-[998]
          md:left-1/2 md:-translate-x-1/2 md:w-auto
          transition-all duration-500 ease-in-out
          ${collapsed ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        <div
          className="relative bg-white rounded-t-xl shadow-2xl border-2
                     w-full md:w-[450px]
                     h-[90px] flex items-center justify-center"
        >
          {/* COLLAPSE BUTTON */}
          <button
            onClick={() => setCollapsed(true)}
            className="absolute -top-3 left-1/2 -translate-x-1/2
                       bg-white shadow-md rounded-full
                       w-10 h-6 flex items-center justify-center text-lg"
          >
            ▼
          </button>

          {/* AD IMAGE */}
          <img className="w-full h-full object-cover" src={banner} />
        </div>
      </div>
    </>
  );
}
