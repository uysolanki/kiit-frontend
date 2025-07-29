import React, { useState } from 'react'
import eye from '../assets/images/eye.png';
import hide_eye from '../assets/images/hide_eye.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginUser.css'

const LoginUser = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function togglePasswordVisibility()
    {
        setShowPassword(!showPassword);
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        axios.post('http://localhost:8087/login', { username, password })
        .then(result => {
                console.log(result);
                if(result.data === "no user")
                  alert("User does not exist")
                else if (result.data === "success") {
                    alert('Login Successfull')
                    navigate("/");
                }
                else if(result.data === "not success")
                  alert("Please enter correct password")
            })
            .catch(err => alert(err));
    }
  return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-fields">
                        <input type="email" placeholder="Enter Email" name='username' onChange={(e) => setUsername(e.target.value)} />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{marginRight:'20px'}}
                            />
                            <button
                                type="button"
                                className="password-toggle-button"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <img src={eye} alt="" /> : <img src={hide_eye} alt="" />}
                            </button>
                        </div>
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>
                <div className="login-forgot">
                    <p>Forgot your password?</p>
                </div>
            </div>
        </div>
    )
}

export default LoginUser