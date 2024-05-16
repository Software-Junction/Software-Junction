import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Accident & Emergency Care" },
  { "title": "Appointment Management" },
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Blood Bank Management System" },
  { "title": "Client Management & Credit Control" },
  { "title": "Day Care Management System" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Doctor Schedule & Appointments" },
  { "title": "Electronic medical records" },
  { "title": "Expense Management" },
  { "title": "Hospital Support Function System" },
  { "title": "In-patient Management System" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Inventory control" },
  { "title": "Lab Information System" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "PACS Support" },
  { "title": "Patient Registration" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Procedure Management" },
  { "title": "Purchase" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "Referral Management" },
  { "title": "System Administration Functions" }
];

const moreFeatures = [
  { "title": "Bed Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Billing System" },
  { "title": "Diagnostic Management" },
  { "title": "HRM" },
  { "title": "Marketing Control System" },
  { "title": "Medical Equipment Maintenance" },
  { "title": "Out-Patient Management" },
  { "title": "Patient Discharge" },
  { "title": "Patient Records Management" },
  { "title": "Patient Transfer" },
  { "title": "Pharmacy with Inventory" },
  { "title": "Physician Management" },
  { "title": "Revenue Management" },
  { "title": "Staff Payroll System" },
  { "title": "System Security & Software Management" }
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
          {moreFeatures.map((featureM, index) => (
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
          ))}
          </>
          }
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
