import React, { useEffect } from "react";
import '../../../assets/styles/AgeVerification.css'
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

function AgeConfirmation({ setIsAgeVerified, handleLogout }) {

  const navigate = useNavigate()
  
  const handleVerifyAge = (age) => {
    if (age) {
      setIsAgeVerified(true);
      navigate('/')
    } else {
      toast.error("Access restricted to users 21 and over.");
    }
  };
  

  return (
    <div className="ageVerificationCont">
      <div className="ageVerBox">
        <div className="ageVerImg">
          <img src="https://s3-alpha-sig.figma.com/img/6def/de3b/8d30489612220b62b81fc43ea6ab41ad?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZU-Z6H2OM5E~HeN5ikIHjMc8L1caqDJ0S6qIRLtSfloP7JCSGZUfJMIxTwZxWSLpFN~ck6yJrKf0GfHiF-sCYXAnu2y7pgW4j5uWGAeMKo1j9XBzX4N1VOxc4ciiyyOToE1tOEBVU9Dgp3gKZZeSVG2zBxD5n8h-jMh8WTBfH8t7t0n-zKJc7EjvigE-f~sOJewx27qt1ld8kXA0~RVrbk-i8sX3wWwGZAHn~txHG3MjYma1vIBW2fCcEDMxi49Ms-NC7MECz2tFmB2bWSQEgjRzN57JZ5TWZqgGJwSZKWIoFgY4lGjBe8zpxi7B0oH0fHbf5~pNy55S-5qLQaJ14Q__" />
        </div>
        <h2>Are you 21 or older?</h2>
        <button onClick={() => handleVerifyAge(true)} className="yesBtn">Yes</button>
        <button onClick={() => handleVerifyAge(false)} className="noBtn">No</button>
      </div>
    </div>
  );
}

export default AgeConfirmation;
