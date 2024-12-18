import React from "react";
import HeroPicture from "../images/hero-1.jpg";

function Hero() {
  return ( 
    <div className="w-full">
      <img src={HeroPicture} />
    </div>
   );
}

export default Hero;