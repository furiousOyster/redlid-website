import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import ModalTerms from '../components/ModalTerms'
import OrderForm from '../components/OrderForm'

export default function Bins() {
  return (
    <>
      <Container fluid id="NavContainer">
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
              There are no contracts to sign – you are only committed to the Bin
              for $60 worth of collections.
            </p>
            <p>
              We will be in contact to advise the delivery day for your bin.
            </p>
          </i>
          <OrderForm bin />
        </Row>
      </Container>
    </>
  )
}
