import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { DataContext } from "../FetchAPI";

const Header = () => {
  const { query, setQuery, fetchImages } = useContext(DataContext);

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
    <header className="absolute z-10 top-0 left-0 right-0 flex flex-col py-5 px-4 md:px-10">
      <nav className="flex justify-between items-center">
        <h1 className="logo text-2xl md:text-3xl italic text-white font-bold">
          Getpic
        </h1>
        <button className="px-6 py-2 md:py-3 bg-white rounded-lg font-semibold hover:opacity-90 transition-all duration-500 border-white cursor-pointer">
          Upload
        </button>
      </nav>

      <div className="flex flex-col items-center justify-center pt-14 md:pt-30">
        <h1 className="text-[18px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center w-[98%] lg:w-[50%] pb-6 md:pb-8">
          Des photos libres de droits et gratuites, partagées par des créateurs
          talentueux
        </h1>
        <form
          onSubmit={handleSubmit}
          className="relative w-[80%] md:w-[48%] flex justify-center items-center gap-2"
        >
          <button
            type="submit"
            className="cursor-pointer absolute top-[30%] pl-1 left-0 sm:left-3 pr-2 border-r-2 border-gray-200"
          >
            <IoSearch size={20} />
          </button>
          <input
            type="text"
            placeholder="Recherche une images gratuitement"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 pl-14 px-4 md:py-4 py-2 rounded-xl border-0 focus:outline-3 outline-blue-200 font-bold bg-gray-50 text-gray-500"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
