import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

// https://pixabay.com/api/?key=48466442-ea1cdeffab6f92f6dd28f179e&q=yellow+flowers&image_type=phot
// const apiKey = import.meta.env.VITE_API_KEY;
// const apiUrl = import.meta.env.VITE_API_URL;

const App = () => {
  const [imagesData, setImagesData] = useState([]);
  const [query, setQuey] = useState("");

  const apiKey = "48466442-ea1cdeffab6f92f6dd28f179e";
  const apiUrl = "https://pixabay.com/api/";

  const fetchImages = async (query) => {
    const endpoint = encodeURIComponent(query);
    try {
      const response = await fetch(
        `${apiUrl}?key=${apiKey}&q=${endpoint}&image_type=photo`
      );
      const data = await response.json();
      if (data && data.hits.length > 0) {
        setImagesData(data.hits);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchImages(query);
    }
  };

  return (
    <div>
      <header className="flex z-index-10 justify-between py-2 items-center fixed top-0 left-0 right-0 bg-blue-500 shadow-md px-4 md:px-10">
        <div className="w-12 md:w-20">
          <img src="/getpic.png" alt="logo" className="w-full" />
        </div>

        <form onSubmit={handleSubmit} className="relative flex gap-2">
          <button
            type="submit"
            className="absolute cursor-pointer top-[30%] left-3 pr-2 border-r-2 border-gray-200"
          >
            <IoSearch size={20} />
          </button>
          <input
            type="text"
            placeholder="search ..........."
            value={query}
            onChange={(e) => setQuey(e.target.value)}
            className="flex-1 pl-14 px-4 py-2 rounded-lg border-0 focus:outline-3 outline-blue-200 font-bold bg-white text-gray-400"
          />
        </form>
      </header>
      <div className="w-full px-4 md:px-10 mt-[80px] md:mt-[120px]">
        <section className="w-full md:h-[300px] h-[150px]">
          <img
            src="/banner3.gif"
            alt="banner"
            className="w-full h-full object-cover rounded-4xl opacity-100"
          />
        </section>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-10 pt-[20px]">
        {imagesData.map(({ id, largeImageURL, user, userImageURL }) => (
          <div
            key={id}
            className="group flex flex-col gap-4 rounded-lg pt-2 px-2 bg-white shadow-xl h-[400px]"
          >
            <div className="w-full overflow-hidden h-[300px]">
              <img
                src={largeImageURL}
                className="w-full h-full object-cover rounded-md hover:scale-[1.1] transition-all duration-500"
                alt="Image"
              />
            </div>
            <div className="flex pt-3">
              <div className="flex items-center flex-1">
                <div className="overflow-hidden w-[40px] h-[40px] rounded-full">
                  <img src={userImageURL} className="w-full" alt="images" />
                </div>
                <p className="pl-2">{user}</p>
              </div>
              <a
                href={largeImageURL}
                download
                className="px-3 flex items-center justify-center rounded-full cursor-pointer hover:opacity-90 bg-blue-400 opacity-100 text-white font-bold"
              >
                <FiDownload size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
