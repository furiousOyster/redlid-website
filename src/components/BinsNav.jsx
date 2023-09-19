import { useState, useCallback } from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import ModalFaqs from '../components/ModalFaqs'
import Row from 'react-bootstrap/Row'
import useLocation from './router'

export default () => {
  const [showFaqs, setShowFaqs] = useState(false)
  const onSelect = useCallback((selectedKey) => {
    if (selectedKey === 'faq') {
      setShowFaqs(true)
      return
    }
    const element = document.getElementById(selectedKey)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const [location] = useLocation()

  return (
    <Container fluid id="NavContainer">
      <Row>
        <Navbar
          bg="#fff"
          variant="light"
          expand="lg"
          collapseOnSelect
          id="BinsNav"
        >
          <Container>
            <Navbar.Brand href="#">
              <Image
                alt="Red Lid Garden Bins and Bags in Waikato, New Zealand."
                src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidLogo40pxH.png?v=1634935640796"
                height="40"
                className="d-inline-block align-top"
              />
              <h1>Garden bins & bags</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="me-auto " onSelect={onSelect}>
                {location === '/' && (
                  <Nav.Link eventKey="HowItWorks">How it works</Nav.Link>
                )}
                <Nav.Link eventKey="faq" className="FAQBtn">
                  FAQs
                </Nav.Link>

                <Nav.Link eventKey="Footer">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </Container>
  )
}
