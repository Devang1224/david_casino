import React from "react";
import HeroSection from "../components/heroSection/HeroSection";

const Home = () => {
  return (
    <div className="px-8">
      <div className="py-4 flex justify-center gap-2 items-center bg-bgGreyDark">
        <span className="px-[7px] py-[1px] text-white bg-[#F19117] rounded-sm text-sm ">
          !
        </span>
        <span className="text-textGreyLight text-sm"> The legendary DavidCasino is back!</span>
      </div>
    <HeroSection/>
    </div>
  );
};

export default Home;
