import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
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
          <Image src="/assets/RedlidBin.jpg" />
        </Row>
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
