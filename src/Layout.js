import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Layout(props) {
    return (
        <div className={props.className} >
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
            {props.children}
            <hr />
            <p className='text-center'>Jahvo Trust</p>
        </div>
    )
}