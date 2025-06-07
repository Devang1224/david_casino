import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdSmartDisplay } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="py-10 px-32 bg-hero-section bg-cover bg-center">
      <div className="flex items-start justify-between ">
        <div className="flex items-center gap-3">
          <p className="text-textBlue text-[22px]">997,883,434</p>
          <p className="text-sm text-textGreyLight">BETS MADE</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl">
            Welcome to <span className="text-textBlue">DavidCasino</span>
          </p>
          <p className="text-md text-textGreyLight mt-4 cursor-pointer hover:text-white transition-all duration-300">
            Click here to access your account
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-textGreyLight">TOTAL WON</p>
          <p className="text-textBlue text-[22px]">3,023,171</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-7">
        <button className="bg-bgGreyBtn2 hover:bg-bgGreyBtn3 px-[15px] py-[5px] flex items-center gap-2 group rounded-l-[3px]">
          <BsFillMoonStarsFill
            className="text-textGreyLight group-hover:text-white transition-all duration-300"
            size={12}
          />
          <p className="text-[12px] text-textGreyLight group-hover:text-white transition-all duration-300">
            NIGHT
          </p>
        </button>
        <button className="bg-bgGreyBtn2 hover:bg-bgGreyBtn3 px-[15px] py-[5px] flex items-center gap-2 group ">
          <HiMiniSpeakerWave
            className="text-textGreyLight group-hover:text-white transition-all duration-300"
            size={15}
          />
          <p className="text-[12px] text-textGreyLight group-hover:text-white transition-all duration-300">
            SOUND
          </p>
        </button>
        <button className="bg-bgGreyBtn2 hover:bg-bgGreyBtn3 px-[15px] py-[5px] flex items-center gap-2 group ">
          <MdSmartDisplay
            className="text-textGreyLight group-hover:text-white transition-all duration-300"
            size={14}
          />
          <p className="text-[12px] text-textGreyLight group-hover:text-white transition-all duration-300">
            ANIMATION
          </p>
        </button>
        <button className="bg-bgGreyBtn2 hover:bg-bgGreyBtn3 px-[15px] py-[5px] flex items-center gap-2 group ">
          <FaRegSquare
            className="text-textGreyLight group-hover:text-white transition-all duration-300"
            size={12}
          />
          <p className="text-[12px] text-textGreyLight group-hover:text-white transition-all duration-300">
            HOTKEYS
          </p>
        </button>
        <button className="bg-bgGreyBtn2 hover:bg-bgGreyBtn3 px-[15px] py-[5px] flex items-center gap-2 group rounded-r-[3px]">
          <IoMdMusicalNote
            className="text-textGreyLight group-hover:text-white transition-all duration-300"
            size={14}
          />
          <p className="text-[12px] text-textGreyLight group-hover:text-white transition-all duration-300">
            RADIO
          </p>
        </button>
        <button className="bg-bgGreyBtn2 hover:bg-bgGreyBtn3 px-[15px] py-[5px] flex items-center gap-2 group ml-5 rounded-[3px] ">
          <FaSackDollar
            className="group-hover:text-golden-100 text-golden-600 transition-all duration-300"
            size={12}
          />
          <p className="text-[12px] text-textGreyLight group-hover:text-white transition-all duration-300">
            234.23323 USDT
          </p>
        </button>
      </div>

      <div className="mt-7 flex items-center justify-between ">
        <div>
          <p className="text-[32px] text-textGreyLight hover:text-white transition-all duration-300 cursor-pointer">ROLL UNDER</p>
        </div>
        <div className="w-[467px] h-[240px] flex items-center  gap-1  border-[5px] border-black rounded-lg ">
          <div className="flex flex-col items-center justify-center  pb-5 border border-r-[5px] border-black bg-[rgba(0,0,0,0.06)]">
            <input
              type="text"
              className="w-full text-[125px] bg-transparent border-none outline-none text-center font-[500]"
              maxLength={2}
              placeholder="--"
              value="50"
            />
            <p className="text-textGreyLight2 text-[14px]">PREDICTION</p>
          </div>
          <div className="flex flex-col items-center justify-center pb-5 bg-[rgba(0,0,0,0.06)]">
            <input
              type="text"
              className="w-full text-[125px] bg-transparent border-none outline-none text-center font-[500] text-green-100"
              disabled
              value="00"
            />
            <p className="text-textGreyLight2 text-[14px]">LUCKY NUMBER</p>
          </div>
        </div>
        <div>
          <p className="text-[32px] text-white transition-all duration-300 cursor-pointer underline underline-offset-4 ">ROLL OVER</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
