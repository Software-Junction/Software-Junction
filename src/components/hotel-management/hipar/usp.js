import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../hipar/hipar.module.scss";

const uspData = [
  {
    "title": "Smarter, Faster, and Easier Transactions",
    "content": "Hipar is designed to enhance transaction processes, making them smarter, faster, and easier. This not only saves time for hotel staff but also contributes to overall productivity."
  },
  {
    "title": "24x7 Connectivity",
    "content": "The software ensures constant connectivity with users through <span style=\"color:#f95738 ;\"><strong>24x7</strong></span> support via email and phone. This commitment to availability helps address any issues promptly and keeps operations running smoothly."
  },
  {
    "title": "Comprehensive Module Coverage",
    "content": "Hipar covers a range of essential modules, including Front Office, Housekeeping, Restaurant/POS, Banquet Hall, Inventory, Accounts, and Room Service. This comprehensiveness ensures that all aspects of hotel management are efficiently addressed within a single software platform."
  },
  {
    "title": "User-Friendly Interface with Thoughtful Details",
    "content": "Hipar prioritizes a user-friendly interface, incorporating thoughtful details that enhance the overall user experience. This focus on usability contributes to higher productivity and, ultimately, greater profitability for hotel businesses."
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
            <h3 className="mb-3">USP of Hipar</h3>
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
