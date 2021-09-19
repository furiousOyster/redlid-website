import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import BinsNav from "./binsNav";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <BinsNav />
        <Col>
          <Container>
            <Row className="Header">
              <h1>Red Lid Garden Bags and Bins</h1>
              <p>Regular or one-off collections for green and garden waste</p>
            </Row>
            
            //Product Selector
            
            <Row>
              <a className="Product">
                <Row>
                  <h2>240L Garden Bin</h2>
                </Row>
                <Row>
                  <Col sm={12} md={4}>
                    <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fskip.jpg?v=1631831496533" />
                  </Col>
                  <Col sm={12} md={8}>
                    <i>From $8 per collection</i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam fermentum, nulla luctus pharetra vulputate, felis
                      tellus mollis orci, sed rhoncus pronin sapien nunc accuan
                      eget.
                    </p>
                    <Button variant="primary">Browse Skips</Button>{" "}
                  </Col>
                </Row> 
                //end of selector
                
                
              </a>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
