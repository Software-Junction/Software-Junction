import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3> My Bill Book FAQ</h3>
          </Col>
          <Col lg={6}>
            <div
              className={`${styles["faq-box"]} box bg-light  rounded-4 p-4 mt-3`}
            >
              <h5>
                Can I generate unlimited invoices as a subscriber of myBillBook
                ?
              </h5>
              <p>
                Yes, as a subscriber, the user can generate unlimited invoices
                on myBillBook.
              </p>
              <h5>Can you personalise GST bills on myBillBook ?</h5>
              <p>
                Yes, you can personalise your invoice with your company's logo,
                watermark, brand elements and other 50+ invoice settings with
                myBillBook.
              </p>
              <h5>Is my business data secure on myBillBook ?</h5>
              <p>
                Customer data is encrypted, and myBillBook is an ISO-certified
                application, which demonstrates our compliance to Information
                security standards & safeguarding customer data.
              </p>
              <h5>
                Does myBillBook provide customer support and training for new
                users ?
              </h5>
              <p>
                Yes, our dedicated support & product specialists provide all the
                support and training to our customers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
