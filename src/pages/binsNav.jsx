import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

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
        alt="Reliable Waikato Waste Disposal Services since 1964"
        src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fredlidlogoscalable.png?v=1631682207638"
        height="48"
        className="d-inline-block align-top"
      />{" "}
    </Navbar.Brand>

    <Button variant="outline-secondary" id="ManageServicesBtn">
      Manage My Services
    </Button>
    <Navbar.Toggle />

    <Navbar.Collapse>
      <Nav className="me-auto CollapsableNav">
        <Nav.Link href="#OrderBins">Order Bins</Nav.Link>
        <Nav.Link href="#OrderSkips">Order Skips</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
