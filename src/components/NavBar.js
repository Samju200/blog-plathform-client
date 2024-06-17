import React, { useContext } from "react";
import Logo from "../img/logo1.jpeg";
import { AuthContext } from "../App";
import { Link } from "react-router-dom";
function NavBar() {
    const { auth, setAuth } = useContext(AuthContext);
    const handleLogout = () => {
        setAuth(null);
    };
    return (
        <div className=" home-header">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                    <h1>Samju Blog</h1>
                </Link>
            </div>
            <div className="home-header-right">
                {" "}
                {auth ? (
                    <div>
                        <Link to="/create"> Create Post</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <Link to="/login"> Login</Link>
                )}
            </div>
        </div>
    );
}

export default NavBar;
