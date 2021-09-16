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
          <a href="#Bins">
            <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fbin.jpg?v=1631831496533" />
            <h1>Red Lid Garden Bins & Bags</h1>
          </a>
        </Col>
        <Col className="LandingPagePanel" sm={12} md={6}>
          <a href="#Skips">
            <Image src="https://cdn.glitch.com/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2Fskip.jpg?v=1631831496533" />
            <h1>Red Lid Skips</h1>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
