// import React from "react";
// import { Link as ScrollLink } from "react-scroll";
// import img from "../../Assets/Imgs/img3.jpeg";

// const HeroSection = () => {
//   return (
//     <section
//       className="min-h-screen relative flex items-center bg-cover bg-center text-white py-16 mb-4 tracking-[1px] md:py-24"
//       style={{
//         backgroundImage: `url(${img})`,
//       }}
//     >
//       <div className="p-22 absolute inset-0 bg-black opacity-50"></div>

//       <div className="container mx-auto text-center relative z-10 flex flex-col gap-6">
//         <h1 className="text-2xl lg:text-6xl font-bold lg:font-extrabold leading-tight text-opacity-70 mb-4">
//           Discover the Magic of
//           <span className="text-orange-500 tracking-[3px] shadow-md shadow-white ml-4 rounded-xl">
//             {" "}
//             Titanic Services
//           </span>
//         </h1>
//         <p className="text-lg md:text-xl text-opacity-80 mb-8 tracking-[2px]">
//           Where Quality Meets Excellence
//         </p>
//         <ScrollLink
//           to="loader"
//           smooth={true}
//           duration={500}
//           className="mx-auto bg-blue-600 text-white hover:bg-blue-700 py-3 px-8 rounded-full text-lg md:text-xl font-semibold transition duration-300 ease-in-out hover:cursor-pointer animate-bounce shadow-sm shadow-white"
//         >
//           Explore Now <i className="fa fa-arrow-down" />
//         </ScrollLink>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import img from "../../Assets/Imgs/img3.jpeg";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen relative flex items-center bg-cover bg-center text-white py-16 md:py-24"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-center relative z-10 tracking-[1px]">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 ">
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
  );
};

export default HeroSection;
