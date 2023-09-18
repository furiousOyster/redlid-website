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
        <Modal.Title>Frequently Asked Questions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>What can we put in the bin and bag?</h3>
        <p>Anything organic.</p>
        <h3>Is there any contract that needs to be signed?</h3>
        <p>
          No contracts to sign, just the initial $60 payment required before the
          first collection, you are required to use up the $60 payment before
          you can cancel the service.
        </p>
        <h3>Can we change our collection cycle/frequency?</h3>
        <p>
          You can change your collection cycle / frequency at any time by
          contacting the office.
        </p>
        <h3>Can you take extra rubbish?</h3>
        <p>
          yes we can take extra rubbish, we can provide a garden bag for you as
          we are not able to take loose material.
        </p>
        <h3>Is the green waste recycled?</h3>
        <p>
          100% of the green waste collected is recycled into different by-
          products.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
