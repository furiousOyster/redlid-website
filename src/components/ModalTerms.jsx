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
        <Modal.Title>Bins & Bags Terms and conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Here is everything you need to know about purchasing and using our
          residential Green Waste collection services ordered through our
          website or in person.*
        </p>
        <h3>1.    Making orders</h3>
        <p>
          When you place an order with us, you agree to use our services on a
          regular, ongoing basis until you cancel in accordance with clause 6. 
          You will need an email address that you check regularly, as this is
          the preferred option for communication.
        </p>
        <h3>2.    Delivering your Bin or Bag</h3>
        <p>
          We will deliver your garden Bin or Bag on the next working day that we
          are in your suburb.
        </p>
        <h3>3.    Scheduled collections</h3>
        <p>
          We will empty your Bin or Bag on the scheduled collection date &amp;
          cycle that has been approved by you either by phone, email or through
          our website, unless we have notified you in advance that the date has changed. 
          Where your scheduled collection falls on a public holiday your collection 
          day may change, your previous invoice will have a change of collection day.
        </p>
        <p>
          Our missed or delayed collection policy is as follows:<br/>
          <b>8 Weekly collection cycle</b> no missed or delayed collections without charge<br/>
          <b>4 Weekly collection cycle</b> 1 missed or delayed collections per calendar year without charge<br/>
          <b>2 Weekly collection cycle</b> 2 missed or delayed collections per calendar year without charge<br/>
          <b>1 Weekly collection cycle</b> 4 missed collection per calendar year without charge<br/>
        </p>
        <p>
          If you are wanting to use a free missed collection you need to contact the office by phone or
          email at least 24 hours prior to the next scheduled collection.
        </p>
        <p>
          You can change your collection frequency at anytime by contacting the
          office.
        </p>
        <h3>4.    Charges</h3>
        <p>
          Our price is determined by the service address you provided to us, so
          any change to your address may result in a different price being
          charged. Our prices include GST. We can also remove Christmas trees plus extra 
          side rubbish at an additional fee.  Extra side rubbish must be contained in a bag or a bin.
          No loose material will be taken.
        </p>
        <h3>5.    Payment</h3>
        <p>
          After you receive your Bin or Bag a $60 payment is required before the
          first collection, this advance payment goes onto your account and your
          collection charges are deducted from it, once you have used your $60,
          simply pay a further $60. Payments can be made by credit card, 
          internet banking or automatic payment.
        </p>
        <h3>6.    Cancelling your service</h3>
        <p>
          You can end your service at any time via email or phone message after
          the initial $60 has been used. We will keep emptying your Bin or Bag
          until your prepaid period expires. No refund will be given if the
          service is cancelled before the $60 advance payment has been used.
        </p>
        <p>
          On cancellation you agree to allow us access to the property for the
          purpose of collecting and removing our Bin or Bag.
        </p>
        <p>
          A cancellation charge will apply on the day the garden bin or bag is removed.
          This applies even if the bin or bag is empty on removal.
        </p>
        <h3>7.    No access policy</h3>
        <p>
          If we are not able to collect/empty your Bin or Bag due to restricted
          access for example Bin or Bag is behind locked gates, dogs are running
          free or a vehicle is blocking access, please email or phone the office
          and we will collect the Bin or Bag on the next day we are in your area
          at no extra charge.  You are allowed 1 collection in lieu per year 
          otherwise a full collection charge will apply. 
          Your following collection date will remain the same.
        </p>
        <h3>8.    Using and looking after your Garden Waste Bin or Bag</h3>
        <p>Please DO:</p>
        <ol>
          <li>Put your Bin out by 7am on the day of your collection.</li>
          <li>
            Place your Bin on the grass verge or berm closest to where our
            collection vehicle passes, so the wheels are closest to your house
            and the lid is closest to the road. Make sure the bin is clear of
            trees and other obstructions like parked cars or street light poles.
          </li>
          <li>
            Contain all the waste inside your Bin or Bag without letting it
            spill over, and ensure the lid is closed on the Bin or not over the
            top of the frame of the garden Bag.
          </li>
          <li>
            Ensure your Garden Waste Bin or Bag contains approved organic waste
            as outlined in clause 9 below. If your Bin is not out for collection
            on your scheduled collection day, our drivers will enter your
            property to collect it if they can gain access.  Drivers will do this
            as an occasional courtesy, not as part of regular service. If you DO NOT want
            us to enter your property please notify us by email or phone, the
            collection charge will remain.
          </li>
        </ol>
        <p>Please do NOT:</p>
        <ol>
          <li>Light fires or place hot embers or hot ash in the Bin or Bag.</li>
          <li>
            Put any liquids or explosive, toxic, dangerous, hazardous or noxious
            materials in the Bin or Bag. This includes materials like asbestos,
            acids, solvents, paints, unwrapped broken glass, minerals, grease or
            cooking oil, or concrete.
          </li>
          <li>Fill the bin to overflowing.</li>
        </ol>
        <h3>9.    Garden Waste</h3>
        <p>
          Please ensure your Garden Waste bin only contains approved organic
          waste.  We cannot accept, sand, grass sods, dirt or soil, rocks,
          household rubbish, newspaper, old compost, stumps or branches bigger
          than 100mm in diameter in the Garden Waste Bin or Bag. Bins or Bags
          containing any forbidden material will not be taken as this cannot be
          composted successfully. An additional charge will apply if forbidden
          material is found in the Bin or Bag.
        </p>
        <p>
          You can order extra collections in addition to your scheduled
          collections by contacting us in advance. These extra collections will
          be charged for at the rates applicable at the time. You will be
          informed of the scheduled date for extra collections in your area when
          you contact us.
        </p>
        <h3>10.    Bin &amp; Bag Placement</h3>
        <p>
          Please ensure the Garden Waste Bin or Bag is NOT in a difficult
          position such as steep driveways, narrow access ways and steps that
          may impede the driver&rsquo;s ability to empty the Bin or Bag,
          resulting in a non-service. Unlock gates and tie up or secure dogs
          away from the Bin or Bag location.
        </p>
        <p>
          We reserve the right to refuse our collection service to any property
          where the site is deemed by us to be unsafe.
        </p>
        <h3>11.    Liability</h3>
        <p>
          You will be liable to us for any damage to our Bin or Bag whilst in
          your possession, fair wear and tear excluded, and for any liability we
          incur as a result of you not complying with these terms.
        </p>
        <h3>12.    Making changes</h3>
        <p>
          <strong>Changes to Terms</strong>
        </p>
        <p>
          From time to time we may need to change these terms, including adding
          new ones. We want to make sure we&rsquo;re acting reasonably and in
          good faith. If any changes we make could have a detrimental impact on
          you, we will give you at least 28 days&rsquo; notice of the change. 
          Continuing to use our services after being
          notified in this way indicates you accept the changes. If you do not
          agree to the changes, you have the right to terminate this agreement.
        </p>
        <p>
          <strong>Changes to Charges</strong>
        </p>
        <p>
          We may change our prices from time to time. When we increase the
          prices for your services we will give you 28 days&rsquo; notice.
        </p>
        <p>
          <strong>Changes to Services</strong>
        </p>
        <p>
          We may change our services from time to time. If the change is within
          our control, we will provide you 28 days&rsquo; notice of such
          alterations.
        </p>
        <h3>13.    Privacy</h3>
        <p>
          You authorise us to collect, keep and use personal information you
          provide to us to process payment for our services, or for any other
          purpose that you authorise. We comply with the Privacy Act 1993, and
          you have the right to access and correct any personal information we
          hold about you (there may be a reasonable charge for this).
        </p>
        <p>
          * In these Terms, "us" &ldquo;our&rdquo; or "we" means Red Lid Garden
          Bins &amp; Bags Ltd (the owner of this website), and &ldquo;you&rdquo;
          means our customer, who purchases services from us on this website.
        </p>
        <h3>14. Recovering Collection Costs</h3>
        <p>
          In the event where your account goes into arrears due to non-payment
          and is referred to a collection agency and/or law firm, you will be
          liable for a 25% plus gst recovery fee which will be incurred as if
          the debt is collected in full, including legal demand costs.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
