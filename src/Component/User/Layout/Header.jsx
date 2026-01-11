import { Link } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SubHeader from "../Layout/SubHeader.jsx";
import TopDropdownHeader from "./TopDropdownHeader.jsx";
import Logo from '../../../assets/img/logo8.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>

      {/* ================= HEADER ================= */}
      <header className="w-full h-[70px] bg-[#222831] text-white shadow-md relative z-50">
        <div className=" flex items-center justify-around px-4">

          {/* LOGO */}
          {/* <Link to="/all" className="text-xl font-bold   w-[100px]">
            <img className="w-full h-full filter invert brightness-0" src={Logo} alt="logo" />
          </Link> */}

          {/* LOGO */}
          <Link to="/all" className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              // className="h-[32px] w-auto filter invert brightness-0 object-contain"
              className="h-[80px] w-auto object-contain invert"

            />
          </Link>


          {/* SEARCH BAR (DESKTOP) */}
          <div className="hidden md:block w-[60%] relative">

            {/* GRADIENT BORDER WRAPPER */}
            <div className="rounded-full p-[2px] bg-gradient-to-r  from-pink-500 via-purple-500 to-amber-500
               animate-gradient-x" >
              {/* SEARCH ICON */}
              <FiSearch
                className={`absolute left-5 top-1/2 -translate-y-1/2 text-gray-500
        transition-all duration-300
        ${search ? "scale-110 text-amber-500" : "animate-pulse"}
      `}
              />

              {/* INPUT */}
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-1 rounded-full outline-none 
                 bg-white text-black"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* SIGN IN */}
            <button
              className="px-4 py-1.5 rounded-full text-sm font-medium
               border border-white/60 text-white
               hover:bg-white hover:text-[#473472]
               transition-all duration-300"
            >
              Sign In
            </button>

            {/* SIGN UP */}
            <button
              className="px-4 py-1.5 rounded-full text-sm font-medium
               bg-gradient-to-r from-amber-400 to-orange-500
               text-black
               hover:from-amber-500 hover:to-orange-600
               transition-all duration-300 shadow-md"
            >
              Sign Up
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ================= RIGHT SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#222831] text-white z-50
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-between p-3">
               {/* LOGO */}
          <Link to="/all" className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              // className="h-[32px] w-auto filter invert brightness-0 object-contain"
              className="h-[80px] w-auto object-contain invert"

            />
          </Link>
          <button
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* MENU LINKS */}
        <nav className="flex flex-col gap-4 px-6">
          <Link
            to="/all"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            Home
          </Link>

          <Link
            to="/all/tranding"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400"
          >
            Trending
          </Link>
        </nav>
      </div>
      <TopDropdownHeader />   {/* 👈 NEW DROPDOWN HEADER */}
      <SubHeader />

    </>
  );
};

export default Header;
