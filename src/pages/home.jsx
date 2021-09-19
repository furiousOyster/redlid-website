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
              <Col>
                <h1>Red Lid Garden Bags and Bins</h1>
                <p>Regular or one-off collections for green and garden waste</p>
              </Col>
            </Row>
            <Row>
            <Col>
              <a className="Product">
                <Row>
                <h2>240L Garden Bin</h2>
                </Row>
                <Row>
                <Col>
                  
                  
                  </Col>
                </Row>
              
                
                
              
              
              </a>
            
              </Col>
            
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
