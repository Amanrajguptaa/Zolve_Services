import React from "react";
import {Link} from 'react-router-dom'
const FeaturedCategoriesSection = () => {
  const cardsData = [
    {
      FomoText: "Mobile Accessories",
      BtnCta: "Upgrade now—limited stock!",
      text: "Shop Now",
      route:'mobile-accessories'
    },
    {
      FomoText: "Watch Accessories",
      BtnCta: "Style your wrist—don’t wait!",
      text: "Explore Now",
      route:'watch-accessories'
    },
    {
      FomoText: "Charger Accessories",
      BtnCta: "Power up—going fast!",
      text: "Discover More",
      route:'charger-accessories'
    },
    {
      FomoText: "Earbud Accessories",
      BtnCta: "Better sound—limited availability!",
      text: "Grab Yours",
      route:'earbud-accessories'
    },
    {
      FomoText: "Stand Accessories",
      BtnCta: "Perfect angles—grab yours now!",
      text: "Check It Out",
      route:'stand-accessories'
    },
    {
      FomoText: "Car Related Accessories",
      BtnCta: "Drive smarter—stock running out!",
      text: "Browse Now",
      route:'car-related-accessories'
    },
  ];

  return (
    <div className="main_ctr flex my-10 items-center justify-center flex-col py-10 px-10 sm:px-16 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col text-center">
        <div className="heading_ctr text-4xl font-semibold font-agrandir">
          Our Collections
        </div>
        <div className="subheading_ctr text-lg mt-1">
          Explore our curated collections designed to complement your tech
          lifestyle
        </div>
      </div>
      <div className="cards_ctr w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((cardData, index) => (
          <Link
  to={`/category/${cardData.route}`}
  onClick={() => window.scrollTo(0, 0)}
>          <div
            key={index}
            className={`card py-8 px-8 rounded-lg sm:flex flex-col gap-3 shadow-md ${
              index % 2 == 0 ? "bg-[#efefef]" : "bg-[#188AB9] text-white"
            } ${index > 2 ? "hidden" : "flex"}`}
          >
            <div className="font-semibold text-xl font-agrandirtb">{cardData.FomoText}</div>
            <div className="text-md">{cardData.BtnCta}</div>
            <div className="text-sm font-semibold cursor-pointer flex items-center">
              {cardData.text}
              <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className="explore_btn flex items-center justify-center bg-[#188AB9] rounded-full text-white px-8 py-4 text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out">
        Featured Collections
        <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
      </div>
    </div>
  );
};

export default FeaturedCategoriesSection;
