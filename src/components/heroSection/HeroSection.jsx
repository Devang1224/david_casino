import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-black py-10">
      <div className="flex items-center justify-between px-32">
        <div className="flex items-center gap-3">
          <p className="text-textBlue text-[22px]">997,883,434</p>
          <p className="text-sm text-textGreyLight">BETS MADE</p>
        </div>
        <div className="flex items-center">
          <p className="text-2xl">
            Welcome to <span className="text-textBlue">DavidCasino</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-textGreyLight">TOTAL WON</p>
          <p className="text-textBlue text-[22px]">3,023,171</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
