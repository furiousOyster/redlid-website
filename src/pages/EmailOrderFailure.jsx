import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function EmailOrderFailure() {
  return (
    <>
      <Container fluid id="NavContainer">
        <Row className="Header">
          <h1>Order Failed</h1>
        </Row>
      </Container>
      <Container id="pdp">
        <Row>
          <i className="pdpHelptext">
            <p>Something went wrong.</p>
            <p> Please contact us.</p>
          </i>
        </Row>
      </Container>
    </>
  )
}
