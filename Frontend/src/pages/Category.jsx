import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card.jsx";
import { ShopContext } from "../context/ShopContext";

const accessories = [
  {
    category: "mobile-accessories",
    subcategories: ["Rope", "Stand", "Covers", "Cleaning Kit"],
  },
  {
    category: "watch-accessories",
    subcategories: ["Straps", "Dials"],
  },
  {
    category: "charger-accessories",
    subcategories: ["Wireless", "Wired", "Braid Cables", "USB Tips"],
  },
  {
    category: "earbud-accessories",
    subcategories: ["Case", "Rope", "Cleaning Kits"],
  },
  {
    category: "stand-accessories",
    subcategories: ["Mobile Stand", "Car Stand"],
  },
  {
    category: "car-related-accessories",
    subcategories: ["Mounts", "Chargers"],
  },
];

const Category = () => {
  const { products } = useContext(ShopContext);
  const { categoryText } = useParams();
  const [filteredData, setFilteredData] = useState(null);
  const [filteredSubCategory, setFilteredSubCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const result = accessories.find(
      (item) => item.category === categoryText.toLowerCase()
    );
    setFilteredData(result);
    if (result) {
      setFilteredProducts(
        products.filter((product) => product.category === categoryText)
      );
    }
  }, [categoryText, products]);

  const handleFilter = (subcategory) => {
    if (subcategory === filteredSubCategory) {
      setFilteredSubCategory("");
      setFilteredProducts(
        products.filter((product) => product.category === categoryText)
      );
    } else {
      setFilteredSubCategory(subcategory);
      setFilteredProducts(
        products.filter(
          (product) =>
            product.category === categoryText &&
            product.subCategory === subcategory
        )
      );
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 my-10 max-w-screen-xl mx-auto">
      {filteredData ? (
        <>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 capitalize">
            {filteredData.category.replace(/-/g, " ")}
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
            {filteredData.subcategories.map((subcategory, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded-lg transition-colors mb-2 sm:mb-0 ${
                  filteredSubCategory === subcategory
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handleFilter(subcategory)}
              >
                {subcategory}
              </button>
            ))}
          </div>

          <div className="grid mx-3 md:mx-0 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card
                  key={product._id}
                  id={product._id}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  images={product.images}
                />
              ))
            ) : (
              <div className="text-center text-gray-500 col-span-full">
                No products found for this subcategory.
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">
          No data found for this category.
        </div>
      )}
    </div>
  );
};

export default Category;
