import { useState , useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "My blog1",
            body: "First blog in the website",
            author: "Nithin",
            id: 1
        },
        {
            title: "My blog2",
            body: "Second blog in the website",
            author: "Nithin Kumar",
            id: 2
        },
        {
            title: "My blog3",
            body: "Third blog in the website",
            author: "Eruventi Nithin Kumar",
            id: 3
        }
    ]);
    const handleDelete=(id)=> {
       const newBlogs = blogs.filter(blog=> blog.id !== id);
       setBlogs(newBlogs);
        
    };
    useEffect(()=>{
        console.log('use effect ran');
    })
    return (
        <div className="home">
            <h2>Homepage</h2>
            <BlogList blogs={blogs}  handleDelete={handleDelete} />
        </div>
    );
}

export default Home;
