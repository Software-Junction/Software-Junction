import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../zoho-invoices/zoho-invoices.module.scss";

const uspData = [
  {
    title: "E-Invoicing Capability",
    content:
      "Directly upload invoices to the Invoice Registration Portal (IRP) for compliance and efficiency.",
  },
  {
    title: "Multiple Payment Methods",
    content:
      "Support for various payment options, catering to diverse customer preferences.",
  },
  {
    title: "Invoice Approval and Credit Notes",
    content:
      "Verify transactions before invoicing and handle returns/refunds with credit notes.",
  },
  {
    title: "Security and Compliance",
    content:
      "Emphasis on data security and compliance with ISO and GDPR standards.",
  },
  {
    title: "Wide Range of Features",
    content:
      "Comprehensive set of features covering invoicing, project management, expenses, banking, inventory, and more.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Zoho Invoices</h3>
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
