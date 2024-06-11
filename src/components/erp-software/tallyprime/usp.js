import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../tallyprime/tally.module.scss";

const uspData = [
  {
    "title": "Comprehensive Business Management",
    "content": "TallyPrime serves as an all-in-one solution, covering accounting, invoicing, inventory management, reports, and cash flow."
  },
  {
    "title": "User-Friendly Interface",
    "content": "TallyPrime boasts a simple and intuitive design, ensuring ease of use for both business owners and accountants."
  },
  {
    "title": "Optimized Cash Flow",
    "content": "Facilitates quick and efficient bills management, aiding in faster payments and cash flow optimization."
  },
  {
    "title": "Enhanced Efficiency",
    "content": "Speeds up tasks, allowing users to view reports during voucher entry and seamlessly switch between activities for improved efficiency."
  },
  {
    "title": "Tax Compliance Assurance",
    "content": "TallyPrime's mechanism ensures accurate books, from GST returns to reconciliation, instilling confidence in compliance."
  },
  {
    "title": "Reliable Data Security",
    "content": "TallyPrime ensures data safety even during unforeseen events like network disruptions or power failures."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of TallyPrime</h3>
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
