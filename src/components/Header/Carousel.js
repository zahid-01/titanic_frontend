import React from "react";
import classes from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../Assets/Imgs/img1.jpeg";
import img2 from "../../Assets/Imgs/img2.jpeg";
import img3 from "../../Assets/Imgs/img3.jpeg";
import img4 from "../../Assets/Imgs/img4.jpeg";
import img5 from "../../Assets/Imgs/img5.jpeg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const SliderData = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
  ];
  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {SliderData.map((img, idx) => (
          <img
            key={idx.image}
            src={img.image}
            alt={`img-${idx}`}
            className={classes.slide}
          />
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
