import React, { useContext, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { DataContext } from "../FetchAPI";
import { useTheme } from "../ThemeContext";

const HeaderOnScroll = () => {
  const { query, setQuery, fetchImages } = useContext(DataContext);
  const { theme, ToggleTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 420 ? setShowNav(true) : setShowNav(false);
  });

  const handleSearchFormShow = () => {
    setOpenSearch(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchImages(query);
    }

    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  return (
    <header
      className={`${
        showNav ? "flex" : "hidden"
      } fixed z-20 top-0 left-0 right-0 items-center justify-between shadow-md bg-white dark:bg-black py-4 px-4 md:px-10 md:px-10"`}
    >
      {/* hidden search input */}
      <form
        onSubmit={handleSubmit}
        className={`abolute w-full ${
          openSearch ? "flex" : "hidden"
        } md:hidden bg-white dark:bg-[#111] items-center justify-between py-1 rounded-xl border-2 border-gray-300`}
      >
        <input
          type="text"
          placeholder="Search for free photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="font-semibold border-0 h-full px-2 py-1 outline-0 text-gray-500 dark:text-white"
        />

        <div className="flex gap-x-1 items-center mr-2">
          <button
            type="button"
            className="cursor-pointer  px-1 md:px-3 py-1 md:py-3 rounded-full bg-black dark:bg-white dark:text-black text-white transition-all duration-500 flex items-center justify-center "
            onClick={() => setOpenSearch(false)}
          >
            <IoClose size={23} />
          </button>
          <button
            type="submit"
            className="cursor-pointer px-1 md:px-3 py-1 md:py-3 rounded-full dark:bg-white dark:text-black bg-black text-white transition-all duration-500 flex items-center justify-center "
          >
            <IoSearch size={23} />
          </button>
        </div>
      </form>

      {/* hidden search input */}

      <h1
        className={`logo md:block text-2xl md:text-3xl italic dark:text-white text-black font-bold ${
          openSearch ? "hidden" : "block"
        }`}
      >
        Getpic
      </h1>

      <form
        onSubmit={handleSubmit}
        className="hidden md:flex  relative w-full md:w-[50%]"
      >
        <button
          type="submit"
          className="absolute cursor-pointer dark:text-white top-[30%] left-3 pr-2 border-r-2 border-gray-200"
        >
          <IoSearch size={20} />
        </button>
        <input
          type="text"
          placeholder="Search for free photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 pl-14 px-4  py-2 rounded-xl border-2 border-gray-300 focus:outline-2 outline-blue-200 font-bold bg-white dark:text-white dark:bg-[#111] text-gray-500"
        />
      </form>

      <div className="flex items-center gap-2">
        <button
          type="submit"
          onClick={handleSearchFormShow}
          className={`cursor-pointer md:hidden px-2 md:px-3 py-2 md:py-3 flex items-center justify-center bg-black dark:bg-white dark:text-black text-white rounded-full transition-all duration-500 ${
            openSearch ? "hidden" : "block"
          }`}
        >
          <IoSearch size={20} />
        </button>
        <button
          className={`md:block ${
            openSearch ? "hidden" : "block"
          } flex items-center justify-center px-2 md:px-3 py-2 md:py-3 bg-black rounded-full font-semibold hover:opacity-90 transition-all dark:bg-white duration-500 cursor-pointer text-white dark:text-black`}
        >
          <span onClick={ToggleTheme}>
            {theme ? (
              <MdOutlineLightMode size={18} />
            ) : (
              <MdOutlineDarkMode size={18} />
            )}
          </span>
        </button>
      </div>
    </header>
  );
};

export default HeaderOnScroll;
