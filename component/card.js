import React, { useState } from "react";
import Pic from "../images/camera-1.jpg";
import Solid from "../icons/star-solid.png";
import OutlineStar from "../icons/star-outline.png";
import { use } from "react";



function Card(props) {
  
  return ( 
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-5">
  <img class="w-full rounded-lg" src={Pic} alt="camera" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{/* The Coldest Sunset */}</div>
    <p class="text-white text-base">
      {props.proName}
      here
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  );
}

export default Card;



{/* <div className="card max-w-sm w-full lg:max-w-full lg:flex">
      <img src={Pic} className="w-60"/>
      <p>
        <img src={OutlineStar} className="" onClick={starChange}/> 
      </p>
      <p className="text-silver">
        price
      </p>
      <p className="text-silver">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem doloribus quas doloremque voluptate ipsa necessitatibus perferendis iusto excepturi eum consequatur?
      </p>
    </div> */}