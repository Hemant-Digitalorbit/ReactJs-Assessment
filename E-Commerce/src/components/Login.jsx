import React, { useState } from 'react';
import toast from 'react-hot-toast';
import '../styles/Login.css';

function Login({ closeModel, handleLogin }) {
    const [isRegister, setIsRegister] = useState(true); 
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleInputChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value
        })
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailRegex.test(form.email)) {
            toast.error("Please enter a valid email");
            return;
        }

        if (!passRegex.test(form.password)) {
            toast.error("Password must be at least 8 characters, with uppercase, lowercase, and special characters");
            return;
        }

        if(form.name && form.email && form.password){
            const newUser = { name: form.name, email: form.email, password: form.password };
            localStorage.setItem('user', JSON.stringify(newUser));
            setForm({name: '', email: '', password: ''})
            toast.success('Registration successful!')
            setIsRegister(false)
        }else {
            toast.error("Please fill out all fields.")
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        
        const loginStoredUser = JSON.parse(localStorage.getItem('user'))
        if (loginStoredUser && loginStoredUser.email === form.email && loginStoredUser.password === form.password){
            toast.success("Welcome back" + " " + loginStoredUser.name)
            closeModel()
            return loginStoredUser;
        }else {
            const userExists = handleLogin(form.email, form.password);
            if(userExists) {
                toast.success("Welcome back" + " " + userExists.name)
                closeModel()
            }else {
                toast.error("Invalid Credentials")
            }
        }
    };

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
                                    <input type="text" name='name' value={form.name} onChange={handleInputChange} required />
                                </>
                            )
                        }
                        <label>Email:</label>
                        <input type="email" name='email' value={form.email} onChange={handleInputChange} required />
                        <label>Password:</label>
                        <input type="password" name='password' value={form.password} onChange={handleInputChange} required />

                        <button>{isRegister ? "Sign Up" : "Login"}</button>
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

export default Login;
