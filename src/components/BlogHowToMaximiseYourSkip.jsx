import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'wouter'

export default () => (
   <>
          {/* BLOG POST */}
        <Row id="BlogPost">
          <h2>HOW TO MAXIMISE YOUR SKIP</h2>
          <Col>
            <Image src="https://cdn.glitch.me/62dc5d7b-74d0-43a4-84cf-9d776e17c335%2FRedlid_Skip_Composite.jpg?v=1633916051057" />
            <p>
              Our job is to make your waste removal as simple
              and cheap as possible. So here are our top eight tips for the most
              efficient rubbish skip fillery imaginable!
            </p>
            <ListGroup as="ol" numbered>
               <ListGroup.Item as="li" active>
                <b>Steve's top Skip efficiency tips</b> 
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Plan ahead.</b> Make sure you have chosen a time for your Redlid
                Skip hire time when you are free of other commitments and if you
                want your friends help will they be available when you need
                them.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Look closely</b> at our Redlid skip hire pictures on our website.
                This is the best way to ensure you are ordering the correct size
                Redlid skip. Note all the related skip hire prices are recorded
                on our site.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <b>Check the weather forecast</b> as loading a skip in the rain is not
                much fun and can add to the cost.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                If you want to make an early morning start loading your Redlid
                skip, order it for <b>the afternoon before you need it.</b> Skip
                companies often have planned drop off schedules which means that
                you may not get your bin in time to start loading at that exact
                time.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                If it rains, put a tarpaulin over the skip to cover it and <b>keep
                water out.</b> You don’t want to be paying extra over-weight charges
                for a heavy wet load as transfer stations charge only by weight.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                If you are unsure of Skip size, it pays to advise us and <b>go for
                the next size up.</b> For example, to help you do this, we will
                supply a 9m bin when you order a 6m just in case you need to
                fill the extra capacity. This would save time, and it would cost
                a lot more money if you had to order a second bin.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                And always <b>be careful when loading a skip.</b> Accidents can occur
                if you try to climb the side of the skip or entering the skip.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                If you are unsure about what goes into a Redlid skip check the
                terms and conditions or contact one of our friendly office
                staff. You don’t want extra charges because you have put the
                wrong items in a skip.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        {/* END OF BLOG POST */}
  </>
)

