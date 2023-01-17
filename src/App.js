import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import CardList from './component/CardList';
import Layout from './Layout';
import Profile from './component/Profile';
import Carddetail from './component/Carddetail';

const MainContent = () => {
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
      {/* <ProfileContent /> */}
      <Row xs={1} md={3} className="g-4">
          {getResult && getResult.map((r) =>
            <CardList list={r} />
            // <Col key={r.uuid}>
            //   <Card >
            //     <Card.Img variant="top" src={r.displayIcon} />
            //     <Card.Body>
            //       <Card.Title>{r.displayName}</Card.Title>
            //       <Card.Text>
            //         {r.category}

            //       </Card.Text>
            //     </Card.Body>
            //     <Card.Footer>
            //       <small className="text-muted">Last updated 3 mins ago</small>
            //     </Card.Footer>
            //   </Card>
            // </Col>
          )
          }
        </Row>

    </Container>
  );
};


function App() {

  

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/carddetail/:id" element={<Carddetail />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
