import * as React from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'wouter'

export default () => (
  <Container fluid className="Footer" id="Footer">
    <h2>We are easy to contact.</h2>
    <Row>
      <Container className="FooterContents BoldLinks">
        <Row>
          <Col md={3}>
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
            <p className="officehours">
              Office hours are 8am - 5pm Monday to Thursday, 8am-3pm Fridays
            </p>
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
          <Col md={3}>
            <Link href="/Manage">
              <Button variant="outline-secondary" id="ManageServicesBtn">
                Manage Services
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Row>
  </Container>
)
