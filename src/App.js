/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";




function App() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus ? "solid 0px transparent" : "solid 2px #e70b89",
    fontWeight: registrationFormStatus ? "500" : "750",

    //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus ? "solid 2px #e70b89" : "solid 0px transparent", //Animate bottom border of register button
    fontWeight: registrationFormStatus ? "750" : "500",
  });


  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="logonhead">
        <div className="logo"><img src="./logo512.png" className="App-logo" alt="logo" /></div>
        <p>Streamlined Professional Access</p>
      </div>
      <div className="nav-buttons">

        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}

        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Signup
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>

        </animated.form>
      </div>
      <div className="forgot"><a href="#">Forgot Password?</a></div>
      <div className="forgot-panel">

        <p>or login with</p>
        <div className="icons">
          <a href="http://www.google.com"><img src="./google.png" alt="" srcset="" /></a>
          <a href="https://www.facebook.com/login/"> <img src="./fb.png" alt="" srcset="" /></a>
          <a href="https://twitter.com/i/flow/login"> <img src="./twit.png" alt="" srcset="" /> </a>
        </div>
        <div className="options" >Don't Have an Account? <a href="http://" className="new">Create new now!</a></div>
        <div className="options" >By signing up, you are agree with our <a href="http://" className="terms"> Terms and Conditions</a></div>
      </div>  </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username"></label>
      <input type="text" id="username" placeholder="Email Address" />
      <label for="password"></label>
      <input type="password" id="username" placeholder="Password" />
      <button className="submit">LOGIN</button>
    </React.Fragment>
  );
}


export default App;
