import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">


            <div className="navLinks">

                <NavLink to="/" className="navItem">
                    Home
                </NavLink>

                <NavLink to="/projects" className="navItem">
                    Projects
                </NavLink>

                <NavLink to="/about" className="navItem">
                    About
                </NavLink>

                <NavLink to="/contact" className="navItem">
                    Contact
                </NavLink>

            </div>

        </nav>
    );
};

export default Navbar;