import { useState } from "react";

const Login = ({ setUser }) => {
    const [name, setName] = useState("");

    const handleStart = () => {
        if (!name.trim()) return;

        localStorage.setItem("user", name); // 💾 save
        setUser(name);
    };

    return (
        <div>

            <input
                value={ name }
                onChange={ (e) => setName(e.target.value) }
                placeholder="Your name"
            />

            <button className="strt" onClick={ handleStart }>
                Start Game
            </button>
        </div>
    );
};

export default Login;