import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../quickbill/quick.module.scss";

const uspData = [
  {
    "title": "Scalable Business Solution",
    "content": "QuickBill caters to businesses of all sizes, from small enterprises to large chains. Its scalability ensures that it can adapt and grow with the evolving needs of businesses at any stage."
  },
  {
    "title": "Rapid Implementation",
    "content": "QuickBill stands out for its quick and easy implementation process. Businesses can swiftly integrate the software into their operations, allowing them to experience the benefits without unnecessary delays."
  },
  {
    "title": "GST Compliance and Reporting",
    "content": "QuickBill is designed to meet the specific needs of businesses in terms of accounting and GST compliance. It offers secure and straightforward GST reporting, making it an ideal choice for businesses navigating complex tax regulations."
  },
  {
    "title": "Versatile Billing Software",
    "content": "QuickBill is more than just a billing software; it encompasses features such as barcode design, inventory management, and various pay modes. This versatility makes it a comprehensive solution for businesses looking to optimize their billing and operational processes."
  },
  {
    "title": "Credit Management",
    "content": "QuickBill offers robust credit sales management features, including credit notes for sales returns. This is particularly advantageous for businesses engaged in credit transactions, providing them with effective tools for managing credit sales and returns."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of QuickBill</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
