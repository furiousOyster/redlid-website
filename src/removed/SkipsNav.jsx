import * as React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'wouter'

export default () => (
  <Navbar
    // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    bg="#fff"
    variant="light"
    expand="lg"
    id="SkipsNav"
    collapseOnSelect
  >
    <Navbar.Brand href="/">
      <Image
        alt="Red Lid general, green waste and hardfill skips in Waikato, New Zealand."
        src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidLogo40pxH.png?v=1634935640796"
        height="40"
        className="d-inline-block align-top"
      />
      <h1>Skips</h1>
    </Navbar.Brand>

    <Link href="/Manage">
      <Button variant="outline-secondary" id="ManageServicesBtn">
        Manage Services
      </Button>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="me-auto CollapsableNav">
        <Link href="/BinsBags">Red Lid Bins & Bags</Link>
        <Link href="/Skips#HowitWorks">How it works</Link>
        <Link href="#Contact">Contact</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
