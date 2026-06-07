import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">

      <h2>{ isLogin ? "Login Form" : "Signup Form" }</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      { isLogin && <p className="forgot">Forgot Password?</p> }

      <div className="button-group">

        <button
          type="button"
          className={ isLogin ? "active login" : "login" }
          onClick={ () => setIsLogin(true) }
        >
          Login
        </button>

        <button
          type="button"
          className={ !isLogin ? "active signup" : "signup" }
          onClick={ () => setIsLogin(false) }
        >
          SignUp
        </button>

      </div>

    </div>
  );
};

export default Auth;