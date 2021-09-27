import * as React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'wouter'

export default () => (
  <Navbar
    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    bg="#fff"
    variant="light"
    expand="lg"
    collapseOnSelect
  >
    <Link href="/">
      {' '}
      {/* Tom this is for SEO */}
      <Navbar.Brand>
        <Image
          alt="Reliable Waikato Waste Disposal Services since 1964"
          src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fredlidlogoscalable.png?v=1631682207638"
          height="38"
          className="d-inline-block align-top"
        />{' '}
        <span>Reliable Waikato Waste Disposal Services since 1964</span>
      </Navbar.Brand>
    </Link>
    <Link href="/manage">
      <Button variant="outline-secondary" id="ManageServicesBtn">
        Manage Services
      </Button>
    </Link>
  </Navbar>
)