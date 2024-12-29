import React, { useContext } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card/Card.jsx';
import { ShopContext } from '../context/ShopContext.jsx';

const NextArrow = ({ onClick }) => (
  <button
    className="absolute text-2xl top-1/2 -right-0 md:-right-5 transform -translate-y-1/2 bg-[#188ab9] text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg focus:outline-none z-10"
    onClick={onClick}
  >
    &#8250;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute text-2xl top-1/2 -ml-8 md:-ml-12 transform -translate-y-1/2 bg-[#188ab9] text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg focus:outline-none z-10"
    onClick={onClick}
  >
    &#8249;
  </button>
);

const SectionByLabel = ({ title, subTitle }) => {
  const { products } = useContext(ShopContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="text-center pb-6">
        <div className="heading_ctr text-4xl font-semibold font-agrandir">{title}</div>
        <div className="subheading_ctr text-lg mt-2 md:mt-1">{subTitle}</div>
      </div>

      <div className="slider-container mx-auto md:px-8 lg:px-16">
        <Slider className="pl-8 md:pl-8 " {...settings}>
          {products.slice(0, 6).map((product, index) => (
            <div key={index} onClick={() => window.scrollTo(0, 0)}>
              <Card
                id={product._id}
                title={product.name}
                description={product.description}
                price={product.price}
                images={product.images}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionByLabel;
