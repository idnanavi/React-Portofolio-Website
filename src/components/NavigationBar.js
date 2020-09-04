import React,{Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class NavigationBar extends Component{
    render(){
        return(
            <Navbar expand="lg" bg="transparent">
                <Navbar.Brand href="/" className="ml-3">Ivan Andi's Portofolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link  href="/cv" className="mr-3">Curriculum Vitae</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;