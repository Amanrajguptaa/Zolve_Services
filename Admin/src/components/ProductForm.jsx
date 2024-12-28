import React, { useState } from "react";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';


const categoriesData = [
  {
    category: "mobile-accessories",
    subCategories: ["Rope", "Stand", "Covers", "Cleaning Kit"],
  },
  {
    category: "watch-accessories",
    subCategories: ["Straps", "Dials"],
  },
  {
    category: "charger-accessories",
    subCategories: ["Wireless", "Wired", "Braid Cables", "USB Tips"],
  },
  {
    category: "earbud-accessories",
    subCategories: ["Case", "Rope", "Cleaning Kits"],
  },
  {
    category: "stand-accessories",
    subCategories: ["Mobile Stand", "Car Stand"],
  },
  {
    category: "car-related-accessories",
    subCategories: ["Mounts", "Chargers"],
  },
];



const ProductForm = ({ token }) => {
  const [image1, setImage1] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestSeller, setBestSeller] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory("");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("discount", discount);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      image1 && formData.append("image1", image1);

      const response = await axios.post(
        "https://zolve-services.onrender.com/api/product/add-product",
        formData,
        { headers: { token } }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSubCategories = () => {
    const selectedCategoryData = categoriesData.find(
      (cat) => cat.category === category
    );
    return selectedCategoryData ? selectedCategoryData.subCategories : [];
  };

  return (
    <div className="mx-12 lg:ml-52 bg-[#F6F6F6] shadow-lg p-8 border-2 border-black/25 rounded-lg my-8 w-[110%]">
      <h2 className="text-2xl font-bold text-[#1a94c2] mb-6 text-center">
        Add New Product
      </h2>
      <form onSubmit={onSubmitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 pb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm py-2 px-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 pb-1">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm py-2 px-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 pb-1">
              Discount %
            </label>
            <input
              type="number"
              name="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter discount percentage"
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm py-2 px-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 pb-1">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={handleCategoryChange}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm py-2 px-3"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              {categoriesData.map((cat, index) => (
                <option key={index} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 pb-1">
              Sub-Category
            </label>
            <select
              name="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm py-2 px-3"
              required
            >
              <option value="" disabled>
                Select Sub-Category
              </option>
              {getSubCategories().map((subCat, index) => (
                <option key={index} value={subCat}>
                  {subCat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 pb-1">
              Product Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description (max 250 characters)"
              maxLength={250}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm py-2 pb-8 px-3 resize-none"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 pb-1">
              Product Image
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[{ name: "image1", state: image1, setState: setImage1 }].map((imageObj, index) => (
                <label
                  key={index}
                  htmlFor={imageObj.name}
                  className=" w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex items-center justify-center bg-gray-100 hover:bg-gray-200"
                >
                  {imageObj.state ? (
                    <img
                      src={URL.createObjectURL(imageObj.state)}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mb-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16l3-3m0 0l3 3m-3-3v12m9-16l3-3m0 0l3 3m-3-3v12"
                        />
                      </svg>
                      <span>Upload Image</span>
                    </div>
                  )}
                  <input
                    type="file"
                    id={imageObj.name}
                    className="hidden"
                    onChange={(e) => imageObj.setState(e.target.files[0])}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="bestSeller"
              checked={bestSeller}
              onChange={() => setBestSeller((prev) => !prev)}
              className="h-4 w-4 text-gray-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-600 pb-1">
              Add to Best Seller
            </label>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className={`w-full text-white bg-[#1a94c2] py-2 px-4 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v4M12 18v4M6 6l2.5 2.5M6 18l2.5-2.5M18 6l-2.5 2.5M18 18l-2.5-2.5"
                  />
                </svg>
                <span className="ml-2">Saving...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
