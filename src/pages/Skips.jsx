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

import ModalFaqs from '../components/ModalFaqs'
import ModalSkipTerms from '../components/ModalSkipTerms'
import SkipsNav from '../components/SkipsNav'
import Footer from '../components/Footer'

import BlogHowToMaximiseYourSkip from '../components/BlogHowToMaximiseYourSkip'

export default function Skips() {
  const [showTerms, setShowTerms] = useState(false)
  const [showFaqs, setShowFaqs] = useState(false)

  return (
    <>
      {/* CONTENT CONTAINER */}
      <Container fluid id="NavContainer">
        <Row>
          <SkipsNav />
        </Row>

        {/* HEADER */}

        <Row className="Header">
          <h1>Choose a Skip</h1>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={{ span: 8, offset: 4 }}>
            <p className="Description">
              Any Skip orders are subject to availability. Confirmation of your
              order and the delivery date will be confirmed via email.
              <br />
              Orders outside of our regular office hours Mon-Thurs 8-5pm and
              Friday 8-3pm will be confirmed on the next business day.
            </p>
          </Col>
        </Row>

        {/* LISTING GENERAL WASTE */}
        <Row>
          <Link href="/SkipGeneral" className="Product hvr-grow ">
            <Row>
              <Col md={{ span: 8, offset: 4 }}>
                <h2>General Waste Skip</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image
                  src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_GeneralWaste_Skip.jpg?v=1632527973536"
                  fluid
                />
              </Col>
              <Col sm={12} md={8}>
                <i>From $8 per collection</i>
                <p>
                  Ideal for large clean-ups including renovations, moving house,
                  or if you just need a tidy up.
                </p>
                <Button variant="primary">Order a general waste skip</Button>{' '}
              </Col>
            </Row>
          </Link>
        </Row>

        {/* LISTING GREEN WASTE */}
        <Row>
          <Link href="/SkipGreen" className="Product hvr-grow ">
            <Row>
              <Col md={{ span: 8, offset: 4 }}>
                <h2>Green Waste Skip</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image
                  src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Greenwaste_Skip.jpg?v=1632527973536"
                  fluid
                />
              </Col>
              <Col sm={12} md={8}>
                <i>From $8 per collection</i>
                <p>
                  Perfect for that big garden clean up. All green waste is
                  recycled into compost biproducts.
                </p>
                <Button variant="primary">Order a green waste skip</Button>{' '}
              </Col>
            </Row>
          </Link>
        </Row>

        {/* LISTING HARDFILL*/}
        <Row>
          <Link href="/SkipHardfill" className="Product hvr-grow ">
            <Row>
              <Col md={{ span: 8, offset: 4 }}>
                <h2>Hardfill Skip</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image
                  src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Hardfill_skip.jpg?v=1632527973536"
                  fluid
                />
              </Col>
              <Col sm={12} md={8}>
                <i>From $8 per collection</i>
                <p>
                  This 3m³ skip is perfect for rocks, bricks, concrete, soil,
                  sand and tiles. Low sided skip ideal for heavy loads. No
                  weight limit.
                </p>
                <Button variant="primary">Order a hardfill skip</Button>{' '}
              </Col>
            </Row>
          </Link>
        </Row>

        <BlogHowToMaximiseYourSkip />
        
      </Container>

      <Footer />

      <ModalSkipTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}
