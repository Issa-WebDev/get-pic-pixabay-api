import React, { useContext, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { DataContext } from "../FetchAPI";

const HeaderOnScroll = () => {
  const { query, setQuery, fetchImages } = useContext(DataContext);
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
      } fixed z-20 top-0 left-0 right-0 items-center justify-between shadow-md bg-white py-3 px-4 md:px-10 md:px-10"`}
    >
      {/* hidden search input */}
      <form
        onSubmit={handleSubmit}
        className={`abolute w-full ${
          openSearch ? "flex" : "hidden"
        } md:hidden bg-white items-center justify-between py-1 rounded-xl border-2 border-gray-300`}
      >
        <input
          type="text"
          placeholder="Search for free photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="font-semibold border-0 h-full px-2 py-3 outline-0 text-gray-500"
        />

        <div className="flex gap-x-1 items-center mr-2">
          <button type="button">
            <IoClose
              size={40}
              className="cursor-pointer  w-8 rounded-xl py-2  h-10 bg-black text-white transition-all duration-500 flex items-center justify-center "
              onClick={() => setOpenSearch(false)}
            />
          </button>
          <button
            type="submit"
            className="cursor-pointer py-2  rounded-xl h-10 w-8 bg-black text-white transition-all duration-500 flex items-center justify-center "
          >
            <IoSearch size={23} />
          </button>
        </div>
      </form>

      {/* hidden search input */}

      <h1
        className={`logo md:block text-2xl md:text-3xl italic text-black font-bold ${
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
          className="absolute cursor-pointer top-[30%] left-3 pr-2 border-r-2 border-gray-200"
        >
          <IoSearch size={20} />
        </button>
        <input
          type="text"
          placeholder="Search for free photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 pl-14 px-4  py-2 rounded-xl border-2 border-gray-300 focus:outline-3 outline-blue-200 font-bold bg-white text-gray-500"
        />
      </form>

      <div className="flex items-center gap-2">
        <button
          type="submit"
          onClick={handleSearchFormShow}
          className={`cursor-pointer md:hidden  px-3 py-[10px] flex items-center justify-center bg-black text-white rounded-xl transition-all duration-500 ${
            openSearch ? "hidden" : "block"
          }`}
        >
          <IoSearch size={20} />
        </button>
        <button
          className={`md:block ${
            openSearch ? "hidden" : "block"
          } px-6 py-2 bg-black rounded-lg font-semibold hover:opacity-90 transition-all duration-500 cursor-pointer text-white`}
        >
          Upload
        </button>
      </div>
    </header>
  );
};

export default HeaderOnScroll;
