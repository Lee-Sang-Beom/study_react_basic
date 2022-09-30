import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

export default function ListPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios.get("http://localhost:3001/posts").then((res) => setPosts(res.data));
  };

  const deleteBlog = (e, id) => {
    e.stopPropagation();
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>blogs</h1>
        <div>
          <Link to="/blogs/create" className="btn btn-primary">
            New
          </Link>
        </div>
      </div>
      {posts.length ? (
        posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            onClick={() => navigate("/blogs/edit")}
          >
            <button
              className="btn btn-danger btn-sm"
              onClick={(e) => deleteBlog(e, post.id)}
            >
              Delete
            </button>
          </Card>
        ))
      ) : (
        <p>빈 포스트입니다</p>
      )}
    </>
  );
}
