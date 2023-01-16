import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";
import { createBrowserHistory } from "history";

export default function ShowPage() {
  // 임의의 환경(브라우저까지 포함)에서 구동되는 JavaSciprt 애플리케이션에서 세션 히스토리(방문 기록)의 관리와 내비게이션 등을 쉽게 할 수 있도록 도와주는 라이브러리이다.
  // history 객체는 history 패키지가 제공하는 createBrowserHistory() 함수를 호출하면 생성할 수 있다.
  const history = createBrowserHistory();

  // 구조분해 할당 {}
  const { id } = useParams();
  const [title, setTitie] = useState(null);
  const [desc, setDesc] = useState(null);
  const [createdAt, setCreatedAt] = useState();
  const [loading, setLoading] = useState(true);

  const getPost = (id) => {
    // id=1인 post data를 가져옴
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setTitie(res.data.title);
        setDesc(res.data.body);
        setCreatedAt(res.data.createdAt);
        setLoading(false);
      })
      .catch((err) => alert(err));
  };

  const printCreatedAt = (createdAt) => {
    // 지정된 지역에서 표현하는 방식의 날짜를 문자열로 리턴
    return new Date(createdAt).toLocaleString();
  };

  const backMovePage = () => {
    history.back();
  };

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <h1 className="fs-2 fw-semibold mb-2"> {title} </h1>
          <div className="d-flex justify-content-between">
            <span className="text-muted fs-6">{printCreatedAt(createdAt)}</span>
            <button className="btn btn-outline-info" onClick={backMovePage}>
              뒤로가기
            </button>
          </div>
          <hr />
          <pre className="show_blog_desc_text">{desc}</pre>
        </div>
      )}
    </>
  );
}
