import React, { useState } from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        navigate("/home");
    };

  return (
    <>
    <div className="login-container">
        <h1 style={{margin:"0px"}}>Login</h1>
        <p>
            By signing in you are agreeing to our
            <br/>
            <a style={{color:"darkblue"}}>Terms & Conditions</a>
            &nbsp;and&nbsp;
            <a style={{color:"darkblue"}}>Privacy policy</a>
        </p>
        <div style={{fontSize:"22px"}}>
            <a href='/' style={{textDecoration:"underline", color:"black"}}>Login</a>
            &nbsp;&nbsp;&nbsp;
            <a>Register</a>
        </div>
        <br/>
        <form onSubmit={handleSubmit}>
            <div className="wrapper" style={{display:"flex"}}>
                <i class="fa-solid fa-envelope"></i>
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <br/>
            <div className="wrapper" style={{display:"flex"}}>
                <i class="fa-solid fa-lock"></i>
                <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <br/>
            <div>
                <label>
                    <input type="checkbox"/> Remember Password
                </label>
                &nbsp;
                <a style={{color:'darkblue'}}>Forgot Password?</a>
            </div>
            <br/>
            <button type="submit" onSubmit={handleSubmit}>Login</button>
        </form>
        <p className='social-login'>
            or connect with
            <br/><br/>
            <a style={{color:'blue'}}><i class="fa-brands fa-facebook"></i></a>
            <a style={{color: '#E1306C'}}><i class="fa-brands fa-instagram"></i></a> 
            <a style={{color:'red'}}><i class="fa-brands fa-pinterest"></i></a> 
            <a style={{color:'darkblue'}}><i class="fa-brands fa-linkedin"></i></a>
        </p>
    </div>
    </>
  )
}

export default Login