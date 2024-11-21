import React, { useState } from 'react';
import toast from 'react-hot-toast';
import '../../../assets/styles/Login.css'
import { useUser } from '../../context/userService';
import { FcGoogle } from "react-icons/fc";


function LoginModal({ closeModel }) {
    const {signUp, signIn, signInWithGoogle} = useUser();

    const [isRegister, setIsRegister] = useState(true); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email");
            return;
        }
        if (!passRegex.test(password)) {
            toast.error("Password must be at least 8 characters, with uppercase, lowercase, and special characters");
            return;
        }
        signUp(name, email, password);
        closeModel();
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        await signIn( email, password);
        closeModel();
    };

    const handleLoginWithGoogle = async () => {
        await signInWithGoogle();
        closeModel();
    }

    return (
        <div className="loginContainer">
            <div className="loginMainDiv">
                <h1>{isRegister ? "Register" : "Login"}</h1>
                <form onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit} className="loginForm">
                    <div className="loginFormCont">
                        {
                            isRegister && (
                                <>
                                    <label>Name:</label>
                                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                                </>
                            )
                        }
                        <label>Email:</label>
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label>Password:</label>
                        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <button className='signbtn'>{isRegister ? "Sign Up" : "Login"}</button>

                        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', width: '100%' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: 'gray' }}></div>
                            <span style={{ padding: '0 10px', color: 'gray', fontWeight: 'bold' }}>OR</span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: 'gray' }}></div>
                        </div>
                        <button onClick={handleLoginWithGoogle} className='googlebtn'><FcGoogle /></button>
                    </div>
                    <div className="switchBtn">
                        <p>
                            {
                                isRegister ? "Already have an account? " : "Don't have an account? "
                            }
                            
                            <span onClick={() => setIsRegister(!isRegister)}>
                                {isRegister ? "Login" : "Sign up"}
                            </span>
                        </p>
                    </div>
                </form>
                <div className="closeBtn">
                    <button onClick={closeModel}>&times;</button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
