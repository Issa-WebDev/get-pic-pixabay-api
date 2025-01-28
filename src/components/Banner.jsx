import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-[68vh]">
      <img
        src="/flowerBanner.jpg"
        alt="banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </section>
  );
};

export default Banner;
