import React, { useContext } from "react";
import { DataContext } from "../FetchAPI";
import { FiDownload } from "react-icons/fi";

const ImagesBox = () => {
  const { imagesData } = useContext(DataContext);
  return (
    <section className="px-4 md:px-10 py-[20px]">
      <h1 className="text-2xl text-gray-800 font-bold py-8">Stock D'images gratuit.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {imagesData.map(({ id, largeImageURL, user, userImageURL }) => (
          <div key={id} className="relative rounded-lg h-[500px]">
            <div className="w-full h-full overflow-hidden">
              <a href={largeImageURL} download={`Images-${id}`}>
                <img
                  src={largeImageURL}
                  className="w-full h-full object-cover rounded-md hover:scale-[1.1] transition-all duration-500"
                  alt={`Images ${id}`}
                />
              </a>
            </div>
            <div className="absolute flex items-center bottom-0 left-0 right-0 p-5">
              <div className="flex items-center flex-1">
                <div className="overflow-hidden w-[50px] h-[50px] rounded-full">
                  <img
                    src={userImageURL}
                    className="w-full text-white"
                    alt="images"
                  />
                </div>
                <p className="pl-2 text-white text-lg">{user}</p>
              </div>
              <a
                href={largeImageURL}
                download={`Images-${id}`}
                className="w-[35px] h-[35px] flex items-center justify-center rounded-full cursor-pointer hover:bg-black transition-all duration-300 opacity-90 text-white font-bold"
              >
                <FiDownload size={25} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImagesBox;
