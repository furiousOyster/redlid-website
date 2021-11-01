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
import Footer from '../components/Footer'

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
          <h1>Choose a bag or&nbsp;bin</h1>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={{ span: 8, offset: 4 }}>
            <p className="Description">
              Regular or one-off collections for green and garden waste.
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
                <i>From $8 per collection</i>
                <p>
                  Clean and convenient – wheel it to where you are working in
                  the garden.
                </p>
                <Button variant="primary">Order garden waste bins</Button>{' '}
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
                <i>From $8 per collection</i>
                <p>
                  Free standing frame Large capacity - situated anywhere on your
                  property.
                </p>
                <Button variant="primary">Order garden waste bags</Button>{' '}
              </Col>
            </Row>
          </Link>
        </Row>

        <HowItWorks />

        {/* BLOG POST */}
        <Row>
          <h2>Blog post example</h2>
          <i>24 September 2021</i>
          <Col>

            <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fbin.jpg?v=1631831496533" />

            <p>
             Summer is here and it's time to take care of that spring overgrowth! Our job is to make your garden waste removal as simple and cheap as possible.
              So here are our top eight tips for the most efficient rubbish skip fillery imagineable!
            </p>
            <ListGroup as="ol" numbered>
  <ListGroup.Item as="li">Crasjustoodio</ListGroup.Item>
</ListGroup>
            1. 

2. Look closely at our Redlid skip hire pictures on our website. This is the best way to ensure you are ordering the correct size Redlid skip. Note all the related skip hire prices are recorded on our site.

3. Check the weather forecast as loading a skip in the rain is not much fun and can add
to the cost.

4. If you want to make an early morning start loading your Redlid skip, order it for the afternoon before you need it. Skip companies often have planned drop off schedules which means that you may not get your bin in time to start loading at that exact time.

5. If it rains, put a tarpaulin over the skip to cover it and keep water out. You don’t want to be paying extra over-weight charges for a heavy wet load as transfer stations charge only by weight.

6. If you are unsure of Skip size, it pays to advise us and go for the next size up. For example, to help you do this, we will supply a 9m bin when you order a 6m just in case you need to fill the extra capacity. This would save time, and it would cost a lot more money if you had to order a second bin.

7. And always be careful when loading a skip. Accidents can occur if you try to climb the side of the skip or entering the skip.

8. If you are unsure about what goes into a Redlid skip check the terms and conditions or contact one of our friendly office staff. You don’t want extra charges because you have put the wrong items in a skip.
          </Col>
        </Row>

        {/* END OF BLOG POST */}
      </Container>
      {/* END OF CONTENT CONTAINER */}

      <Footer />

      <ModalTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}
