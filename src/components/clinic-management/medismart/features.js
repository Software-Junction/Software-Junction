import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Billing & Invoicing" },
  { "title": "Patient Records Management" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Appointment Management" },
  { "title": "Doctor Schedule & Appointments" },
  { "title": "Electronic medical records" },
  { "title": "Inventory control" },
  { "title": "Referral Management" },
  { "title": "Patient Registration" },
  { "title": "Accident & Emergency Care" },
  { "title": "In-patient Management System" },
  { "title": "Blood Bank Management System" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "PACS Support" },
  { "title": "Purchase" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Hospital Support Function System" },
  { "title": "System Administration Functions" },
  { "title": "Pharmacy with Inventory" },
  { "title": "System Security & Software Management" },
  { "title": "Billing System" },
  { "title": "Medical Equipment Maintenance" },
  { "title": "Bed Management" },
  { "title": "Accounting Management" },
  { "title": "Out-Patient Management" }
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
