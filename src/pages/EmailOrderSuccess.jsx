import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

export default function EmailOrderSuccess() {
  return (
    <>
      <Container fluid id="NavContainer">
        <Row className="Header">
          <h1>Thank you !</h1>
        </Row>
      </Container>
      <Container id="pdp">
        <Row className="pdptop">
          <Image src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidBinBag.jpg?v=1634953281441" />
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
      </Container>
    </>
  )
}
