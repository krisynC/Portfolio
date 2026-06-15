import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projectsPage">

            <div className="headerBox">
                <h1 className="pageTitle">My Projects</h1>

                <p className="pageSubtitle">
                    React Projects Built For Practice & Interviews
                </p>
            </div>

            <div className="projectsGrid">

                <Link to="/manager" className="projectCard">
                    <img
                        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
                        alt="Employee Manager"
                    />
                    <div className="cardOverlay">
                        <span className="tag">React</span>
                        <h2>Employee Manager</h2>
                        <p>CRUD Operations, Search & Employee Management</p>
                        <button>View Project →</button>
                    </div>
                </Link>

                <Link to="/tictactoe" className="projectCard">
                    <img
                        src="https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80"
                        alt="Tic Tac Toe"
                    />
                    <div className="cardOverlay">
                        <span className="tag">React</span>
                        <h2>Tic Tac Toe</h2>
                        <p>Winner Logic, useState & Reset Features</p>
                        <button>View Project →</button>
                    </div>
                </Link>

                <Link to="/fruit-cart" className="projectCard">
                    <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                        alt="Fruit Cart"
                    />
                    <div className="cardOverlay">
                        <span className="tag">React</span>
                        <h2>Fruit Cart</h2>
                        <p>Add, Remove & Quantity Management</p>
                        <button>View Project →</button>
                    </div>
                </Link>

                <Link to="/login" className="projectCard">
                    <img
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
                        alt="Login UI"
                    />
                    <div className="cardOverlay">
                        <span className="tag">React</span>
                        <h2>Login / Signup UI</h2>
                        <p>Conditional Rendering & Form Validation</p>
                        <button>View Project →</button>
                    </div>
                </Link>

                <Link to="/shopping-cart" className="projectCard">
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
                        alt="Shopping Cart"
                    />
                    <div className="cardOverlay">
                        <span className="tag">React</span>
                        <h2>Shopping Cart</h2>
                        <p>Add, Remove Items & Total Calculation</p>
                        <button>View Project →</button>
                    </div>
                </Link>

            </div>

        </div>
    );
};

export default Projects;