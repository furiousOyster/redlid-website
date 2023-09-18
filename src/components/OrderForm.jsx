import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import ModalTerms from './ModalTerms'

const CYCLES = {
  Weekly: 'Weekly',
  TwoWeekly: 'TwoWeekly',
  FourWeekly: 'FourWeekly',
  EightWeekly: 'EightWeekly',
  OneOff: 'OneOff',
}

const BagsCycles = () => (
  <>
    <Form.Check
      label="Weekly (Hamilton only) - $20 per collection"
      name="PickupCycle"
      type="radio"
      id={CYCLES.Weekly}
      value={CYCLES.Weekly}
      defaultChecked
      required
    />

    <Form.Check
      label="2-Weekly - $24 per collection"
      name="PickupCycle"
      type="radio"
      id={CYCLES.TwoWeekly}
      value={CYCLES.TwoWeekly}
    />
    <Form.Check
      label="4-Weekly - $28 per collection"
      name="PickupCycle"
      type="radio"
      id={CYCLES.FourWeekly}
      value={CYCLES.FourWeekly}
    />
    <Form.Check
      label="One-off (Collection within 4 weeks of dropoff) - $45"
      name="PickupCycle"
      type="radio"
      id={CYCLES.OneOff}
      value={CYCLES.OneOff}
    />
  </>
)

const BinsCycles = () => (
  <>
    <Form.Check
      label="Weekly (Hamilton only) - $8.50 per collection"
      name="PickupCycle"
      type="radio"
      id={CYCLES.Weekly}
      value={CYCLES.Weekly}
      defaultChecked
    />

    <Form.Check
      label="2-Weekly - $12 per collection"
      name="PickupCycle"
      type="radio"
      id={CYCLES.TwoWeekly}
      value={CYCLES.TwoWeekly}
    />
    <Form.Check
      label="4-Weekly - $18 per collection"
      name="PickupCycle"
      type="radio"
      id={CYCLES.FourWeekly}
      value={CYCLES.FourWeekly}
    />
    <Form.Check
      label="8-Weekly - $25 per collection"
      name="PickupCycle"
      type="radio"
      id={CYCLES.EightWeekly}
      value={CYCLES.EightWeekly}
    />
    <Form.Check
      label="One-off (I have my own bin) - $28"
      name="PickupCycle"
      type="radio"
      id={CYCLES.OneOff}
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
  return (
    <>
      <Form
        action="https://redlid-orders.herokuapp.com/submitOrder/"
        method="post"
        encType="json"
      >
        <FloatingLabel
          controlId="floatingInput"
          label="Enter your address"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Enter your address" />
        </FloatingLabel>

        <h2 className="blacklabel">Choose pickup cycle</h2>

        <Cycles />

        <FloatingLabel
          id="fullName"
          controlId="floatingInput"
          label="Enter your full name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Your name" />
        </FloatingLabel>

        <FloatingLabel
          id="phone"
          controlId="floatingInput"
          label="Phone number"
          className="mb-3"
        >
          <Form.Control type="phone" placeholder="Phone number" />
        </FloatingLabel>

        <FloatingLabel
          id="email"
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
          aria-describedby="emailHelp"
        >
          <Form.Control type="email" placeholder="name@example.com" />

          <Form.Text id="emailHelp" muted>
            We'll never share your email with anyone else.
          </Form.Text>
        </FloatingLabel>

        <h2 className="blacklabel">Payment method</h2>

        <Form.Check
          label="Internet banking"
          name="PaymentMethod"
          type="radio"
          id="InternetBanking"
          defaultChecked
        />

        <Form.Check
          label="Credit card (3% surcharge applies)"
          name="PaymentMethod"
          type="radio"
          id="CreditCard"
        />

        <Form.Text id="WeightHelp" muted>
          We will contact you by phone for your credit card details.
        </Form.Text>

        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Any comments or special instructions?"
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <div className="TermsContainer">
          <Form.Check
            type="checkbox"
            label="I have read and agree to the "
            className="TermsCheckbox"
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
        <p className="msg-error error"></p>
        <button type="submit" className="btn btn-primary" id="submitBtn">
          Submit order
        </button>
      </Form>
      <ModalTerms show={showTerms} onHide={() => setShowTerms(false)} />
    </>
  )
}
