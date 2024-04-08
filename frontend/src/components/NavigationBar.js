import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () =>{
    return(
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Yodlr</Navbar.Brand>
      </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {/* aligns nav links right ms-auto */}
          <Nav className="ms-auto">
            <NavLink style={{textDecoration: "none", color: "white", textAlign: "right", marginRight: "1em"}} to="/signup">Registration</NavLink>
            <NavLink style={{textDecoration: "none", color: "white", textAlign: "right", marginRight: "1em"}} to="/admin">Admin</NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}
export default NavigationBar;

