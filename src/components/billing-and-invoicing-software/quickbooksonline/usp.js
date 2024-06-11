import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../quickbooksonline/quickbooksonline.module.scss";

const uspData = [
  {
    title: "HSN & SAC Lookup",
    content:
      'Simplify product and service categorization with easy addition of HSN/SAC codes.',
  },
  {
    title: "Automatic Tax Rate Calculation",
    content:
      "QuickBooks identifies GST rates automatically, streamlining tax calculations.",
  },
  {
    title: "Integration with Popular Apps",
    content:
      "Save time with seamless integration with hundreds of third-party applications.",
  },
  {
    title: "Input Tax Credits (ITC)",
    content: "Easily track and reconcile ITC through GSTR reports.",
  },
  {
    title: "Professional Support for CA & Bookkeepers",
    content:
      "Chartered accountants and bookkeepers can effortlessly handle GST return filing, generate reports, and create professional invoices with QuickBooks.",
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
            <h3 className="mb-3">USP of QuickBooks Online</h3>
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
