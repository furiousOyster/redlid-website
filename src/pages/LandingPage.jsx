import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'
import * as React from 'react'
import { Link } from 'wouter'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Container fluid id="LandingPage">
        <Row>
          <MainNav />
          
            <Col className="LandingPagePanel" sm={12} md={6}>
            <Link href="/Skips"  className="hvr-grow">
              <h1>Red Lid Skips</h1>
              <p>
                For general waste, garden waste, or hardfill. <br />
                Best prices in the greater Waikato.
              </p>
              <Image
                src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Skip_Composite.jpg?v=1633916051057"
                fluid
                
              />
              <Button variant="primary">Browse Skips</Button>
            </Link>
          </Col>
          
          <Col className="LandingPagePanel" sm={12} md={6}>
            <Link href="/BinsBags" className="hvr-grow">
              <h1>Garden Bins & Bags</h1>
              <p>
                For green and garden waste. <br />
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
