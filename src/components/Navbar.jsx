import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="
       ">
        <nav className="fixed max-w-full container m-auto flex justify-around py-5 mx-auto bg-white">
          <div>
            <h3 className="text-2xl font-medium text-black">Fortnite App</h3>
          </div>
          <div className="space-x-8 text-xl ">
            <a href="#">Home</a>
            {/* <a href="#">About Us</a> */}
            <a href="#news">News</a>
            <a href="#">Shop</a>
            <a href="#daily">Daily Offers</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
