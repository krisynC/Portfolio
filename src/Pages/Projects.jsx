import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projectsPage">

            <div className="projectsGrid">

                <Link to="/manager" className="projectCard">
                    <h2>Employee Manager</h2>
                    <p>CRUD + Search + API Integration</p>
                </Link>

                <Link to="/tictactoe" className="projectCard">
                    <h2>Tic Tac Toe</h2>
                    <p>Game Logic + State Handling</p>
                </Link>

                <Link to="/login" className="projectCard">
                    <h2>Login Auth</h2>
                    <p>Authentication + Local Storage</p>
                </Link>

                <Link to="/fruit-cart" className="projectCard">
                    <h2>Fruit Cart</h2>
                    <p>Cart System + Quantity Logic</p>
                </Link>

                <Link to="/shopping-cart" className="projectCard">
                    <h2>Shopping Cart</h2>
                    <p>Add / Remove + Total Calculation</p>
                </Link>

            </div>

        </div>
    );
};

export default Projects;