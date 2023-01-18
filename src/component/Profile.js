import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Image src="https://avatars.githubusercontent.com/u/112690304?v=4" roundedCircle width="200" height="200" />
        </Col>
        <Col xs={12} md={8}>
          <h1>Jahvo Trust</h1>
          <Badge variant="secondary">Developer</Badge>
          <Badge variant="secondary">Data Engineer</Badge>
          <Badge variant="secondary">MLOps Engineer</Badge>
          <p>I’m interested in everything that is related to Business. I’m currently learning data engineering and ai</p>
         
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
