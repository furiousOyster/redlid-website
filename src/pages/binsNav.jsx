import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default () => (
  <Navbar
    activeKey="/home"
    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    bg="#fff"
    variant="light"
    expand="lg"
    collapseOnSelect
  >
    <Navbar.Brand href="https://redlid.co.nz">
      <img
          alt=""
          src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fredlidlogo.png?v=1631680153805"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Reliable Waikato Waste Disposal Services since 1964
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);
