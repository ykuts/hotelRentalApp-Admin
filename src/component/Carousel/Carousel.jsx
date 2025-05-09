import { useEffect, useState } from "react";
import "./carousel.styles.scss";
// import { current } from "@reduxjs/toolkit";
const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!data || data.length === 0) {
      console.error("No images provided to Carousel");
      return;
    }
    
    console.log("Carousel images:", data);
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [data]);

  
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
