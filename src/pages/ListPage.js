import axios from "axios";
import { useEffect, useState } from "react";
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
      <h1>blogs</h1>
      {posts &&
        posts.map((post) => (
          <Card title={post.title} body={post.body} key={post.id}/>
        ))}
    </>
  );
}
