import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import BinsNav from '../components/BinsNav'
import Footer from '../components/BinsFooter'
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
          <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Bag.jpg?v=1632524809122" />
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
