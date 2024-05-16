import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Touch Capability" },
  { "title": "Billing & Invoicing" },
  { "title": "Barcode Scanning" },
  { "title": "Prescription Management" },
  { "title": "Data Security & Accuracy" },
  { "title": "Stock Management" },
  { "title": "Document Printing" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "MIS Reports" },
  { "title": "Expiry and Near Expiry" },
  { "title": "Billing Management" },
  { "title": "Point of Sale (POS)" },
  { "title": "Inventory Management" },
  { "title": "Cash Management" },
  { "title": "Barcode Generation" },
  { "title": "CRM & Sales Dashboards" },
  { "title": "Schedule-H & Narcotics" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "Accounting" }
];




const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
          </Col>

          {featuresData.map((feature, index) => (
            <Col lg={3} className="mb-4" key={index}>
              <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                {" "}
                <h5>
                  <span style={{ color: "#FC5185 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {feature.title}
                </h5>
              </div>
            </Col>
          ))}

          {isShowMore && 
          <>
          {/* {moreFeatures.map((featureM, index) => (
            <Col lg={3} className="mb-4" key={index}>
              <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                {" "}
                <h5>
                  <span style={{ color: "#FC5185 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {featureM.title}
                </h5>
              </div>
            </Col>
          ))} */}
          </>
          }
          {/* <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Features;
