import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default () => (
    
<Navbar
  activeKey="/home"
  onSelect={selectedKey => alert(`selected ${selectedKey}`)}
  bg="light"
  variant="light"
  expand="large"
>

    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>

</Navbar>
  
  
);
