import { useState } from "react";
import "./Home.css";

const Home = () => {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState(false);

    const handleClick = () => {
        if (name.trim() !== "") {
            setShowName(true);
        }
    };

    return (
        <div className="home">

            <div className="heroSection">

                <div className="techStack">
                    <span>⚛ React</span>
                    <span>🟨 JavaScript</span>
                    <span>🎨 CSS</span>
                    <span>🌐 HTML</span>
                </div>

                <div className="stats">

                    <div className="statCard">
                        <h2>5+</h2>
                        <p>Projects</p>
                    </div>

                    <div className="statCard">
                        <h2>React</h2>
                        <p>Frontend</p>
                    </div>

                    <div className="statCard">
                        <h2>JS</h2>
                        <p>Logic Building</p>
                    </div>

                </div>

                <div className="homeContent">

                    <h1>
                        Hi { showName ? name : "I'm Sandeep" } 👋
                    </h1>

                    <p>
                        React Developer • UI Builder • Logic Explorer
                    </p>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                        className="homeInput"
                    />

                    <div className="homeActions">

                        <button className="homeBtn" onClick={ handleClick }>
                            Say Hi
                        </button>

                        <button
                            className="homeBtn secondary"
                            onClick={ () => {
                                setName("");
                                setShowName(false);
                            } }
                        >
                            Reset
                        </button>

                    </div>

                </div>

            </div>

            <div className="circles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    );
};

export default Home;