import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import ModalTerms from './ModalTerms'

const CYCLES = {
  Weekly: 'Weekly',
  TwoWeekly: 'Two Weekly',
  FourWeekly: 'Four Weekly',
  EightWeekly: 'Eight Weekly',
  OneOff: 'One Off',
}

const BagsCycles = () => (
  <>
    <Form.Check
      id="pickupCycle1"
      name="Pickup Cycle"
      type="radio"
      label="Weekly (Hamilton only) - $20 per collection"
      value={CYCLES.Weekly}
      required
    />

    <Form.Check
      id="pickupCycle2"
      name="Pickup Cycle"
      type="radio"
      label="2-Weekly - $24 per collection"
      value={CYCLES.TwoWeekly}
    />
    <Form.Check
      id="pickupCycle3"
      name="Pickup Cycle"
      type="radio"
      label="4-Weekly - $28 per collection"
      value={CYCLES.FourWeekly}
    />
    <Form.Check
      id="pickupCycle4"
      name="Pickup Cycle"
      type="radio"
      label="One-off (Collection within 4 weeks of dropoff) - $45"
      value={CYCLES.OneOff}
    />
  </>
)

const BinsCycles = () => (
  <>
    <Form.Check
      id="pickupCycle1"
      name="Pickup Cycle"
      label="Weekly (Hamilton only) - $8.50 per collection"
      type="radio"
      value={CYCLES.Weekly}
      required
    />

    <Form.Check
      id="pickupCycle2"
      name="Pickup Cycle"
      type="radio"
      label="2-Weekly - $12 per collection"
      value={CYCLES.TwoWeekly}
    />
    <Form.Check
      id="pickupCycle3"
      name="Pickup Cycle"
      type="radio"
      label="4-Weekly - $18 per collection"
      value={CYCLES.FourWeekly}
    />
    <Form.Check
      id="pickupCycle4"
      name="Pickup Cycle"
      type="radio"
      label="8-Weekly - $25 per collection"
      value={CYCLES.EightWeekly}
    />
    <Form.Check
      id="pickupCycle5"
      name="Pickup Cycle"
      type="radio"
      label="One-off (I have my own bin) - $28"
      value={CYCLES.OneOff}
    />
  </>
)

export default function OrderForm({ bin = false, bag = false }) {
  if ((!bin && !bag) || (bin && bag)) {
    throw new Error('You must specify a bin or bag')
  }
  const [showTerms, setShowTerms] = useState(false)
  const Cycles = bin ? BinsCycles : BagsCycles
  const type = bin ? 'Bin' : 'Bag'
  return (
    <>
      <Form
        action="https://redlid-orders.herokuapp.com/submitOrder/"
        method="post"
        encType="json"
      >
        <input name="Order Type" id="orderType" type="hidden" value={type} />

        <h2 className="blacklabel">Choose pickup cycle</h2>

        <Cycles />

        <h2 className="blacklabel">Enter your address</h2>

        <FloatingLabel label="Street number and name" className="mb-3">
          <Form.Control
            id="Street"
            name="Address"
            type="text"
            placeholder="Street number and name"
            required
          />
        </FloatingLabel>
        <FloatingLabel label="Suburb" className="mb-3">
          <Form.Control
            id="Suburb"
            name="Suburb"
            type="text"
            placeholder="Suburb"
            required
          />
        </FloatingLabel>
        <FloatingLabel label="Town" className="mb-3">
          <Form.Control
            id="Town"
            name="Town"
            type="text"
            placeholder="Town"
            required
          />
        </FloatingLabel>
        <FloatingLabel label="Postcode" className="mb-3">
          <Form.Control
            id="Postcode"
            name="Postcode"
            type="text"
            placeholder="Postcode"
            required
          />
        </FloatingLabel>

        <h2 className="blacklabel">Enter contact details</h2>

        <FloatingLabel label="First Name" className="mb-3">
          <Form.Control
            id="firstName"
            name="First Name"
            type="text"
            placeholder="First Name"
            required
          />
        </FloatingLabel>
        <FloatingLabel label="Last Name" className="mb-3">
          <Form.Control
            id="lastName"
            name="Last Name"
            type="text"
            placeholder="Last Name"
            required
          />
        </FloatingLabel>

        <FloatingLabel label="Mobile Phone Number" className="mb-3">
          <Form.Control
            id="Mobile"
            name="Mobile"
            type="tel"
            placeholder="Mobile Phone Number"
            required
          />
        </FloatingLabel>

        <FloatingLabel label="Email address" className="mb-3">
          <Form.Control
            id="Email"
            name="Email"
            type="email"
            placeholder="name@example.com"
            required
          />

          <Form.Text id="emailHelp" muted>
            We'll never share your email with anyone else.
          </Form.Text>
        </FloatingLabel>

        <h2 className="blacklabel">Payment method</h2>

        <Form.Check
          id="Payment1"
          name="Payment"
          type="radio"
          label="Internet banking"
          value="Internet banking"
          defaultChecked
          required
        />

        <Form.Check
          id="Payment2"
          name="Payment"
          type="radio"
          label="Credit card (3% surcharge applies)"
          value="Credit card"
        />

        <Form.Text id="WeightHelp" muted>
          We will contact you by phone for your credit card details.
        </Form.Text>

        <FloatingLabel label="Comments">
          <Form.Control
            id="Instructions"
            name="Instructions"
            as="textarea"
            placeholder="Any comments or special instructions?"
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <div className="TermsContainer">
          <Form.Check
            id="Terms"
            name="Terms"
            type="checkbox"
            label="I have read and agree to the "
            className="TermsCheckbox"
            value="Agreed to terms and conditions"
            required
          />

          <Button
            onClick={() => setShowTerms(true)}
            className="TermsModalBtn"
            variant="link"
          >
            Terms & Conditions
          </Button>
        </div>
        <input
          name="g-recaptcha-response"
          id="g-recaptcha-response"
          type="hidden"
          value="v1"
        />
        <button type="submit" className="btn btn-primary" id="submitBtn">
          Submit order
        </button>
      </Form>
      <ModalTerms show={showTerms} onHide={() => setShowTerms(false)} />
    </>
  )
}
