import * as React from 'react'
import { Link } from 'wouter'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <MainNav />
        </Row>
      </Container>
      <Container fluid="md" id="LandingPage">
        <Row>
          <Col className="LandingPagePanel" sm={12} md={6}>
            <Link href="/BinsBags" className="hvr-grow">
              <h1>Garden Bins & Bags</h1>
              <p>
                For garden waste collections. <br />
                We deliver, we collect, Waikato-wide.
              </p>
              <Image
                src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidBinBag.jpg?v=1634953281441"
                fluid
              />
              <Button variant="primary">Browse Bins & Bags</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}
