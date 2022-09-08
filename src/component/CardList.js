import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function CardList({list}) {
    
    return (
        <Col key={list.uuid}>
            <Card >
                <Card.Img variant="top" src={list.displayIcon} />
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
