import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo1.jpeg";
import "./login.css";
import api from "../api/axiosConfig";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/api/auth/login", {
                username,
                password,
            });
            setAuth(res.data.token);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="login">
                <h1> Samju Blog</h1>
                <img src={Logo} alt="logo" />
                <h2>Login</h2>

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
                <Link to="/forgetpassword">
                    <button className="forget-btn">FORGET PASSWORD</button>
                </Link>
                <Link to="/signup">
                    <button className="forget-btn">SIGN-UP</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
