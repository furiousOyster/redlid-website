import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import OrderForm from '../components/OrderForm'

export default function Bags() {
  return (
    <>
      <Container fluid id="NavContainer">
        <Row className="Header">
          <h1>Order a Garden Bag</h1>
        </Row>
      </Container>
      <Container id="pdp">
        <Row className="pdptop">
          <Image src="/assets/Redlid_Bag.jpg" />
        </Row>
        <Row>
          <i className="pdpHelptext">
            <p>
              There are no contracts to sign – you are only committed to the Bag
              for $60 worth of collections.
            </p>
            <p>
              We will be in contact to advise the delivery day for your bag.
            </p>
          </i>
        </Row>
        <OrderForm bag />
      </Container>
    </>
  )
}
