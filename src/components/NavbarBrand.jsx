import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import { Link } from 'wouter'
export default () => (

    <Navbar.Brand href="/">
      <Image
        alt="Red Lid Garden Bins and Bags in Waikato, New Zealand."
        src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlidLogo40pxH.png?v=1634935238604"
        height="40"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
)
