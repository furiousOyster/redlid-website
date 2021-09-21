import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

export default () => {
  return (
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Frequent questions
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3>What can we put in the bin and bag?</h3>
            <p>Anything organic.</p>
            <h3>Is there any contract that needs to be signed?</h3>
            <p>
              No contracts to sign, just the initial $60 payment required before
              the first collection, you are required to use up the $60 payment
              before you can cancel the service.
            </p>
            <h3>Can we change our collection cycle/frequency?</h3>
            <p>
              You can change your collection cycle / frequency at any time by
              contacting the office.
            </p>
            <h3>Can you take extra rubbish?</h3>
            <p>
              yes we can take extra rubbish, we can provide a garden bag for you
              as we are not able to take loose material.
            </p>
            <h3>Is the green waste recycled?</h3>
            <p>
              100% of the green waste collected is recycled into different by-
              products.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
