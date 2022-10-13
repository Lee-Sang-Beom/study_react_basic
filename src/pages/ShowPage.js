import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import LoadingSpinner from "../Components/LoadingSpinner";

export default function ShowPage(){
    const { id } = useParams();
    const [title, setTitie] = useState(null);
    const [desc, setDesc] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPost = (id) => {
        axios.get(`http://localhost:3001/posts/${id}`).then((res)=>{
            setTitie(res.data.title);
            setDesc(res.data.body);
            setLoading(false);
        }).catch((err)=>alert(err));
    }

    useEffect(()=>{
        getPost(id);
    },[]);


    return (
        <>
            {loading ? <LoadingSpinner/> :
            <>
                <h1>{title}</h1>
                <p>{desc}</p>
            </>}
        </>
    )
}