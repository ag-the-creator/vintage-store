import React from "react";
import Instagram from "../icons/instagram.png";
import Github from "../icons/github.png";
import Telegram from "../icons/telegram.png";


function Footer() {

  const date = new Date();
  const year =date.getFullYear();
  return ( 
    <div className="border-t-4 border-white mt-3">
      <div>
        <nav>
        <ul className="flex flex-col justify-evenly items-end pt-3">
          <li>
            <a href="https://google.com" target="_blank"
            className="text-smoke text-1xl px-5 py-2 
            hover:text-green-700
            font-semibold transition-all"
            >
            Contact Us
            </a>
          </li>

          <li>
            <a href="https://google.com" target="_blank"
            className="text-smoke text-1xl px-5 py-2 
            hover:text-green-700
            font-semibold transition-all"
            >
            Log In
            </a>
          </li>

          <li>
            <a href="https://google.com" target="_blank"
            className="text-smoke text-1xl px-5 py-2 
            hover:text-green-700
            font-semibold transition-all"
            >
            Main
            </a>
          </li>
        </ul>
      </nav>

      <p className="text-white font-semibold">
        &copy; {year}, All rights reserved
        </p>

      </div>

    
    <div className="bg-black pb-1 mt-5 shadow-footer shadow-red-800 pt-3">
        <ul className="flex justify-evenly items-center
        ">
          <li>
            <a href="https://google.com" target="_blank"
            className=""
            >
            <img src={Instagram} className="size-9" />
            </a>
          </li>

          <li>
            <a href="https://google.com" target="_blank"
           className=""
            >
            <img src={Github} className="size-8" />
            </a>
          </li>

          <li>
            <a href="https://google.com" target="_blank"
            className=""
            >
            <img src={Telegram} className="size-8" />
            </a>
          </li>
        </ul>
    </div>

    </div>
   );
}

export default Footer;