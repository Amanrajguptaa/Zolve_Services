import React, { useContext } from 'react';
import Card from '../Card/Card.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShopContext } from '../../context/ShopContext.jsx';

const NextArrow = ({ onClick }) => (
  <button
    className="absolute text-2xl top-1/2 -right-5 md:-right-5 transform -translate-y-1/2 bg-[#188ab9] text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg focus:outline-none z-10"
    onClick={onClick}
  >
    &#8250;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute text-2xl top-1/2 -ml-6 md:-ml-12 transform -translate-y-1/2 bg-[#188ab9] text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg focus:outline-none z-10"
    onClick={onClick}
  >
    &#8249;
  </button>
);

const RelatedProducts = ({ id, category }) => {
  const { products } = useContext(ShopContext);

  const displayItems = products.filter(
    (item) => item.category === category && item._id !== id
  );

  const settings = {
    dots: false,
    infinite: displayItems.length > 3, // Disable infinite scroll if items are fewer than slidesToShow
    speed: 500,
    slidesToShow: Math.min(displayItems.length, 3), // Dynamically set slidesToShow
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(displayItems.length, 2), // Adjust for medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(displayItems.length, 1), // Adjust for small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mx-auto md:px-8 lg:px-16 my-10">
      {displayItems.length > 0 ? (
        <Slider {...settings}>
          {displayItems.map((item, index) => (
            <div className="pl-2" key={index} onClick={() => window.scrollTo(0, 0)}>
              <Card
                id={item._id}
                title={item.name}
                description={item.description}
                price={item.price}
                images={item.images}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No related products available.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
