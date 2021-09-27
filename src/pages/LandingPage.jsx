import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'
import * as React from 'react'
import { animated } from 'react-spring'
import { Link } from 'wouter'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import MainNav from '../components/MainNav'

export default function Home() {
  return (
    <Container fluid id="LandingPage">
      <Row>
        <MainNav />
        <Col className="LandingPagePanel" sm={12} md={6}>
          <Link href="/bins">
            <h1>Red Lid Garden Bins & Bags</h1>
            <p>
              For green and garden waste. <br />
              We deliver, we collect.
            </p>
            <Image
              src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Bin_Bag_Composite.jpg?v=1632526457670"
              fluid
            />
            <Button variant="primary">Browse Bins & Bags</Button>{' '}
          </Link>
        </Col>
        <Col className="LandingPagePanel" sm={12} md={6}>
          <Link href="/skips">
            <h1>Red Lid Skips</h1>
            <p>
              For general waste, garden waste, or hardfill. <br />
              Best prices in the greater Waikato.
            </p>
            <Image
              src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Skip_Composite.jpg?v=1632526457830"
              fluid
            />
            <Button variant="primary">Browse Skips</Button>{' '}
          </Link>
        </Col>
      </Row>
    </Container>
  
  )
}
