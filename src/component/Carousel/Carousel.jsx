import { useEffect, useState } from "react";
import "./carousel.styles.scss";
// import { current } from "@reduxjs/toolkit";
const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (!data || data.length === 0) {
          console.error("No images provided to Carousel");
          return;
    }

    console.log("Carousel images:", data);
    
    const interval = setInterval(() => {
      setCurrentIndex((prevState) => {
        if (prevState === data.length - 1) {
          return (prevState = 0);
        } else {
          return prevState + 1;
        }
      });

      return () => {
        clearInterval(interval);
      };
    }, 8000);
  }, [data.length]);

  if (!data || data.length === 0) {
    return (
      <div className="carousel-wrapper">
        <img 
          src="https://via.placeholder.com/400x300?text=No+Images" 
          alt="No images available" 
        />
      </div>
    );
  }

  return (
    <div className="carousel-wrapper">
      <img src={data[currentIndex]} alt="room images"/>
    </div>
  );
};

export default Carousel;
