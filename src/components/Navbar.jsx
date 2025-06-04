const Navbar = () => {
  return (
    <nav className="w-full bg-appBlack h-[90px]">
      <div className="flex items-center justify-between p-2 md:mx-32">
        <p className="text-3xl ">David Casino</p>
        <div className="flex items-center">
          <button className=" py-7 border-b-[2px] border-transparent hover:border-b-appBlue group   ">
            <p className="text-[13px] text-textGrey border border-1 border-y-0 border-l-0 border-textGrey w-full px-4 group-hover:text-white transition-colors duration-200 cursor-pointer">
              LOGIN
            </p>
          </button>
          <button className="hidden md:inline-block py-7 border-b-[2px] border-transparent hover:border-b-appBlue group ">
            <p className="text-[13px] border border-1 text-textGrey border-y-0 border-l-0 border-textGrey w-full px-4 group-hover:text-white transition-colors duration-200 cursor-pointer  ">
              CREATE AN ACCOUNT
            </p>
          </button>
          <button className="hover-white hidden md:inline-block py-7 border-b-[2px] border-transparent hover:border-b-appBlue group ">
            <p className="px-4 text-[13px] text-textGrey group-hover:text-white transition-colors duration-200 cursor-pointer">CONTACT US</p>
          </button>
          <button className=" py-7 inline-block md:hidden hover-white py-7 border-b-[2px] border-transparent hover:border-b-appBlue group ">
            <p className="text-[13px] text-textGrey  w-full px-4 group-hover:text-white transition-colors duration-200 cursor-pointer">SIGN UP</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
