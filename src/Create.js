import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
    
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to add blog');
            }
            return res.json();
        })
        .then(data => {
            console.log('Blog added successfully', data);
            setIsPending(false);
            // Redirect to home page after successful submission
            history('/');
        })
        .catch(err => {
            setIsPending(false);
            console.error('Error adding blog:', err);
        });
    };
    
    return ( 
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label><br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                /><br />
                <label htmlFor="body">Body:</label><br />
                <textarea
                    id="body"
                    name="body"
                    rows="5"
                    cols="40"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea><br />
                <label>Author:</label><br />
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                >
                    <option value="">Select</option>
                    <option value="Eruventi Nithin Kumar">Eruventi Nithin Kumar</option>
                    <option value="Nithin">Nithin</option>
                    <option value="Mario">Mario</option>
                </select><br/><br/>
                {  !isPending && <button type="submit">Create Blog!</button>}
                {  isPending && <button type="submit" disabled>Adding Blog...</button>}
            </form>
        </div>
    );
};

export default Create;
