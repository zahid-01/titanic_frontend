import React from "react";
import { Link as ScrollLink } from "react-scroll";
import img from "../../Assets/Imgs/img3.jpeg";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen relative flex items-center bg-cover bg-center text-white py-16 mb-4 tracking-[1px] md:py-24"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="p-22 absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-center relative z-10 flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-opacity-90 mb-4">
          Discover the Magic of
          <span className="text-green-500"> Titanic Services</span>
        </h1>
        <p className="text-lg md:text-xl text-opacity-80 mb-8">
          Where Quality Meets Excellence
        </p>
        <ScrollLink
          to="loader"
          smooth={true}
          duration={500}
          className="mx-auto bg-blue-600 text-white hover:bg-blue-700 py-3 px-8 rounded-full text-lg md:text-xl font-semibold transition duration-300 ease-in-out hover:cursor-pointer animate-bounce"
        >
          Explore Now <i className="fa fa-arrow-down" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
