import { useState, useEffect } from "react";
import {
  loginUser,
  signupUser,
  getUsers,
  clearUsers
} from "../Utils/Auth";

const Auth = ({ setUser }) => {
  // Mode
  const [isLogin, setIsLogin] = useState(true);

  // Messages
  const [loginMsg, setLoginMsg] = useState("");
  const [signupMsg, setSignupMsg] = useState("");

  // Users
  const [savedUsers, setSavedUsers] = useState([]);

  // Form
  const [form, setForm] = useState({
    name: "",
    password: "",
    confirmPassword: ""
  });

  // Load users
  useEffect(() => {
    setSavedUsers(getUsers());
  }, [isLogin, loginMsg, signupMsg]);

  // Handle Input
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Submit
  const handleSubmit = () => {
    if (isLogin) {
      const user = loginUser(form.name, form.password);

      if (!user) {
        setLoginMsg("Invalid credentials");
        setSignupMsg("");
        return;
      }

      setLoginMsg("Logged in successfully");
      setSignupMsg("");

      setUser(user.name);
    } else {
      if (
        !form.name ||
        !form.password ||
        !form.confirmPassword
      ) {
        setSignupMsg("Fill all fields");
        setLoginMsg("");
        return;
      }

      if (form.password !== form.confirmPassword) {
        setSignupMsg("Passwords do not match");
        setLoginMsg("");
        return;
      }

      const result = signupUser({
        name: form.name,
        password: form.password
      });

      if (result.error) {
        setSignupMsg(result.error);
        setLoginMsg("");
        return;
      }

      setSignupMsg("Account created successfully");
      setLoginMsg("");

      setSavedUsers(getUsers());

      setUser(form.name);
    }

    setForm({
      name: "",
      password: "",
      confirmPassword: ""
    });
  };

  // Clear Users
  const handleClearUsers = () => {
    clearUsers();
    setSavedUsers([]);
  };

  return (
    <div className="auth-container">

      <h2>
        { isLogin ? "Login" : "Sign Up" }
      </h2>

      { (loginMsg || signupMsg) && (
        <p className="msg">
          { isLogin ? loginMsg : signupMsg }
        </p>
      ) }

      <div className="tab-group">

        <button
          className={ isLogin ? "tab active" : "tab" }
          onClick={ () => setIsLogin(true) }
        >
          Login
        </button>

        <button
          className={ !isLogin ? "tab active" : "tab" }
          onClick={ () => setIsLogin(false) }
        >
          Sign Up
        </button>

      </div>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={ form.name }
        onChange={ handleChange }
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={ form.password }
        onChange={ handleChange }
      />

      { !isLogin && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={ form.confirmPassword }
          onChange={ handleChange }
        />
      ) }

      <button
        className="submit"
        onClick={ handleSubmit }
      >
        { isLogin ? "Login" : "Create Account" }
      </button>

      <div className="saved-users">

        <h3>Saved Users</h3>

        <button
          className="clear-btn"
          onClick={ handleClearUsers }
        >
          Clear All Users
        </button>

        { savedUsers.length === 0 ? (
          <p>No users yet</p>
        ) : (
          savedUsers.map((user, index) => (
            <div
              key={ index }
              className="user-item"
            >
              <p>{ user.name }</p>
            </div>
          ))
        ) }

      </div>

    </div>
  );
};

export default Auth;