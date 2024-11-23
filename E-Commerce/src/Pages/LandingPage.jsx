import React from 'react'
import "../assets/styles/LandingPage.css";
import { FaLocationDot } from "react-icons/fa6";
import landingImage from "../assets/images/landingImage.png";
import { useUser } from '../components/context/userService';


const LandingPage = () => {
    const {setShowLogin} = useUser();

    return (
        <div id="home">
            <div className="background-illustration">
                <img src="https://www.figma.com/file/GAdqJWTqeoOJ4kR0N4T91D/image/09393b4856483b2e33f8c83648b77908d09d7335" alt="background illustration" />
            </div>
            <div className="home-div">
                <div className="home-container">
                    <div className="home-content">
                        <h1>Welcome to the <br></br><span>Candyland</span></h1>
                        <div className="data-container">
                            <button onClick={() => setShowLogin(true)} className="get-started">Get Started</button>
                        </div>
                    </div>
                    <div className="illustration">
                        <img src={landingImage} alt="Scooter delivery illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
