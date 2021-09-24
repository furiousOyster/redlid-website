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
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import SkipsNav from '../components/skipsNav'

export default function Manage() {
  return (
    <>
      <Container fluid="lg">
        <Row>
          <SkipsNav />
        </Row>

        {/* HEADER */}
        <Row className="Header">
          <h1>Manage my services</h1>
          <p>Regular or one-off collections for green and garden waste</p>
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
              <small class="form-text text-muted" id="cc">
                We will contact you by phone for your credit card details.
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
    </>
  )
}
