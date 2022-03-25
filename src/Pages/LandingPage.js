import React from 'react'
import LandingNavBar from '../Components/LandingPage/LandingNavBar/LandingNavBar'
import LandingMainContent from '../Components/LandingPage/LandingMainContent/LandingMainContent'
import DisplayFeatures from '../Components/LandingPage/DisplayFeatures/DisplayFeatures'

const LandingPage = () => {
  document.title='Netflix India'
  return (
    <>
    <LandingNavBar />
    <LandingMainContent />
    <DisplayFeatures />
    <DisplayFeatures title="" feat-card-container-flex-reverse />
    </>
  )
}

export default LandingPage