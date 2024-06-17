import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";

import "./home.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Home() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await api.get("/api/posts");
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        const res = await api.get(`/api/posts/search/${search}`);
        setPosts(res.data);
    };

    return (
        <div className="home">
            <NavBar />

            <form onSubmit={handleSearch} className="search">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search posts..."
                />
                <button type="submit" className="search-btn">
                    Search
                </button>
            </form>
            <h1>Blog Posts</h1>
            <div className="posts">
                {posts.map((post) => (
                    <div key={post._id}>
                        <Link to={`/posts/${post._id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.content.substring(0, 100)}...</p>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
