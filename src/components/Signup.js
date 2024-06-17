import React, { useState } from "react";
import api from "../api/axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo1.jpeg";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/api/auth/signup", {
                username,
                password,
            });
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="login">
                <h1> Samju Blog</h1>
                <img src={Logo} alt="logo" />
                <h2>SIGNUP</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <input
                            type="text"
                            name="username"
                            required
                            placeholder=" Enter User Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>

                <Link to="/login">
                    <button className="forget-btn">LOGIN</button>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
