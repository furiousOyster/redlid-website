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
import ModalSkipTerms from '../components/ModalSkipTerms'
import SkipsNav from '../components/SkipsNav'
import Footer from '../components/Footer'

export default function Skips() {
  const [showTerms, setShowTerms] = useState(false)
  const [showFaqs, setShowFaqs] = useState(false)

  return (
    <>
      <Container fluid="lg">
        <Row>
          <SkipsNav />
        </Row>

        {/* HEADER */}
        <Row className="Header">
          <h1>Order a Hardfill Skip</h1>
          <p>For X Y Z A B and C</p>
          <Col>
            <Link href='/Skips' >
            <Button variant="outline-primary" className="ProductSwap">
              Order a different type of skip
            </Button>{' '}
              </Link>
          </Col>
        </Row>


        {/* ORDER FORM */}


        <Row>
          <Col>
            <p>
              Any Skip orders are subject to availability. Confirmation of your
              order and the delivery date will be confirmed via email.
            </p>
            <p>
              Orders outside of our regular office hours Mon-Thurs 8-5pm and
              Friday 8-3pm will be confirmed on the next business day.
            </p>
          </Col>

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
              label="What date would you like the skip delivered?"
              className="mb-3"
            >
              <Form.Control type="date" placeholder="Enter date" />

              <small id="deliverydatehelp" className="form-text text-muted">
                If you choose to have a skip delivered on a public holiday, we
                will need to deliver it the day before.
              </small>
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
              className="mb-3" /* style without classnames */
            >
              <Form.Control type="email" placeholder="name@example.com" />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </FloatingLabel>


            <FloatingLabel label="Skip size">
              {' '}
              {/* For Green and Garden Waste only */}
              <Form.Select aria-label="Skip size">
                <option>9 cubic metres - $280</option>
                <option>6 cubic metres - $230</option>
                <option>3 cubic metres - $190</option>
              </Form.Select>
              <small className="form-text text-muted">
                Weight limits: 9m³=1500kg | 6m³=1000kg | 3m³=500kg
              </small>
            </FloatingLabel>

            <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fskipunloadslowversion9frame.gif?v=1632363782499" />

            <FloatingLabel
              controlId="Comments"
              label="Where would you like the skip placed?"
            >
              <Form.Control
                as="textarea"
                placeholder="For example: As far up the driveway as possible, on the right."
                style={{ height: '100px' }}
              />
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

      </Container>

         <Footer />

      <ModalSkipTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}