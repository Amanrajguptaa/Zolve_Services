import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import CtaBannerSection from '../components/CtaBannerSection'
import SectionByLabel from '../components/SectionByLabel'

const LimitedEdition = () => {
  return (
    <div>
        <HeroSection video={'/assets/LimitedEditionSecVid.mp4'}/>
        <CtaBannerSection heading= {'Sale Live Soon..'} subHeading={'We will be there with new designs soon...'} btnText={'Wait Is Fruitful'} image={'/assets/SaleCTA.png'}/>
        <SectionByLabel/>
        <SectionByLabel/>
    </div>
  )
}

export default LimitedEdition
