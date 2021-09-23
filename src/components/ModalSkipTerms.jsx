import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

export default ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Terms and conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Thank you for choosing Red Lid Skips and supporting a family owned and
          operated business. To ensure efficient and safe service, the following
          terms and conditions apply:
        </p>
        <p>
          Standard hire of skips can be up to 5 days. If you would like the skip
          longer, please contact the office and subject to availability it can
          be arranged at a cost of $20 extra per day.
        </p>
        <p>Payment of skip Hire is to be paid prior to delivery of the skip</p>
        <p>
          In our General skips we do not accept concrete, soil, bricks, rocks,
          old compost, chemicals like asbestos, paints, batteries, oil and no
          car engines or tyres (removed only by prior arrangement). If asbestos
          is found in the skip it will immediately be returned to you, any costs
          associated with the return will be charged for.
        </p>
        <p>A Hardfill skip must not contain any General Waste.</p>
        <p>A General Waste skip must not contain any Hardfill.</p>
        <p>
          If any General or Hardfill is to be found in with the Green Waste skip
          then the General Waste price will apply.
        </p>
        <p>
          There are weight allowances on all Skips, please refer to your booking
          or ask the office for the weight allowance on your skip.  For health
          and safety reasons, the skip must not be overfull.  If the weight
          limit is exceeded you agree to pay the extra $0.15c per kg if deemed
          necessary by Red Lid Skips.
        </p>
        <p>
          We use a 9m skip with a line that indicates the 6m level.  This means
          that if you have ordered a 6 m skip you can only load the skip to the
          6m level.  If you would like to use up to the 9m, then you can do so
          and the additional cost will apply for the 9m skip. 
        </p>
        <p>
          In Hardfill skips there must be only concrete or soil etc. No rubbish
          whatsoever is permitted in these skips.
        </p>
        <p>
          ONLY FILL to the top rim of the skip or to your ordered bin size fill
          line mark. Any overfill may be left behind or charged at our going
          rate per cubic metre.  Due to Transport Safety requirements do not
          load skips above the agreed level.
        </p>
        <p>
          Damage to skips delivered in good condition, during the term of hire,
          is at the customer&rsquo;s expense.
        </p>
        <p>
          Placement of the skip is at the driver&rsquo;s discretion, even though
          we will try our best to position the skip for easy loading for you.
          This is due to our Public Liability requirements via our Insurance
          Company.
        </p>
        <p>
          Permits- permits for the placement of a skip on the roadway are to be
          sourced by the customer.
        </p>
        <p>
          Skips are not to be moved from the delivery position and access must
          be maintained to allow safe collection of the skip. Failure to comply
          will incur an additional $100 call out fee. The Hirer is responsible
          for any costs to relocate the skip to a position that we can recover
          the skip with our truck.
        </p>
        <p>No fires are to be lit in our skips.</p>
        <p>
          The Hirer is responsible for the skip once the skip has been
          delivered. <br />
          Refund Policy- For a cancelled order we require at least 24-hours
          notice. Once the skip has been delivered there will be no refund.
        </p>
        <p>
          Any breach of these terms and conditions will result in additional
          charges.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
