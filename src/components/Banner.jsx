import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-[68vh]">
      <img
        src="/flowerBanner.jpg"
        alt="banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 dark:bg-black/70 bg-black/20"></div>
    </section>
  );
};

export default Banner;
