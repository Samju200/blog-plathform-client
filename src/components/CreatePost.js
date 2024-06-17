import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./createpost.css";
import NavBar from "./NavBar";
import api from "../api/axiosConfig";
import Footer from "./Footer";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(
                "/api/posts",
                { title, content },
                { headers: { Authorization: `Bearer ${auth}` } }
            );
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="create-post">
                <h2>Create Post</h2>
                <form onSubmit={handleSubmit} className="create-post">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        required
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Content"
                        required
                    ></textarea>
                    <button type="submit">Create</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default CreatePost;
