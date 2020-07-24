import React from 'react';
import { Button ,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import './navbar.css'

class App extends React.Component{
render(){
  return(
    <Navbar  expand="lg" className="_Navbar">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home" className="_navbarPage">Home</Nav.Link>
        <Nav.Link href="#link" className="_navbarPage">Add Missing Person</Nav.Link>
        <NavDropdown title="Language" id="basic-nav-dropdown" className="_navbarPage">
          <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
  )
}
}
export default App;
