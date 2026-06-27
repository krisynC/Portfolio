import { useState } from "react";
import Auth from "./components/Auth";
import "./Login.css";

function App() {
  const [user, setUser] = useState(null);

  // Login Screen
  if (!user) {
    return (
      <div className="screen">
        <Auth setUser={ setUser } />
      </div>
    );
  }

  // Dashboard
  return (
    <div className="screen">
      <div className="dashboard">
        <h2>Welcome 👋</h2>

        <p className="username">
          { user }
        </p>

        <button
          className="logout-btn"
          onClick={ () => setUser(null) }
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;