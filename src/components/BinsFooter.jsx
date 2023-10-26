import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default () => (
  <Container fluid className="Footer BinsBags" id="Footer">
    <h2>We are easy to contact.</h2>
    <Row>
      <Container className="FooterContents BoldLinks">
        <Row>
          <Col md={3}>
            <p>
              <b>Red Lid Garden Bins &amp; Bags Ltd</b>
              <br />
              P.O. Box 24087
              <br />
              Hillcrest
              <br />
              Hamilton 3253
            </p>
          </Col>
          <Col md={6}>
            <p className="officehours">
              Office hours are 8am - 5pm Monday to Thursday, 8am-3pm Fridays
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Phone</td>

                  <td>
                    <a href="tel:078340191">(07)&nbsp;834&nbsp;0191</a>
                  </td>
                </tr>

                <tr>
                  <td></td>

                  <td>
                    <a href="tel:0800733543">0800 REDLID (0800&nbsp;733543)</a>
                  </td>
                </tr>

                <tr>
                  <td>Email</td>

                  <td>
                    <a href="mailto:service@redlid.co.nz?subject=Website%20Contact:%20">
                      service@redlid.co.nz
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </Row>
  </Container>
)
