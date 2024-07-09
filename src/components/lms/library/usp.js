import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../library/liry.module.scss";

const uspData = [
  {
    "title": "No Nightmares - Easy Implementation",
    "content": "The mention of \"no nightmares\" emphasizes the simplicity and ease of implementing LibraryWorld. It suggests that libraries won't encounter the typical challenges and complications often associated with adopting new software, hardware, or networking solutions."
  },
  {
    "title": "Full Range of Library Applications",
    "content": "LibraryWorld provides an extensive suite of applications covering various aspects of library management. These include Catalog, Patron Management, Circulation, Serials Tracking, Inventory, Reports, Online Patron Access, and Mobile features. Importantly, these applications are bundled into all service plans, offering comprehensive functionality without additional costs."
  },
  {
    "title": "Trial Version with Full Features",
    "content": "The trial version is a standout feature. It allows libraries to explore the full range of features available in the production system without any restrictions. This ensures that potential users can thoroughly evaluate the service and determine its suitability for their specific needs."
  },
  {
    "title": "Thousands of Satisfied Libraries",
    "content": "By highlighting that thousands of libraries are already using LibraryWorld, the service builds credibility and trust. It suggests that the platform has a proven track record of success and is a trusted choice for a wide range of libraries."
  },
  {
    "title": "Simplified 30-Day Free Trial",
    "content": "<span style=\"color:#f95738 ;\"><strong>The 30-day</strong></span> free trial is presented as a straightforward way for libraries to experience the benefits of LibraryWorld without any commitment. This approach indicates a high level of confidence in the product and a commitment to customer satisfaction."
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
            <h3 className="mb-3">USP of LibraryWorld</h3>
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
