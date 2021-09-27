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
          <h1>Red Lid Skips</h1>
          <p>
            Any Skip orders are subject to availability. Confirmation of your
            order and the delivery date will be confirmed via email.
          </p>
          <p>
            Orders outside of our regular office hours Mon-Thurs 8-5pm and
            Friday 8-3pm will be confirmed on the next business day.
          </p>
        </Row>

        {/* LISTING GENERAL WASTE */}
        <Row>
          <a className="Product">
            <Row>
              <h2>General Waste Skip</h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  fermentum, nulla luctus pharetra vulputate, felis tellus
                  mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
                <Button variant="primary">Order a general waste skip</Button>{' '}
              </Col>
            </Row>
          </a>
        </Row>

        {/* LISTING GREEN WASTE */}
        <Row>
          <a className="Product">
            <Row>
              <h2>Green Waste Skip</h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  fermentum, nulla luctus pharetra vulputate, felis tellus
                  mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
                <Button variant="primary">Order a green waste skip</Button>{' '}
              </Col>
            </Row>
          </a>
        </Row>

        {/* LISTING HARDFILL*/}
        <Row>
          <a className="Product">
            <Row>
              <h2>Hardfill Skip</h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  fermentum, nulla luctus pharetra vulputate, felis tellus
                  mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </p>
                <Button variant="primary">Order a hardfill skip</Button>{' '}
              </Col>
            </Row>
          </a>
        </Row>

        {/* ORDER FORM */}

        <Row>
          <Col>
            <h1>Order General Waste Skip</h1>
            <Button variant="outline-primary" className="ProductSwap">
              Choose a different type of skip
            </Button>{' '}
          </Col>
        </Row>

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
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </FloatingLabel>

            <FloatingLabel label="Type of waste">
              <Form.Select aria-label="Type of waste">
                <option value="general">General rubbish</option>
                <option value="green">Green waste</option>
                <option value="hard">
                  Hard fill (concrete, soil, sand, tiles, bricks, stones, rocks)
                </option>
              </Form.Select>
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

        {/* HOW IT WORKS */}

        <Row>
          <h2>How it works</h2>
          <Col xs={12} lg={6}>
            <p>
              We provide 2 options for Garden Waste Collection, either a 240
              litre Wheelie Bin or a 600 litre Garden Bag. You choose your
              Collection Frequency and you can change the frequency at any
              time. You can also change between the Wheelie Bin and the Garden
              Bag.
            </p>
          </Col>
          <Col>
            <i></i>
            <p>
              <strong>THERE ARE NO CONTRACTS TO SIGN</strong>
            </p>

            <p>
              <strong>GUARANTEED EXACT DAY OF COLLECTION</strong>
            </p>
          </Col>
        </Row>
        <row>
          <table border="0" cellspacing="0" cellpadding="0" width="0">
            <tr>
              <td width="25%" valign="top">
                Weekly{' '}
              </td>

              <td width="74%" valign="top">
                <p>Hamilton only</p>
              </td>
            </tr>

            <tr>
              <td width="25%" valign="top">
                <p>2 Weekly</p>
              </td>

              <td width="74%" valign="top">
                <p>
                  Hamilton, Te Awamutu, Cambridge, Morrinsville, Matamata,
                  Ngaruawahia, Te Kowhai
                </p>
              </td>
            </tr>

            <tr>
              <td width="25%" valign="top">
                <p>4 Weekly</p>
              </td>

              <td width="74%" valign="top">
                <p>
                  Hamilton, Te Awamutu, Cambridge, Morrinsville, Matamata,
                  Ngaruawahia, Te Kowhai
                </p>
              </td>
            </tr>

            <tr>
              <td width="25%" valign="top">
                <p>8 Weekly</p>
              </td>

              <td width="74%" valign="top">
                <p>
                  Hamilton, Te Awamutu, Cambridge, Morrinsville, Matamata,
                  Ngaruawahia, Te Kowhai
                </p>
              </td>
            </tr>
          </table>

          <p>
            These are some of the benefits of why Red Lid Garden Bins &amp; Bags
            may work for you
          </p>

          <ul>
            <li>
              We are in every suburb every week on the <strong>SAME DAY</strong>{' '}
              (Hamilton only)
            </li>

            <li>Extra collections are no problem</li>

            <li>We can also leave extra bags for big clean up&rsquo;s</li>

            <li>
              We can do one off/casual collections of a 600 litre Garden Bag
            </li>

            <li>
              If you have your own bin or bag we can also do a one off
              collection
            </li>
          </ul>

          <p>
            Garden Bags can be located anywhere on your property with easy
            access- we collect off your section with a hand trolley.
          </p>

          <p>
            {' '}
            Garden Bins are collected from the kerbside on your collection day. 
            Please have the Bin on the kerb by 7am.  We service each suburb on
            the same day each week.  If for some reason you cannot get your
            Garden Bin to the kerb you can arrange with us to do so at{' '}
            <strong>NO EXTRA COST</strong>.
          </p>

          <p>
            <strong>
              &ldquo;WE BELIEVE WE WILL NOT BE BEATEN ON SERVICE&rdquo;
            </strong>
          </p>

          <p>
            <strong>
              OUR VISION IS TO BE THE NUMBER 1 GREEN WASTE COLLECTOR IN THE
              WAIKATO
            </strong>
          </p>

          <h2>About us</h2>

          <p>
            We are proud to be rated the Number 1 Green Waste Collectors in the
            Waikato.
          </p>

          <p>
            Hamilton Garden Bags was established in 1989 and then purchased by
            brothers Grant &amp; Steve Wilson in 1998.&nbsp; In 2015 the name
            was changed to Red Lid Garden Bins &amp; Bags Ltd.&nbsp; We started
            out with one tandem trailer which was very hard work in the early
            days.&nbsp; But through hard work and a commitment to providing the
            best customer service, we are now proud of our fleet of 7 purpose
            built compactor trucks.
          </p>

          <p>
            Our Vision to be The Number 1 Green Waste Collector in the Waikato
            drives our passion to deliver the best possible customer
            service.&nbsp; We have a team that believes in our Vision and we are
            proud of what we achieve every day.
          </p>

          <p>
            We provide more Collection Frequency options than any other company
            in the Waikato.&nbsp; “Good as Gold”&nbsp; “Not a problem” is all
            part of our very prompt and reliable service. We pride ourselves on
            delivering the best service in the Waikato.
          </p>

          <p>
            We are proud to be doing our part for the environment as all the
            Greenwaste we collect is recycled into compost products which
            reduces the estimated 40% of Greenwaste that goes to landfills each
            year.
          </p>

          <p>
            2018 has been an exciting year with the addition of RedLid Skips.
            This came about as our existing customers were contacting us on a
            regular basis and asking if we had skips. The decision was made to
            provide skips but not just for Greenwaste. We also provide skips for
            General waste and Hard fill. At this stage we are only providing
            skips in Hamilton and Cambridge.
          </p>

          <p>
            Red Lid Garden Bins &amp; Bags are proud to be 100% Hamilton owned
            &amp; operated and committed to providing the best Green Waste
            Collection service in the Waikato.
          </p>
        </row>
      </Container>

      {/* FOOTER */}
      <Container fluid className="Footer">
        <Row>
          <h2>We are easy to contact</h2>
          <Col md={6}>
            <p>
              Red Lid Garden Bins &amp; Bags Ltd
              <br />
              P.O. Box 24087
              <br />
              Hillcrest
              <br />
              Hamilton 3253
            </p>
          </Col>
          <Col md={6}>
            <table>
              <tbody>
                <tr>
                  <td>Phone</td>

                  <td>
                    <Link href="tel:078340191">(07)&nbsp;834&nbsp;0191</Link>
                  </td>
                </tr>

                <tr>
                  <td></td>

                  <td>
                    <Link href="tel:0800733543">
                      0800 REDLID (0800&nbsp;733543)
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>Email</td>

                  <td>
                    <Link href="mailto:service@redlid.co.nz">
                      service@redlid.co.nz
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td></td>

                  <td>
                    <Link href="/manage">Manage my services</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <p>
            Please feel free to contact us about anything you may require or
            need further explanation on.
          </p>

          <p class="officehours">
            Office hours are 8am - 5pm Monday to Thursday, 8am-3pm Fridays
          </p>

          <p>
            If outside these hours leave a message on{' '}
            <Link href="tel:078340191">(07) 834 0191</Link> or{' '}
            <Link href="tel:0800733543">0800 REDLID</Link> answer phone - we
            check our messages regularly. We look forward to providing you with
            prompt, friendly and professional service.
          </p>
        </Row>
      </Container>

      <ModalSkipTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}
