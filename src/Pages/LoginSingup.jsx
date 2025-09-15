import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CSS/LoginSignup.css'

const LoginSingup=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        agree: false
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleContinue = () => {
        if (!formData.name || !formData.email || !formData.password) {
            alert('Please fill in all fields.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!formData.agree) {
            alert('Please agree to the terms of use & privacy policy.');
            return;
        }
        // For now, just alert success and navigate to home
        alert('Signup successful!');
        navigate('/');
    };

    return(
        <div className='loginsigup'>
            <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsingup-fields">
                <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange}/>
                <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange}/>
            </div>
            <button onClick={handleContinue}>Continue</button>
            <p className="loginsingup-login">Already have an account ?<span>Login here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='agree' checked={formData.agree} onChange={handleChange} />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        </div>
    </div>
    )
}

export default LoginSingup;
