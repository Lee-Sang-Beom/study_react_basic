import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function ListPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  // spinner 동작 후, 내용이 있음에도 빈 블로그로 표시되는 모습을 await으로 수정
  async function getPosts() {
    await axios
      .get("http://localhost:3001/posts")
      .then((res) => setPosts(res.data));
    setLoading(false);
  }

  const deleteBlog = (e, id) => {
    e.stopPropagation();
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });

    window.alert("삭제되었습니다.");
  };

  const renderList = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (!posts.length) {
      return <div>빈 포스트입니다.</div>;
    } else {
      return posts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          onClick={() => navigate(`/blogs/${post.id}`)}
        >
          <button
            className="btn btn-danger btn-sm"
            onClick={(e) => deleteBlog(e, post.id)}
          >
            Delete
          </button>
        </Card>
      ));
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-bg-dark position-relative p-2 rounded fw-semibold">
          BLOG
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <span>{posts && posts.length}</span>
          </span>
        </p>

        <div>
          <Link to="/blogs/create" className="btn btn-primary">
            New
          </Link>
        </div>
      </div>
      {renderList()}
    </>
  );
}
