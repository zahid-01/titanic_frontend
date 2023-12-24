import { useEffect } from "react";
import "./Snowfall.css";

const Snowfall = () => {
  useEffect(() => {
    const snowflakesCount = 500;

    for (let i = 0; i < snowflakesCount; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      document.body.appendChild(snowflake);
    }

    const animateSnowfall = () => {
      const snowflakes = document.querySelectorAll(".snowflake");
      const height = window.innerHeight;

      snowflakes.forEach((snowflake) => {
        const left = Math.random() * window.innerWidth;
        const animationDuration = Math.random() * 3 + 2;

        snowflake.style.left = left + "px";
        snowflake.style.animation = `fall ${animationDuration}s linear infinite`;
        snowflake.style.animationDuration = `${animationDuration}s`;

        setTimeout(() => {
          snowflake.style.top = height + "px";
        }, 0);

        snowflake.addEventListener("animationiteration", () => {
          snowflake.style.top = "0px";
        });
      });
    };

    animateSnowfall();

    return () => {
      const snowflakes = document.querySelectorAll(".snowflake");
      snowflakes.forEach((snowflake) => {
        document.body.removeChild(snowflake);
      });
    };
  }, []);

  return null;
};

export default Snowfall;
