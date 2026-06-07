import React, { useState, useEffect } from "react";
import { loginUser, signupUser, getUsers, clearUsers } from "../Utils/Auth";

const Auth = ({ setUser }) => {

  // 1. Login ya Signup mode
  const [isLogin, setIsLogin] = useState(true);

  // 2. Messages
  const [loginMsg, setLoginMsg] = useState("");
  const [signupMsg, setSignupMsg] = useState("");

  // 3. Saved users list
  const [savedUsers, setSavedUsers] = useState([]);

  // 4. Form data
  const [form, setForm] = useState({
    name: "",
    password: "",
    confirmPassword: ""
  });

  // 5. Load users whenever mode/message changes
  useEffect(() => {
    const usersFromStorage = getUsers();
    setSavedUsers(usersFromStorage);
  }, [isLogin, loginMsg, signupMsg]);

  // 6. Input change handler
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setForm({
      ...form,
      [fieldName]: fieldValue
    });
  };

  // 7. Submit handler
  const handleSubmit = () => {

    // ===== LOGIN FLOW =====
    if (isLogin === true) {

      const user = loginUser(form.name, form.password);

      // if user not found
      if (user === null || user === undefined) {
        setLoginMsg("Invalid credentials");
        setSignupMsg("");
        return;
      }

      // login success
      setLoginMsg("Logged in successfully");
      setSignupMsg("");

      setUser(user.name);

    }

    // ===== SIGNUP FLOW =====
    else {

      // check empty fields
      if (
        form.name === "" ||
        form.password === "" ||
        form.confirmPassword === ""
      ) {
        setSignupMsg("Fill all fields");
        setLoginMsg("");
        return;
      }

      // check password match
      if (form.password !== form.confirmPassword) {
        setSignupMsg("Passwords do not match");
        setLoginMsg("");
        return;
      }

      // create user
      const result = signupUser({
        name: form.name,
        password: form.password
      });

      // if error comes
      if (result.error) {
        setSignupMsg(result.error);
        setLoginMsg("");
        return;
      }

      // success signup
      setSignupMsg("Account created successfully");
      setLoginMsg("");

      setUser(form.name);

      // refresh saved users list
      const updatedUsers = getUsers();
      setSavedUsers(updatedUsers);
    }

    // clear form after submit
    setForm({
      name: "",
      password: "",
      confirmPassword: ""
    });
  };

  // 8. Clear all users
  const handleClearUsers = () => {
    clearUsers();
    setSavedUsers([]);
  };

  return (
    <div className="auth-container">

      {/* TITLE */ }
      <h2>
        { isLogin === true ? "Login" : "Sign Up" }
      </h2>

      {/* MESSAGE */ }
      { isLogin === true ? (
        loginMsg !== "" && <p>{ loginMsg }</p>
      ) : (
        signupMsg !== "" && <p>{ signupMsg }</p>
      ) }

      {/* TOGGLE BUTTONS */ }
      <div>

        <button onClick={ () => setIsLogin(true) }>
          Login
        </button>

        <button onClick={ () => setIsLogin(false) }>
          Sign Up
        </button>

      </div>

      {/* NAME INPUT */ }
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={ form.name }
        onChange={ handleChange }
      />

      {/* PASSWORD INPUT */ }
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={ form.password }
        onChange={ handleChange }
      />

      {/* CONFIRM PASSWORD (only signup) */ }
      { isLogin === false && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={ form.confirmPassword }
          onChange={ handleChange }
        />
      ) }

      {/* SUBMIT BUTTON */ }
      <button onClick={ handleSubmit }>
        { isLogin === true ? "Login" : "Create Account" }
      </button>

      {/* SAVED USERS */ }
      <div>

        <h3>Saved Users</h3>

        <button onClick={ handleClearUsers }>
          Clear All Users
        </button>

        {/* list */ }
        { savedUsers.length === 0 ? (
          <p>No users yet</p>
        ) : (
          savedUsers.map((user, index) => {
            return (
              <div key={ index }>
                <p>{ user.name }</p>
              </div>
            );
          })
        ) }

      </div>

    </div>
  );
};

export default Auth;