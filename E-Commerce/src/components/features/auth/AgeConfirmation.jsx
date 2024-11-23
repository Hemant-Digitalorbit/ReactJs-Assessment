import React from "react";
import logo from '../../../assets/images/logo.png';
import '../../../assets/styles/AgeVerification.css'
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { useUser } from "../../context/userService";

function AgeConfirmation() {
  
  const {setIsAgeVerified} = useUser();
  const navigate = useNavigate()
  
  const handleVerifyAge = (age) => {
    if (age) {
      sessionStorage.setItem("isAgeVerified", "true");
      navigate('/')
    } else {
      toast.error("Access restricted to users 21 and over.");
    }
  };
  

  return (
    <div className="ageVerificationCont">
      <div className="ageVerBox">
        <div className="ageVerImg">
          <img src={logo} />
        </div>
        <h2>Are you 21 or older?</h2>
        <button onClick={() => handleVerifyAge(true)} className="yesBtn">Yes</button>
        <button onClick={() => handleVerifyAge(false)} className="noBtn">No</button>
      </div>
      <img className="topImg" src="https://www.figma.com/file/GAdqJWTqeoOJ4kR0N4T91D/image/09393b4856483b2e33f8c83648b77908d09d7335" />
      <img className="bottomImg" src="https://s3-alpha-sig.figma.com/img/0939/3b48/56483b2e33f8c83648b77908d09d7335?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T97JYMDGHSVmQRQFNK4NGK81iTlJT~YmgUtVpswqT8KjjSpaOYDBYB4jB~vcYZhpMyCIvRKgf0nAXNPnNcohvRumQpwyHUTY9IPfpmN4P33F4NjHRyPTu6~gE5q~qQnrAt9w65Gn1ljT3YeaK6kwx-TjIwVjFSWUoklcAsA2aY9H-7i8AR2ODavX8pemZ~0-Nj-5S6VOZHDYI5RcD6T5WovMim4AVsWUDmGZQBWggPXnjlkiT8OEEEiqgB4bG3oJlanuxXAE5nsOuk2V9GLeeHYhn2fdTr3QFhtUcU4PRk3eYnRnqF~bv~iEk2-7GwfNoYSn5UJpzTdolUtPGtDh0A__" />
    </div>
  );
}

export default AgeConfirmation;
