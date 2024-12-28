import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import FeatureCardsSection from '../components/FeatureCardsSection.jsx'
import SectionByLabel from '../components/SectionByLabel.jsx'
import FeaturedCategoriesSection from '../components/FeaturedCategoriesSection.jsx'
import CtaBannerSection from '../components/CtaBannerSection.jsx'

const Home = () => {
  return (
    <div>
      <HeroSection video={'/assets/HeroSecVideo.mp4'}/>
      <FeatureCardsSection />
      <SectionByLabel title={"Featured Products"} subTitle={"Discover our most popular accessories, crafted with precision and style"}/>
      <FeaturedCategoriesSection />
      <CtaBannerSection heading={"Elevate Your Mobile Experience"} subHeading={"Discover premium accessories tailored for your smartphone."} btnText={"Shop Mobile Accessories →"} image={'assets/MobileCTA.png'}/>
      <SectionByLabel title={"Best-Seller Products"} subTitle={"Explore our top-rated accessories, designed for performance and elegance!"}/>
      <CtaBannerSection heading={"Style Meets Functionality"} subHeading={"Explore sleek accessories to upgrade your watch game."
} btnText={"Shop Watch Accessories →"} image={'assets/WatchCTA.png'}/>
      <SectionByLabel title={"Trending Products"} subTitle={"Discover the Latest Must-Have Accessories Across All Categories"}/>
    </div>
  )
}

export default Home
