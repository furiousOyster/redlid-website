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
import MainNav from "./mainNav";

export default function Home() {
  return (
    <Container fluid id="LandingPage">
      <Row>
        <MainNav />
        <Col className="LandingPagePanel" sm={12} md={6}>
          <Image src="holder.js/171x180" thumbnail />
          <h1>Red Lid Garden Bins & Bags</h1>
        </Col>
        <Col className="LandingPagePanel" sm={12} md={6}>
           <h1></h1>
          <Image src="holder.js/171x180" thumbnail />
          <h1>Red Lid Skips</h1>
        </Col>
      </Row>
    </Container>
  );
}
