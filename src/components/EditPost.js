import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axiosConfig";
import Footer from "./Footer";

function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const res = await api.get(`/api/posts/${id}`);
            setTitle(res.data.title);
            setContent(res.data.content);
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(
                `/api/posts/${id}`,
                { title, content },
                { headers: { Authorization: `Bearer ${auth}` } }
            );
            navigate(`/posts/${id}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Post</h2>
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
                <button type="submit">Save</button>
            </form>
            <Footer />
        </div>
    );
}

export default EditPost;
