import React from "react";
import { Link as ScrollLink } from "react-scroll";
import img from "../../Assets/Imgs/img3.jpeg";
import Snowfall from "../Header/Snowfall";

const HeroSection = () => {
  return (
    <>
      <Snowfall />
      <section
        className="min-h-screen relative flex items-center bg-cover bg-center text-white py-16 md:py-24"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto text-center relative z-10 tracking-[1px]">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 ">
            Discover the Magic of{" "}
            <span className="bg-transparent lg:p-3 shadow-md shadow-white rounded-xl text-orange-500 ">
              TITANIC SERVICES
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-opacity-80 mb-8 p-4">
            Where Quality Meets Excellence
          </p>
          <ScrollLink
            to="loader"
            smooth={true}
            duration={500}
            className="mx-auto bg-blue-600 text-white hover:bg-blue-700 py-3 px-8 rounded-full text-xl md:text-2xl font-semibold tracking-[1px] cursor-pointer shadow-md shadow-white"
          >
            Explore Now <i className="fa fa-arrow-down " />
          </ScrollLink>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
