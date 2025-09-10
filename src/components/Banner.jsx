import React from "react";
import jblSoundbox from "../assets/jbl_soundbox_image.png";
// import arrowIconWhite from "../assets/arrow_icon_white.png";
import mdController from "../assets/md_controller_image.png";
import smController from "../assets/sm_controller_image.png";
import {  FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#e6f2e6] my-16 rounded-xl overflow-hidden">
      {/* Left JBL Speaker Image */}
      <img
        className="max-w-56"
        src={jblSoundbox}
        alt="jbl_soundbox_image"
      />

      {/* Text & Button */}
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl  font-semibold max-w-[290px]">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          From immersive sound to precise controls—everything you need to win
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-green-800 rounded text-white">
          Buy now
          {/* <img
            className="group-hover:translate-x-1 transition"
            src={arrowIconWhite}
            alt="arrow_icon_white"
          /> */}
          <FaArrowRight size={20}  className="ml-2 group-hover:translate-x-1 transition"/>
        </button>
      </div>

      {/* Right Controller Images (responsive) */}
      <img
        className="hidden md:block max-w-80"
        src={mdController}
        alt="md_controller_image"
      />
      <img
        className="md:hidden"
        src={smController}
        alt="sm_controller_image"
      />
    </div>
  );
};

export default Banner;
