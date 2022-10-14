import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>
                    <Nav.Link>
                        <LinkContainer to={`/`}>
                            <img
                                alt=""
                                src="shadowfootTwitch.png"
                                width="32"
                                height="32"
                                className="d-inline-block align-top"
                            />
                        </LinkContainer>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to={`/`}>
                            <Nav.Link>Clicker</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={`/champions`}>
                            <Nav.Link>Champions</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={`/items`}>
                            <Nav.Link>Items</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={`/skins`}>
                            <Nav.Link>Skins</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={`/achievements`}>
                            <Nav.Link>Achievements</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={`/options`}>
                            <Nav.Link>Options</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;