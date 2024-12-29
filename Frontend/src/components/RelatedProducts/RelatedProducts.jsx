import React, { useContext } from 'react';
import Card from '../Card/Card.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShopContext } from '../../context/ShopContext.jsx';
import RelatedCard from '../Card/RelatedCard.jsx';


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

const RelatedProducts = ({id,category}) => {

  const {products} = useContext(ShopContext)

  const displayItems = products.filter(item => item.category === category && item._id !=id);

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
    <div className="slider-container mx-auto md:px-8 lg:px-16 my-10">
    <Slider className="" {...settings}>
    {displayItems.map((item, index) => (
          <div className='pl-2' key={index} onClick={() => window.scrollTo(0, 0)}>
            <RelatedCard  id={item._id} name={item.name} description={item.description} price={item.price} images={item.images} />
            </div>
        ))}
        </Slider>

    </div>
  );
};

export default RelatedProducts;
