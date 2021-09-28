import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'
import React, { useState } from 'react'
import { animated } from 'react-spring'
import { Link } from 'wouter'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import ModalFaqs from '../components/ModalFaqs'
import ModalTerms from '../components/ModalTerms'
import BinsNav from '../components/BinsNav'
import Footer from '../components/Footer'



export default function Bins() {
  const [showTerms, setShowTerms] = useState(false)
  const [showFaqs, setShowFaqs] = useState(false)

  return (
    <>
      {/* CONTENT CONTAINER */}
      <Container fluid="lg">
        <Row>
          <BinsNav />
        </Row>
        {/* HEADER */}
        <Row className="Header">
          <h1>Red Lid Garden Bags and Bins</h1>
          <p>Regular or one-off collections for green and garden waste</p>
        </Row>
        {/* LISTING BINS */}
        <Row>
          <a className="Product">
            {' '}
            {/* TODO: Check syntax a tag */}
            <Row>
              <h2>240L Garden Bin</h2>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Bin.jpg?v=1632524809405" fluid />
              </Col>
              <Col sm={12} md={8}>
                <i>From $8 per collection</i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  fermentum, nulla luctus pharetra vulputate, felis tellus
                  mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
                <Button variant="primary">Order garden waste bins</Button>{' '}
              </Col>
            </Row>
          </a>
        </Row>
        {/* LISTING BAGS */}
        <Row>
          <a className="Product">
            <Row>
              <h2>600L Garden Bag</h2>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Bag.jpg?v=1632524809122" fluid />
              </Col>
              <Col sm={12} md={8}>
                <i>From $8 per collection</i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  fermentum, nulla luctus pharetra vulputate, felis tellus
                  mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
                <Button variant="primary">Order garden waste bags</Button>{' '}
              </Col>
            </Row>
          </a>
        </Row>
        {/* ORDER FORM */}
        <Row>
          <Col>
            <h1>Order Garden Bin</h1>
            <Button variant="outline-primary" className="ProductSwap">
              Order a bin/bag instead
            </Button>{' '}
          </Col>
        </Row>
        <Row>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Find your address or postcode"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter your address" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your full name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Your name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Phone number"
              className="mb-3"
            >
              <Form.Control type="phone" placeholder="Phone number" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </FloatingLabel>
            <FloatingLabel label="Choose pickup cycle">
              <Form.Select aria-label="Floating label select example">
                <option>Weekly - $18 per collection</option>
                <option>2-weekly - $20 per collection</option>
                <option>4-weekly - $24 per collection</option>
                <option>
                  One-off (collection within 4 weeks of dropoff) - $40
                </option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Payment method">
              <Form.Select aria-label="Floating label select example">
                <option>Internet banking</option>
                <option value="cc">Credit card (+3% surcharge)</option>
              </Form.Select>
              <small class="form-text text-muted" id="cc">
                We will contact you by phone for your credit card details.
              </small>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Any comments or special instructions?"
                style={{ height: '100px' }}
              />
            </FloatingLabel>

            <div className="TermsContainer">
              <Form.Check
                type="checkbox"
                label="I have read and agree to the "
                className="TermsCheckbox"
              />

              <Button
                onClick={() => setShowTerms(true)}
                className="TermsModalBtn"
                variant="link"
              >
                Terms & Conditions
              </Button>
            </div>
            <p class="msg-error error"></p>
            <button
              type="submit"
              class="btn btn-primary"
              disabled="disabled"
              id="submitBtn"
            >
              Submit order
            </button>
          </Form>
        </Row>
      
      </Container>{' '}
      {/* END OF CONTENT CONTAINER */}
     
    <Footer />
      
      <ModalTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}
