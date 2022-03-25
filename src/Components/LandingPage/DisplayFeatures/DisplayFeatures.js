import React from 'react'
import './DisplayFeatures.css'
const DisplayFeatText = (props) => {

    return (

        <div className='feat-card-text-container'>
            <h1 className='feat-card-title'>{props.title}</h1>
            <h2>{props.sub_title}</h2>

        </div>
    )
}
const DisplayFeatImg = (props) => {
    return (
        <div className='feat-card-img-container'>
            <img className='feat-card-img' src={props.img} alt="" />
        </div>
    )

}

const DisplayFeatures = (props) => {
    
console.log()
    return (
        <div className="feat-card-section">

            <div className={props.rev ?`feat-card-container flex-reverse`:`feat-card-container`}>
                <DisplayFeatText title={props.title} sub_title={props.subtitle} />
                <DisplayFeatImg img={props.img} />
            </div>

        </div>

    )
}

export default DisplayFeatures