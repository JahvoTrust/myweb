import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function App() {

  const [getResult, setGetResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      setIsLoading(true);
      const res = await axios.get('https://valorant-api.com/v1/weapons');
      setGetResult(res.data.data);

    } catch (err) {
      setGetResult(err.response?.data || err);
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData();
  }, [])


  useEffect(() => {
    if (getResult !== null)
      console.log(getResult)
  }, [getResult])


  return (
    <Container>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row xs={1} md={3} className="g-4">
        {getResult && getResult.map((r) =>
          <Col key={r.uuid}>
            <Card >
              <Card.Img variant="top" src={r.displayIcon} />
              <Card.Body>
                <Card.Title>{r.displayName}</Card.Title>
                <Card.Text>
                  {r.category}

                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        )
        }
      </Row>
    </Container>
  );
}

export default App;
