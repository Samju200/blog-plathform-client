import React, { useState, useEffect, useContext } from "react";
import api from "../api/axiosConfig";
import ReactMarkdown from "react-markdown";
import { AuthContext } from "../App";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./post.css";

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await api.get(`/api/posts/${id}`);
                setPost(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        const fetchComments = async () => {
            try {
                const res = await api.get(`/api/comments/${id}`);
                setComments(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPost();
        fetchComments();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post(
                `/api/comments/${id}`,
                { content },
                { headers: { Authorization: `Bearer ${auth}` } }
            );
            setComments([...comments, res.data]);
            setContent("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="post-details">
                {post && (
                    <div>
                        <h1>{post.title}</h1>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                )}
                <div>
                    <h2>Comments</h2>
                    {comments.map((comment) => (
                        <div key={comment._id}>
                            <p>{comment.content}</p>
                            <small>by {comment.author.username}</small>
                        </div>
                    ))}
                    {auth && (
                        <form onSubmit={handleSubmit} className="comment">
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Add a comment..."
                                required
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Post;
