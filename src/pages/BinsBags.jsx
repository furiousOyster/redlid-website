import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'
import React, { useState } from 'react'
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
import ListGroup from 'react-bootstrap/ListGroup'

import ModalFaqs from '../components/ModalFaqs'
import ModalTerms from '../components/ModalTerms'
import BinsNav from '../components/BinsNav'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/BinsFooter'



export default function BinsBags() {
  const [showTerms, setShowTerms] = useState(false)
  const [showFaqs, setShowFaqs] = useState(false)

  return (
    <>
      {/* CONTENT CONTAINER */}
      <Container fluid id="NavContainer">
        <Row>
          <BinsNav />
        </Row>

        {/* HEADER */}

        <Row className="Header">
          <h1 style={{color: "red", fontSize: "5rem"}}>Welcome to Redlid</h1>
          <h1>Choose a bag or bin</h1>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={{ span: 8, offset: 4 }}>
            <p className="Description">
              Regular garden waste collections.
            </p>
          </Col>
        </Row>

        {/* LISTING BINS */}
        <Row>
          <Link className="Product hvr-grow" href="/bins">
            <Row>
              <Col md={{ span: 8, offset: 4 }}>
                <h2>240L Garden Bin</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image
                  className="BinCropper"
                  src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Bin.jpg?v=1632524809405"
                  fluid
                />
              </Col>
              <Col sm={12} md={8}>
                <p>
                  Clean and convenient – wheel it to where you are working in
                  the garden.
                </p>
                <Button variant="primary">Order a garden waste bin</Button>{' '}
              </Col>
            </Row>
          </Link>
        </Row>
        {/* LISTING BAGS */}
        <Row>
          <Link className="Product hvr-grow " href="/bags">
            <Row>
              <Col md={{ span: 8, offset: 4 }}>
                <h2>600L Garden Bag</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image
                  src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Bag.jpg?v=1632524809122"
                  fluid
                />
              </Col>
              <Col sm={12} md={8}>
                <p>
                  Free standing frame Large capacity - situated anywhere on your
                  property.
                </p>
                <Button variant="primary">Order a garden waste bag</Button>{' '}
              </Col>
            </Row>
          </Link>
        </Row>

        <HowItWorks />
        

      
      </Container>
      {/* END OF CONTENT CONTAINER */}

      <Footer />

      <ModalTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}
