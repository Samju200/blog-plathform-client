import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import ProtectedRoute from "./components/ProtectedRoute";

export const AuthContext = createContext();

function App() {
    const [auth, setAuth] = useState(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route
                        path="/create"
                        element={<ProtectedRoute component={CreatePost} />}
                    />
                    <Route
                        path="/edit/:id"
                        element={<ProtectedRoute component={EditPost} />}
                    />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
