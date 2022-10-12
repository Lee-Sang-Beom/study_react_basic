import { useParams } from "react-router"

export default function ShowPage(){
    const { id } = useParams();
    console.log(id);
    return (
        <>
            show
        </>
    )
}