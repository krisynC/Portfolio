import { useState } from "react";
import "./App.css";

import GameBox from "./components/GameBox";
import Board from "./components/Board";
import InfoPanel from "./components/InfoPanel";
import Login from "./components/Login"

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (name) => {
    setUser(name);
    localStorage.setItem("user", name);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="app">

      <header className="header">
        <h1 className="title">Tic Tac Toe</h1>
      </header>

      { user && (
        <button className="logoutBtn" onClick={ logout }>
          Logout
        </button>
      ) }

      <main className="appContainer">

        { !user ? (
          <Login setUser={ handleLogin } />
        ) : (
          <GameBox user={ user } />
        ) }

      </main>

    </div>
  );
};

export default App;