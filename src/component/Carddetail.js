import React from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";

function Carddetail() {
    let { id } = useParams();

    return (
        <Container>Carddetail {id}</Container>
    )
}

export default Carddetail