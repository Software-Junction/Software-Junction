import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Referral Management" },
  { "title": "Diagnostic Management" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Staff Payroll System" },
  { "title": "Purchase" },
  { "title": "Day Care Management System" },
  { "title": "Patient Registration" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Billing System" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "Procedure Management" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Blood Bank Management System" },
  { "title": "Lab Information System" },
  { "title": "PACS Support" },
  { "title": "System Administration Functions" },
  { "title": "Hospital Support Function System" },
  { "title": "Medical Equipment Maintenance" },
  { "title": "Pharmacy with Inventory" }
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
