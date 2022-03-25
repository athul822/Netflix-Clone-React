import React from 'react'
import './DisplayFeatures.css'
const DisplayFeatText = () => {
    return (

        <div className='feat-card-text-container'>
            <h1 className='feat-card-title'>Enjoy on your TV.</h1>
            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>

        </div>
    )
}
const DisplayFeatImg = () => {
    return (
        <div className='feat-card-img-container'>
            <img className='feat-card-img' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        </div>
    )

}

const DisplayFeatures = () => {
    return (
        <div className='feat-card-section'>

            <div className='feat-card-container'>
                <DisplayFeatText />
                <DisplayFeatImg />
            </div>

        </div>

    )
}

export default DisplayFeatures