import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import img1 from '../../../images/marigold.jpg';
import img2 from '../../../images/Capture.PNG';

const Navigation = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-6">
                    <Navbar bg="primary" variant="dark" expand="lg">
                        <Container>
                            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto">
                                    <Nav.Link href="#home">HOME</Nav.Link>
                                    <Nav.Link href="#aboutus">ABOUT US</Nav.Link>
                                    <Nav.Link href="#articles">ARTICLES</Nav.Link>
                                    <NavDropdown title="PHOTOS" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">PHOTOS 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">PHOTOS 1</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">PHOTOS 1</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#contactus">CONTACT US</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className="p-3 nav-first">
                        <h2>YOUR SITE NAME</h2>
                        <h6 className="nav-text">YOUR SLOGAN COMES HERE</h6>
                    </div>
                </div>
                <div className="col-md-6 nav-second">
                    <div>
                        <img className="nav-img" src={img1} alt="" />
                        <img className="nav-img" src={img2} alt="" />
                        <img className="nav-img" src={img1} alt="" />
                    </div>
                </div>
            </div>

            <div className="bg-primary p-2">

            </div>
        </section>

    );
};

export default Navigation;