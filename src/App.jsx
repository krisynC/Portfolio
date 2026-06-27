import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Manager from "./components/Manager/Manager";
import TicTacToe from "./pages/TicTacToe/src/TicTacToe";
import LoginAuth from "./components/LoginAuth/Login";
import FruitCart from "./components/FruitCart/FruitCart";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => { 
  const [employees, setEmployees] = useState([]);

  return (
    <BrowserRouter>

      <div className="layout_navbarWrap">
        <Navbar />
      </div>

      <div className="layout_pageWrap">

        <Routes>

          <Route path="/about" element={ <About /> } />

          <Route path="/contact" element={ <Contact /> } />

          <Route
            path="/"
            element={ <Home /> }
          />

          <Route
            path="/projects"
            element={ <Projects /> }
          />

          <Route
            path="/manager"
            element={
              <div className="route_managerPage">
                <Manager
                  employees={ employees }
                  setEmployees={ setEmployees }
                />
              </div>
            }
          />

          <Route
            path="/tictactoe"
            element={ <div className="route_tttPage"><TicTacToe /></div> }
          />

          <Route
            path="/login"
            element={ <div className="route_loginPage"><LoginAuth /></div> }
          />

          <Route
            path="/fruit-cart"
            element={ <div className="route_fruitPage"><FruitCart /></div> }
          />

          <Route
            path="/shopping-cart"
            element={ <div className="route_shopPage"><ShoppingCart /></div> }
          />


        </Routes>

      </div>

    </BrowserRouter>
  );
};

export default App;