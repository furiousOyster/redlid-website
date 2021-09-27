import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import MainNav from "../components/MainNav";

export default function Home() {
  return (
    <Container fluid id="LandingPage">
      <Row>
        <MainNav />
        <Col className="LandingPagePanel" sm={12} md={6}>
          <Link href="/bins">
             <h1>Red Lid Garden Bins & Bags</h1>
            <p>For green and garden waste. <br />We deliver, we collect.</p>
            <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Bin_Bag_Composite.jpg?v=1632526457670" fluid/>
           <Button variant="primary">Browse Bins & Bags</Button>{' '}
          </Link>
        </Col>
        <Col className="LandingPagePanel" sm={12} md={6}>
          <Link href="/skips">
            <h1>Red Lid Skips</h1>
             <p>For general waste, garden waste, or hardfill. <br />Best prices in the greater Waikato.</p>
            <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Skip_Composite.jpg?v=1632526457830" fluid/>
           <Button variant="primary">Browse Skips</Button>{' '}
          </Link>
        </Col>
      </Row>
      
<Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidSkipTruck.jpg?v=1632543381199" fluid/>

    </Container>
    
    
   
      <Container fluid className="Footer"> 
        <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidSkipTruckWide.jpg?v=1632708017493" />
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
      </Container>
    
    
  );
}
