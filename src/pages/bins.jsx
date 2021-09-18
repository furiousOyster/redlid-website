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
import BinsNav from './binsNav'

export default function Home() {
  return (
    <Container>
      <Row>
        <BinsNav/>
        <Col>test n stuff
        <ul><li>test</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
