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
import TnCModal from './TnCModal'
import BinsNav from './binsNav'

export default function Home() {
  return (
    <Container>
      <Row>
        <BinsNav/>
        <Col>
          
          
        </Col>
      </Row>
    </Container>
  );
}
