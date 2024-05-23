import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Pharmacy Information System (Drugs Opticals)" },
  { "title": "Accident & Emergency Care" },
  { "title": "Day Care Management System" },
  { "title": "Purchase" },
  { "title": "Client Management & Credit Control" },
  { "title": "Billing System" },
  { "title": "PACS Support" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "Bed Management" },
  { "title": "In-patient Management System" },
  { "title": "Blood Bank Management System" },
  { "title": "Appointment Management" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Doctor Schedule & Appointments" },
  { "title": "Lab Information System" },
  { "title": "Procedure Management" },
  { "title": "Electronic medical records" },
  { "title": "Pharmacy Information System (Drugs Opticals)" },
  { "title": "Patient Records Management" },
  { "title": "Physician Management" }
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
