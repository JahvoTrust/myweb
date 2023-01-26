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
import SignUpPage from './component/SignUpPage'

const MainContent = () => {
//   const handleCallbackResponse = async (response) => {
//     // const result = await postGoogleLogin(res.credential);
//      //콜백 함수
//      console.log("Encoded JWT ID token: " + response.credential );
//    };
//  useEffect(() =>{
//      window.google.accounts.id.initialize({
//      client_id: "751801305438-9ibf1lsdolcc7p39h65aillbekic1ljr.apps.googleusercontent.com",
//      calllback: handleCallbackResponse
//    });
   
//    window.google.accounts.id.renderButton(
//      document.getElementById("signInDiv"),
//      { theme: "oultline", size: "large" }
//    );
//  },[])
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
      <div id='signInDiv'></div>
      {/* <ProfileContent /> */}
      <h2 className="text-center">valorant weapons</h2>
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
  const [user,setUser] = useState({
    email: "",
    name: "",
    picture: ""
  });

  return (
    <Layout user={user} setUser={setUser}>

      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainContent />}/>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/carddetail/:id" element={<Carddetail />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
