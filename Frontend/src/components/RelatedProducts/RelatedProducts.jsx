import React, { useContext } from 'react';
import Card from '../Card/Card.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShopContext } from '../../context/ShopContext.jsx';


const NextArrow = ({ onClick }) => (
  <button
    className="absolute text-2xl top-1/2 -right-16 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10"
    onClick={onClick}
  >
    &#8250;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute text-2xl top-1/2 -ml-16 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10"
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
    <div className="relative mx-4 mt-10 k">
      <div className='hidden md:block'>
      <Slider className=" mx-10 md:mx-10" {...settings}>
        {displayItems.map((item, index) => (
          <div key={index}>
            <Card id={item._id} title={item.title} description={item.description} price={item.price} images={item.images} />
            </div>
        ))}
        </Slider>
        </div>


      <div className="flex flex-col gap-10 md:hidden">
        {displayItems.map((item, index) => (
          <div key={index}>
            <Card id={item._id} title={item.title} description={item.description} price={item.price} images={item.images} />
            </div>
        ))}
      </div>
      
    </div>
  );
};

export default RelatedProducts;
