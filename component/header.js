import React from "react";
import "./header.css"

function Header() {
  return (  
    <div className="flex bg-black text-white items-center justify-between w-full">

      
      <h1 className="
      bg-green-700 
      text-smoke 
      text-4xl 
      text-center 
      px-10 py-2 
      rounded-md 
      my-1.5 
      mx-1
      hover:text-white 
      hover:bg-green-700/95
      transition-all
      sm:text-2xl
      sm:px-8
      sm:py-1
      sm:my-1.5
      sm:mx-1

      xl:text-5xl
      xl:px-11
      xl:py-3
      xl:my-2
      xl:mx-1.5

      2xl:text-6xl
      2xl:px-14
      2xl:py-4
      2xl:my-2.5
      2xl:mx-2

     

    ">
      {/* hover:text-5xl  */}
        .Ali
      </h1>

      <nav>
        <ul className="flex justify-evenly items-center gap-x-10 2xl:gap-x-11">
          <li>
            <a href="https://google.com" target="_blank"
            className="text-smoke text-1xl px-5 py-2 outline outline-1 outline-smoke rounded-md
            hover:bg-silver hover:outline-none hover:text-white
            font-semibold transition-all
            sm:text-sm
            sm:px-3
            sm:py-1

            xl:text-2xl
            xl:px-6

            2xl:text-3xl
            2xl:px-7
            "
            >
            Contact Us
            </a>
          </li>

          <li>
            <a href="https://google.com" target="_blank"
            className="text-smoke text-1xl px-5 py-2 outline outline-1 outline-smoke rounded-md
            hover:bg-silver hover:outline-none hover:text-white
            font-semibold
            transition-all
            sm:text-sm
            sm:px-3
            sm:py-1

            xl:text-2xl
            xl:px-6

            2xl:text-3xl
            2xl:px-7
            "
            >
            Log In
            </a>
          </li>

          <li>
            <a href="https://google.com" target="_blank"
            className="text-smoke text-1xl px-5 py-2 outline outline-1 outline-smoke rounded-md
            hover:bg-silver hover:outline-none hover:text-white
            font-semibold transition-all
            sm:text-sm
            sm:px-3
            sm:py-1

            xl:text-2xl
            xl:px-6
            
            2xl:text-3xl
            2xl:px-7
            "
            >
            Main
            </a>
          </li>
        </ul>
      </nav>

      <button type="button" className="hover:bg-red-800">
          Menu
        </button>

    </div>
  );
}

export default Header;



/* xsm:bg-purple-400
sm:bg-white
md:bg-gray-900
lg:bg-red-700
xl:bg-blue-600
2xl:bg-yellow-700 */