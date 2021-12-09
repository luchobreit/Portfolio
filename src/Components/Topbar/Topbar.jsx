import "./topbar.scss"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import  Offcanvas  from "react-bootstrap/Offcanvas"
import {AiOutlineContacts} from "react-icons/ai"
import {BsTelephonePlus} from "react-icons/bs"

function Topbar() {
    return (
        <Navbar collapseOnSelect className="topbar" expand={false}>
            <Container fluid>
                <a href="/#home" className="titulo"><AiOutlineContacts/> Lucio Breitabart</a>
                <a href="/#contact" className="titulo"><BsTelephonePlus/> +54 9 11 50550571</a>
                <Navbar.Toggle bg="light"aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                backdrop={false}
                >
                <Offcanvas.Header className="body"closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Navegación</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="body">
                    <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link className="text-light" href="/#home">Home</Nav.Link>
                    <Nav.Link className="text-light" href="/#portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="text-light" href="/#works">Trabajo</Nav.Link>
                    <Nav.Link className="text-light" href="/#contact">Contacto</Nav.Link>                    
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        
      
        
      
    )
}

export default Topbar
