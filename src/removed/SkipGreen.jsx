import React, { useState } from 'react'
import { Link } from 'wouter'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
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
      {/* CONTENT CONTAINER */}
      <Container fluid id="NavContainer">
        <Row>
          <SkipsNav />
        </Row>

        {/* HEADER */}

        <Row className="Header">
          <h1>Order a Green Waste Skip</h1>
        </Row>
      </Container>

      <Container id="pdp">
        <Row className="pdptop">
          <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Greenwaste_Skip.jpg?v=1632527973536" />
          <Link href="/Skips"></Link>
        </Row>

        {/* ORDER FORM */}

        <Row>
          <i className="pdpHelptext">
            <p>
              Any Skip orders are subject to availability. Confirmation of your
              order and the delivery date will be confirmed via email.
            </p>
            <p>
              Orders outside of our regular office hours Mon-Thurs 8-5pm and
              Friday 8-3pm will be confirmed on the next business day.
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

            <h2 className="blacklabel">Choose a skip size</h2>

            <Form.Group className="mb-3" id="SkipSize">
              <Row>
                <Col xs={12} sm={4}>
                  <Image
                    fluid
                    src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2F9mSKip.png?v=1636582031070"
                  />
                  <Form.Check
                    label="9m² ($300)"
                    name="Skip Type"
                    type="inline-radio"
                    id="SkipSize9m"
                  />
                  <Form.Text id="WeightHelp" muted>
                    Weight limit 1500kg
                  </Form.Text>
                </Col>
                <Col xs={12} sm={4}>
                  <Image
                    fluid
                    src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2F6mSKip.png?v=1636582031070"
                  />
                  <Form.Check
                    label="6m² ($250)"
                    name="Skip Type"
                    type="inline-radio"
                    id="SkipSize6m"
                  />
                  <Form.Text id="WeightHelp" muted>
                    Weight limit 1000kg
                  </Form.Text>
                </Col>
                <Col xs={12} sm={4}>
                  <Image
                    fluid
                    src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2F3mSKip.png?v=1636582031070"
                  />
                  <Form.Check
                    label="3m² ($210)"
                    name="Skip Type"
                    type="inline-radio"
                    id="SkipSize3m"
                  />
                  <Form.Text id="WeightHelp" muted>
                    Weight limit 500kg
                  </Form.Text>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" id="deliveryDate">
              <Form.Label>
                What date would you like the skip delivered?
              </Form.Label>
              <Form.Control type="date" placeholder="Enter date" />
            </Form.Group>

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

            <div className="SkipUnloadTruck">
              <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fskipunloadslowversion9frame.gif?v=1632363782499" />

              <FloatingLabel
                id="whereToPlaceTheSkip"
                controlId="Comments"
                label="Where would you like the skip placed?"
              >
                <Form.Control
                  as="textarea"
                  placeholder="For example: As far up the driveway as possible, on the right."
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </div>

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
            <Col className="centered">
              <Button
                variant="primary"
                type="submit"
                disabled="disabled"
                id="submitBtn"
                size="lg"
              >
                Submit order
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>

      <Footer />

      <ModalSkipTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}
