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
      <Container fluid className="Footer">
        <Row>
          <h2>We are easy to contact</h2>
          <Col md={6}>
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

                <tr>
                  <td></td>

                  <td>
                    <Link href="/manage">Manage my services</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <p>
            Please feel free to contact us about anything you may require or
            need further explanation on.
          </p>

          <p class="officehours">
            Office hours are 8am - 5pm Monday to Thursday, 8am-3pm Fridays
          </p>

          <p>
            If outside these hours leave a message on{' '}
            <Link href="tel:078340191">(07) 834 0191</Link> or{' '}
            <Link href="tel:0800733543">0800 REDLID</Link> answer phone - we
            check our messages regularly. We look forward to providing you with
            prompt, friendly and professional service.
          </p>
        </Row>
    <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidSkipTruck.jpg?v=1632790947327" fluid />
      </Container>

)
