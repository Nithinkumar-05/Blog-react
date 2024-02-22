import { useState } from "react";

const Create = () => {
    const [title,setTitle] = useState();
    const [body,setBody]=useState();
    const [author,setAuthor]=useState();
    return ( 
        <div className="create">

            <h1>Add a new blog</h1>
            <form >
                <label htmlFor='title'>Title: </label><br />
                <input type='text' id='title' name='title'
                value={title} onChange={(e) => setTitle(e.target.value)}
                required/><br />
                <label htmlFor='body'>Body: </label><br/>
                <textarea  id='body' name='body' rows='5' cols={40}
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
                required></textarea><br/>
                <label >Author: </label><br/>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option>Select</option>
                    <option>Eruventi Nithin Kumar</option>
                    <option>Nithin</option>
                    <option>Mario</option>
                </select><br/><br/>
                <button type='submit'>Create Blog!</button>
                
            </form>
        </div>
     );
}
 
export default Create;