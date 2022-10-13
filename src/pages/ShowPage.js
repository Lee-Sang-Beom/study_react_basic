import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import LoadingSpinner from "../Components/LoadingSpinner";

export default function ShowPage(){
    // 중괄호로 일부만 가져온다는 의미
    const { id } = useParams();
    const [title, setTitie] = useState(null);
    const [desc, setDesc] = useState(null);
    const [createdAt, setCreatedAt] = useState();
    const [loading, setLoading] = useState(true);

    const getPost = (id) => {
        // id=1인 post data를 가져옴
        axios.get(`http://localhost:3001/posts/${id}`).then((res)=>{
            setTitie(res.data.title);
            setDesc(res.data.body);
            console.log(res.data.createdAt);
            setCreatedAt(res.data.createdAt);
            setLoading(false);
        }).catch((err)=>alert(err));
    }

    const printCreatedAt = (createdAt) => {
        // 지정된 지역에서 표현하는 방식의 날짜를 문자열로 리턴
        return new Date(createdAt).toLocaleString();
    }

    useEffect(()=>{
        getPost(id);
    },[]);


    return (
        <>
            {loading ? <LoadingSpinner/> :
            <>
                <h1>{title}</h1>
                <small className="text-muted">
                    {printCreatedAt(createdAt)}
                </small>
                <hr />
                <p>{desc}</p>
            </>}
        </>
    )
}