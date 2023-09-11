import React, { useState, useEffect } from "react";
import styles from "./Testimonial.module.css";
import img1 from "../../Assets/Imgs/p1.jpeg";
import img2 from "../../Assets/Imgs/p2.jpeg";
import img3 from "../../Assets/Imgs/p3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKissWinkHeart } from "@fortawesome/free-regular-svg-icons";
import MotionComponent from "../Header/Animation";

const Testimonial = () => {
  const testimonials = [
    {
      imageSrc: img1,
      altText: "Testimonial 1",
      name: "Basit",
      text: "The laptop exceeded my expectations with its lightning-fast performance, sleek design, and impressive battery life. A game-changer for productivity!",
    },
    {
      imageSrc: img2,
      altText: "Testimonial 2",
      name: "Mateen",
      text: "The printer delivers exceptional print quality, fast printing speed, and hassle-free connectivity. A reliable companion for all my printing needs!",
    },
    {
      imageSrc: img3,
      altText: "Testimonial 3",
      name: "Zahid",
      text: "The photo copier's sharp and vibrant reproductions, user-friendly interface, and efficient functionality make it an invaluable asset for my business. Highly recommended!",
    },
  ];

  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <MotionComponent>
        <h2 className={styles.testimonialTitle}>Testimonials</h2>
        <div className={styles.testimonialContainer}>
          <div
            className={styles.testimonialSlider}
            style={{
              "--testimonial-count": testimonials.length,
              "--active-testimonial-index": activeTestimonialIndex,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonial}>
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.altText}
                  className={styles.testimonialImage}
                />

                <p className={`${styles.testimonialText} ${styles.name}`}>
                  {testimonial.name}
                  <FontAwesomeIcon
                    icon={faKissWinkHeart}
                    style={{ marginLeft: "5px" }}
                  />
                </p>
                <p className={styles.testimonialText}>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionComponent>
    </>
  );
};

export default Testimonial;

// import React from "react";
// import styles from "./Testimonial.module.css";
// import Slider from "react-slick";
// import img1 from "../../Assets/Imgs/p1.jpeg";
// import img2 from "../../Assets/Imgs/p2.jpeg";
// import img3 from "../../Assets/Imgs/p3.jpeg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faKissWinkHeart } from "@fortawesome/free-regular-svg-icons";
// import MotionComponent from "../Header/Animation";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       imageSrc: img1,
//       altText: "Testimonial 1",
//       name: "Basit",
//       text: "The laptop exceeded my expectations with its lightning-fast performance, sleek design, and impressive battery life. A game-changer for productivity!",
//     },
//     {
//       imageSrc: img2,
//       altText: "Testimonial 2",
//       name: "Mateen",
//       text: "The printer delivers exceptional print quality, fast printing speed, and hassle-free connectivity. A reliable companion for all my printing needs!",
//     },
//     {
//       imageSrc: img3,
//       altText: "Testimonial 3",
//       name: "Zahid",
//       text: "The photo copier's sharp and vibrant reproductions, user-friendly interface, and efficient functionality make it an invaluable asset for my business. Highly recommended!",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <>
//       <MotionComponent>
//         <h2 className={styles.testimonialTitle}>Testimonials</h2>
//         <div className={styles.testimonialContainer}>
//           <Slider {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className={styles.testimonial}>
//                 <img
//                   src={testimonial.imageSrc}
//                   alt={testimonial.altText}
//                   className={styles.testimonialImage}
//                 />
//                 <p className={`${styles.testimonialText} ${styles.name}`}>
//                   {testimonial.name}
//                   <FontAwesomeIcon
//                     icon={faKissWinkHeart}
//                     style={{ marginLeft: "5px" }}
//                   />
//                 </p>
//                 <p className={styles.testimonialText}>{testimonial.text}</p>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </MotionComponent>
//     </>
//   );
// };

// export default Testimonial;
