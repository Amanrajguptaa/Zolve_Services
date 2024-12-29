import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isHamBurger, setIsHamBurger] = useState(false);
  function toggleHamBurger() {
    setIsHamBurger(!isHamBurger);
  }
  return (
    <>
      <div className="main_ctr w-full flex items-center justify-between gap-8 px-10 py-4 pt-8">
        <div
          className={`hamburger bi bi-list lg:hidden cursor-pointer ${
            isHamBurger ? "bi bi-x-circle" : ""
          }`}
          onClick={() => toggleHamBurger()}
        ></div>
        <div className="left_ctr w-3/12 md:w-2/12 font-bold text-2xl flex items-center justify-center cursor-pointer font-horizon ">
          Zolve
        </div>

        <div className="mid_ctr w-9/12 items-center justify-center gap-6 font-extralight hidden lg:flex cursor-pointer">
          <div>Categories</div>
          <div>Trending</div>
          <div>Best Seller</div>
          <div>Collaborations</div>
          <Link to={"/limited-edition"}>
            {" "}
            <div>Limited Editions</div>
          </Link>
          <div>Blogs</div>
        </div>
        <div className="right_ctr w-2/12 flex items-center justify-center gap-3 sm:gap-4 cursor-pointer">
          <div className="bi bi-search hover:scale-[1.2] duration-200 ease-in-out"></div>
          <Link to={"/profile"}>
            <div className="bi bi-person-circle hover:scale-[1.2] duration-200 ease-in-out"></div>
          </Link>
          <Link to={"/cart"}>
            <div className="bi bi-bag hover:scale-[1.2] duration-200 ease-in-out"></div>
          </Link>
        </div>
      </div>
      <div
        className={`sm_sidebar lg:hidden ml-4 sm:ml-10 rounded-md border border-black/50 max-w-[150px] sm:w-3/12 px-8 py-6 flex-col gap-4 text-sm absolute bg-white/10 backdrop-blur-xl -mt-0 sm:-mt-5 ${
          isHamBurger ? "flex" : "hidden"
        }`}
      >
        <div>Categories</div>
        <div>Trending</div>
        <div>Gift Finder</div>
        <div>Best Seller</div>
        <div>About Us</div>
        <div>Blogs</div>
      </div>
    </>
  );
};

export default Header;
