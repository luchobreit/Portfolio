import "./topbar.scss"
import Navbar from "react-bootstrap/Navbar"
import  Nav  from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import {AiOutlineContacts} from "react-icons/ai"
import {BsTelephonePlus, BsBriefcase, BsPersonCheck} from "react-icons/bs"


function Topbar() {
    return (
        <Navbar collapseOnSelect expand="xl" className="topbar" variant="dark">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand   href="#home"><span className="brand"><AiOutlineContacts/> Lucio Breitabart</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav me-auto">
                        <Nav.Link href="#contact" className="titulo"><BsTelephonePlus/> +54 9 11 50550571</Nav.Link>
                        <Nav.Link href="#portfolio" className="titulo"><BsBriefcase/> Portfolio</Nav.Link>
                        <Nav.Link href="#works" className="titulo"><BsPersonCheck/> Personal</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
      
        
      
    )
}

export default Topbar
