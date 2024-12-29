import React from "react";

const HeroSection = ({ video }) => {
  return (
    <div className="main_ctr flex items-center justify-center py-10">
      <video src={video} autoPlay muted />
    </div>
  );
};

export default HeroSection;
