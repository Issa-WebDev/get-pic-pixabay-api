import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { DataContext } from "../FetchAPI";

const HeaderOnScroll = () => {
  const { query, setQuery, fetchImages } = useContext(DataContext);
  const [showNav, setShowNav] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 420 ? setShowNav(true) : setShowNav(false);
  });

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
      } fixed z-20 top-0 left-0 right-0 items-center justify-between shadow-md bg-white py-4 px-4 md:px-10 md:px-10"`}
    >
      <h1 className="logo text-2xl md:text-3xl italic text-black font-bold hidden sm:block">Getpic</h1>

      <form onSubmit={handleSubmit} className="relative flex w-full md:w-[50%]">
        <button
          type="submit"
          className="absolute cursor-pointer top-[30%] left-3 pr-2 border-r-2 border-gray-200"
        >
          <IoSearch size={20} />
        </button>
        <input
          type="text"
          placeholder="Recherche une images gratuitement"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 pl-14 px-4 md:py-3 py-2 rounded-xl border-0 focus:outline-3 outline-blue-200 font-bold bg-gray-100 text-gray-500"
        />
      </form>
      <button className="hidden md:block px-6 py-3 bg-black rounded-lg font-semibold hover:opacity-90 transition-all duration-500 cursor-pointer text-white">
        Upload
      </button>
    </header>
  );
};

export default HeaderOnScroll;
