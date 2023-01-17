import React from 'react'
import { useParams } from "react-router-dom";

function Carddetail() {
    let { id } = useParams();

    return (
        <div>Carddetail {id}</div>
    )
}

export default Carddetail