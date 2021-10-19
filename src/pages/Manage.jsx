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

import SkipsNav from '../components/SkipsNav'

export default function Manage() {
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
          <h1>Manage my services</h1>
          <p>$60 is required before delivery</p>
        </Row>

        {/* MANAGE FORM */}

        <Row>
        
          

          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Change collection date"
              className="mb-3"
            >
              <Form.Control type="date" placeholder="Enter date" />
            </FloatingLabel>

            <FloatingLabel label="Change Collection Frequency">
              <Form.Select aria-label="Type of waste">
                <option value="weekly">Every week</option>
                <option value="2weekly">Every 2 weeks</option>
                <option value="4weekly">Every 4 weeks</option>
              </Form.Select>
            </FloatingLabel>
            
            
             <FloatingLabel label="Check payment method">
              <Form.Select aria-label="Floating label select example">
                <option>Internet banking</option>
                <option value="cc">Credit card (+3% surcharge)</option>
              </Form.Select>
            </FloatingLabel>
            
            
           <Button
                onClick={() => setShowTerms(true)}
                className="TermsModalBtn"
                variant="link"
              >
                Terms & conditions about missing collections
              </Button>
            

            <p class="msg-error error"></p>
            <button
              type="submit"
              class="btn btn-primary"
              disabled="disabled"
              id="submitBtn"
            >
              Save changes
            </button>
          </Form>
        </Row>
      </Container>

      {/* FOOTER */}
      <Container fluid>
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
            <a href="tel:078340191">(07) 834 0191</a> or{' '}
            <a href="tel:0800733543">0800 REDLID</a> answer phone - we check our
            messages regularly. We look forward to providing you with prompt,
            friendly and professional service.
          </p>
        </Row>
      </Container>
 
      <ModalTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}
