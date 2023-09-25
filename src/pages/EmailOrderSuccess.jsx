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
          <Image src="assets/RedlidBinBag.jpg" />
        </Row>
        <Row>
          <i className="pdpHelptext">
            <p>
              There are no contracts to sign – you are only committed for $60
              worth of collections.
            </p>
            <p>We will be in contact to advise the date of delivery.</p>
          </i>
        </Row>
      </Container>
    </>
  )
}
