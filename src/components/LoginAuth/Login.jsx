import React, { useState } from "react";
import Auth from "./components/Auth";
import "./Login.css";

function App() {
  const [user, setUser] = useState(null);

  // if user is not logged in → show Auth
  if (!user) {
    return (
      <div className="screen">
        <div className="card">
          <Auth setUser={ setUser } />
        </div>
      </div>
    );
  }

  // if user is logged in → show dashboard
  return (
    <div className="screen">
      <div className="card dashboard">
        <h2>Welcome 👋</h2>
        <p className="username">{ user }</p>

        <button onClick={ () => setUser(null) }>
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;