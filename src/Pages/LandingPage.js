import React, { useEffect } from "react";
import LandingNavBar from "../Components/LandingPage/LandingNavBar/LandingNavBar";
import LandingMainContent from "../Components/LandingPage/LandingMainContent/LandingMainContent";
import DisplayFeatures from "../Components/LandingPage/DisplayFeatures/DisplayFeatures";
import { featData } from "../data";
import { useNavigate } from "react-router";


const LandingPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken){
            navigate('/home')
        }
        else{
           
        }
        
    },)



    document.title = "Netflix India - Watch TV Shows, Wtch Online Movies";
    const display = featData.map((movie, index) => {
        return (
            <DisplayFeatures
                title={movie.title}
                subtitle={movie.sub_title}
                img={movie.img}
                isRev={index % 2 == 0 ? false : true}
            />
        );
        //console.log(movie.img)
    });
    return (
        <>
            <LandingNavBar />
            <LandingMainContent />
            {display}
            {/* <DisplayFeatures title={fd1.title} subtitle={fd1.sub_title} img={fd1.img} />
    <DisplayFeatures title={fd2.title} subtitle={fd2.sub_title} img={fd2.img} rev/>
    <DisplayFeatures title={fd3.title} subtitle={fd3.sub_title} img={fd3.img} />
    <DisplayFeatures title={fd4.title} subtitle={fd4.sub_title} img={fd4.img} rev /> */}
        </>
    );
};

export default LandingPage;
