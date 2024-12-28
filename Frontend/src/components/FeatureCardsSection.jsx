import React from "react";

const FeatureCardsSection = () => {
  return (
    <div className="my-10 main_ctr flex items-center justify-between gap-4 px-10 md:px-16 py-10 text-white flex-wrap sm:flex-nowrap">
      <div className="w-full sm:w-4/12 bg-[#188AB9] rounded-lg h-full p-6 flex flex-col items-center justify-center sm:gap-2 gap-1">
        <div className="bi bi-palette-fill text-4xl mb-2"></div>
        <div className="font-semibold text-xl text-center leading-6 font-agrandir">
          Aesthetic Designs
        </div>
        <div className="text-center leading-5">
          Brand asthetics to complement functionality
        </div>
      </div>
      <div className="w-full sm:w-4/12 bg-[#188AB9] rounded-lg h-full p-6 flex flex-col items-center justify-center sm:gap-2 gap-1">
        <div className="bi bi-hand-thumbs-up-fill text-4xl mb-2"></div>
        <div className="font-semibold text-xl text-center leading-6 font-agrandir">
          Quality materials
        </div>
        <div className="text-center leading-5">
          Durable, carefully selected materials
        </div>
      </div>
      <div className="w-full sm:w-4/12 bg-[#188AB9] rounded-lg h-full p-6 flex flex-col items-center justify-center sm:gap-2 gap-1">
        <div className="bi bi-eye-fill text-4xl mb-2"></div>
        <div className="font-semibold text-xl text-center leading-6 font-agrandir">
          Attention to Detail
        </div>
        <div className="text-center leading-5">
          Precision-crafted elements with purpose
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsSection;
