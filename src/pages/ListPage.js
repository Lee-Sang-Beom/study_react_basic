import axios from "axios"
import { useEffect, useState } from "react";

export default function ListPage(){

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts();
    }, [])

    const getPosts = () => {
        axios.get('http://localhost:3001/posts')
        .then((res) => setPosts(res.data))
    }

    
    return (
        <>
        {posts && posts.map((post) => (
           <div>
                {post.title}
                {post.body}
           </div> 
        ))}
        </>
    )
}