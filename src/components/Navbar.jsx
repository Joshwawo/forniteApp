import React from "react";

const Navbar = () => {
  return (
    <>
      <header
        className="
       "
      >
        <nav className="fixed max-w-full container m-auto flex justify-around py-5 mx-auto bg-white">
          <div className="">
            <a href="/" className="text-2xl font-medium text-black ">
              Fortnite App
            </a>
          </div>
          <div className="space-x-8 text-xl  font-semibold">
            <a href="#" className=" hover:text-green-500">
              Home
            </a>
            {/* <a href="#">About Us</a> */}
            <a href="#news" className=" hover:text-green-500">
              News
            </a>
            <a href="#" className=" hover:text-green-500">
              Shop
            </a>
            <a href="#daily" className=" hover:text-green-500">
              Daily Offers
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
