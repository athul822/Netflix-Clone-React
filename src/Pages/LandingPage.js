import React from 'react'
import LandingNavBar from '../Components/LandingPage/LandingNavBar/LandingNavBar'
import LandingMainContent from '../Components/LandingPage/LandingMainContent/LandingMainContent'
import DisplayFeatures from '../Components/LandingPage/DisplayFeatures/DisplayFeatures'
import { featData } from '../data'

const LandingPage = () => {
 const [fd1,fd2,fd3,fd4] = featData
  document.title='Netflix India'
  return (
    <>
    <LandingNavBar />
    <LandingMainContent />
    <DisplayFeatures title={fd1.title} subtitle={fd1.sub_title} img={fd1.img} />
    <DisplayFeatures title={fd2.title} subtitle={fd2.sub_title} img={fd2.img} rev/>
    <DisplayFeatures title={fd3.title} subtitle={fd3.sub_title} img={fd3.img} />
    <DisplayFeatures title={fd4.title} subtitle={fd4.sub_title} img={fd4.img} rev />
    </>
  )
}

export default LandingPage