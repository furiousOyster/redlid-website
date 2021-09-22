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
import ModalFaqs from '../components/ModalFaqs'
import ModalTerms from '../components/ModalTerms'

import BinsNav from './binsNav'

export default function Bins() {
  const [showTerms, setShowTerms] = useState(false)
  const [showFaqs, setShowFaqs] = useState(false)

  return (
    <>
      <Container fluid="lg">
        <Row>
          <BinsNav />
        </Row>

        <Row className="Header">
          <h1>Red Lid Garden Bags and Bins</h1>
          <p>Regular or one-off collections for green and garden waste</p>
        </Row>
        <Row>
          <a className="Product">
            <Row>
              <h2>240L Garden Bin</h2>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fbin.jpg?v=1631831496533" />
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
        <Row>
          <a className="Product">
            <Row>
              <h2>600L Garden Bag</h2>
            </Row>
            <Row>
              <Col sm={12} md={4}>
                <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fbag.jpg?v=1631831496533" />
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
        <Row>
          <h1>Order Garden Bin</h1>
          <form
            action="https://redlid-orders.herokuapp.com/submitOrder/"
            method="post"
            enctype="json"
          >
            <input name="ordertype" id="prodId" type="hidden" value="bag" />
            <div class="form-group">
              <label for="address">Address*</label>
              <input
                name="Address"
                type="text"
                class="form-control"
                id="Street"
                placeholder="Start entering your address or Postcode"
                required
              />
            </div>
            <div class="form-group">
              <label for="firstname">First name*</label>
              <input
                name="First Name"
                type="text"
                class="form-control"
                id="firstname"
                placeholder="First name"
                required
              />
            </div>
            <div class="form-group">
              <label for="surname">Surname*</label>
              <input
                name="Last Name"
                type="text"
                class="form-control"
                id="surname"
                placeholder="Surname"
                required
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone</label>
              <input
                name="Phone"
                type="tel"
                class="form-control"
                id="phone"
                placeholder="Phone"
              />
            </div>
            <div class="form-group">
              <label for="email">Email address*</label>
              <input
                name="Email"
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="pickupcycle">Pick up cycle</label>
              <select name="Pickup Cycle" class="form-control" id="pickupcycle">
                <option>Weekly (Hamilton only) - $18 per collection</option>
                <option>2-weekly - $20 per collection</option>
                <option>4-weekly - $24 per collection</option>
                <option>
                  One-off (collection within 4 weeks of dropoff) - $40
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="payment">Payment method</label>
              <select class="form-control" id="payment" name="payment">
                <option>Internet banking</option>
                <option value="cc">Credit card (+3% surcharge)</option>
              </select>
              <small class="form-text text-muted" id="cc">
                We will contact you by phone for your credit card details.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Any comments or special instructions?
              </label>
              <textarea
                name="Instructions"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder=""
              ></textarea>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  name="Terms"
                  type="checkbox"
                  class="form-check-input"
                  id="the-terms"
                />
                I have read and agree to the{' '}
                <a onClick={() => setShowTerms(true)} className="tnclink">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <div
              id="recaptcha"
              class="g-recaptcha"
              data-sitekey="6LdXC_IUAAAAAHzZhOlhxpVLRBEDEVddO00nIUpx"
            ></div>
            <span class="msg-error error"></span>
            <button
              type="submit"
              class="btn btn-primary"
              disabled="disabled"
              id="submitBtn"
            >
              Submit order
            </button>
          </form>
        </Row>
      </Container>
      <ModalTerms show={showTerms} onHide={() => setShowTerms(false)} />
      <ModalFaqs show={showFaqs} onHide={() => setShowFaqs(false)} />
    </>
  )
}
