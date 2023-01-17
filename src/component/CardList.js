import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import './CardList.css'

export default function CardList({ list }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/carddetail/${list.uuid}`);
    }

    return (
        <Col key={list.uuid}>
            <Card >
                <a className="card-img-link" onClick={handleCardClick} >
                    <Card.Img variant="top" src={list.displayIcon} />
                </a>
                <Card.Body>
                    <Card.Title>{list.displayName}</Card.Title>
                    <Card.Text>
                        {list.category}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>

    )
}
