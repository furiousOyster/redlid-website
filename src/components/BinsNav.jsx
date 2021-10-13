import * as React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'wouter'
import NavbarBrand from '../components/NavbarBrand'

export default () => (
  <Navbar
    // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    bg="#fff"
    variant="light"
    expand="lg"
    collapseOnSelect
  >
    <NavbarBrand />
    <Link href="/Manage">
      <Button variant="outline-secondary" id="ManageServicesBtn">
        Manage Services
      </Button>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="me-auto CollapsableNav">
        <Link href="/Skips">Red Lid Skips</Link>
        <Link href="/BinsBags#HowitWorks">How it works</Link>
        <Link href="#Contact">Contact</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
