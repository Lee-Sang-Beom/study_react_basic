import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

export default function ListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => setPosts(res.data));
  };

  return (
    <>
    <div className="d-flex justify-content-between align-items-center">
      <h1>blogs</h1>
      <div>
        <Link to = "/blogs/create" className="btn btn-primary">
          New
        </Link>
      </div>
    </div>      
      {posts &&
        posts.map((post) => (
          <Card key={post.id} title={post.title}>
            <button> VIEW </button>
          </Card>
        ))}
    </>
  );
}
