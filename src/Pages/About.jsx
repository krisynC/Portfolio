import "./About.css";

const About = () => {
    return (
        <div className="aboutPage">

            <div className="aboutCardFull">

                <h1>👨‍💻 My Developer Journey</h1>

                <p>
                    I started my journey from basic HTML, CSS and JavaScript.
                    Slowly I moved into real frontend development using React.
                    Every step was built through practice, mistakes, and rebuilding projects.
                </p>

                <h2>⚡ Core Tech Stack</h2>
                <ul>
                    <li>JavaScript (ES6+): arrays, objects, DOM, async/await</li>
                    <li>React: components, props, state, hooks (useState, useEffect)</li>
                    <li>React Router: multi-page SPA navigation</li>
                    <li>CSS: flexbox, grid, responsive UI design</li>
                    <li>Local Storage: authentication & persistence</li>
                </ul>

                <h2>🚀 Projects Built</h2>
                <ul>
                    <li>Employee Manager (CRUD + API + search system)</li>
                    <li>Tic Tac Toe (game logic + state handling)</li>
                    <li>Login Auth (signup/login + local storage)</li>
                    <li>Fruit Cart (quantity + cart logic)</li>
                    <li>Shopping Cart (add/remove + total calculation)</li>
                </ul>

                <h2>🧠 Concepts Mastered</h2>
                <ul>
                    <li>State management using useState</li>
                    <li>Component re-render understanding</li>
                    <li>Conditional rendering</li>
                    <li>Array manipulation (map, filter, reduce)</li>
                    <li>Routing and page-level architecture</li>
                    <li>Immutability in React state</li>
                </ul>

                <h2>🎯 Current Focus</h2>
                <p>
                    Preparing for frontend developer roles by improving JavaScript depth,
                    React interview concepts, and building real-world UI projects.
                </p>

            </div>

        </div>
    );
};

export default About;