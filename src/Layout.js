import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Footer from './component/Footer';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import GoogleLogin from './component/GoogleLogin'
import jwt_decode from "jwt-decode";

export default function Layout(props) {
  
    const onGoogleSignIn = async res => {
        const { credential } = res;
        console.log("Encoded JWT ID token: " + credential);
        let userObject = jwt_decode(credential)
        console.log("Decoded JWT ID token: " + JSON.stringify(userObject));
        props.setUser(userObject);
    };

    return (
        <div className={props.className} >
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Myweb
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/profile">Profile</Nav.Link>
                           
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
                                <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                                <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#all-services">All Services</NavDropdown.Item>
                            </NavDropdown>
                            <GoogleLogin onGoogleSignIn={onGoogleSignIn} text="로그인" />
                            {
                                props.user && <Nav.Link href="/">{props.user.email}</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {props.children}
            <hr />
            <Footer />
        </div>
    )
}