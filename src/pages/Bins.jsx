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
import ModalTerms from '../components/ModalTerms'
import BinsNav from '../components/BinsNav'
import Footer from '../components/BinsFooter'








export default function Bins() {
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
          <h1>Order a 240L Wheelie Bin</h1>
        </Row>
      </Container>
      <Container id="pdp">
        <Row className="pdptop">
          <Image src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidBin.jpg?v=1634953281368" />
        </Row>

        {/* ORDER FORM */}

        <Row>
          <i className="pdpHelptext">
            <p>
              Clean and convenient – wheel it to where you are working in the
              garden.
            </p>
            <p>
              Please have your bin on the kerbside by 7am on your collection day
              – same weekday every collection.
            </p>
            <p>
             There are no contracts to sign – you are only committed to the Bin for $60 worth of collections.
            </p>
            <p>
             We will will be in contact to advise the delivery day for your bin.
            </p>

          </i>

          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your address for pricing"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter your address" />
            </FloatingLabel>
            
            
             <h2 className="blacklabel">Choose pickup cycle</h2>

            <Form.Check
              label="Weekly (Hamilton only) - $8 per collection"
              name="PickupCycle"
              type="inline-radio"
              id="Weekly"
            />

                 <Form.Check
              label="2-Weekly - $11 per collection"
              name="PickupCycle"
              type="inline-radio"
              id="TwoWeekly"
            />
                 <Form.Check
              label="4-Weekly - $16 per collection"
              name="PickupCycle"
              type="inline-radio"
              id="FourWeekly"
            />
                 <Form.Check
              label="8-Weekly - $23 per collection"
              name="PickupCycle"
              type="inline-radio"
              id="EightWeekly"
            />
              <Form.Check
              label="One-off (I have my own bin) - $22"
              name="PickupCycle"
              type="inline-radio"
              id="OneOff"
            />
            
            
            
            
            
            
            

            <FloatingLabel
              id="fullName"
              controlId="floatingInput"
              label="Enter your full name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Your name" />
            </FloatingLabel>

            <FloatingLabel
              id="phone"
              controlId="floatingInput"
              label="Phone number"
              className="mb-3"
            >
              <Form.Control type="phone" placeholder="Phone number" />
            </FloatingLabel>

            <FloatingLabel
              id="email"
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
              aria-describedby="emailHelp"
            >
              <Form.Control type="email" placeholder="name@example.com" />

              <Form.Text id="emailHelp" muted>
                We'll never share your email with anyone else.
              </Form.Text>
            </FloatingLabel>


            <h2 className="blacklabel">Payment method</h2>

            <Form.Check
              label="Internet banking"
              name="PaymentMethod"
              type="inline-radio"
              id="InternetBanking"
            />

            <Form.Check
              label="Credit card"
              name="PaymentMethod"
              type="inline-radio"
              id="CreditCard"
            />

            <Form.Text id="WeightHelp" muted>
              We will contact you by phone for your credit card details.
            </Form.Text>

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
