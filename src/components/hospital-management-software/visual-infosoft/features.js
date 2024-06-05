import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Billing & Invoicing" },
  { "title": "Medical Equipment Maintenance" },
  { "title": "Doctor Schedule & Appointments" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Hospital Support Function System" },
  { "title": "Patient Registration" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "Procedure Management" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Diagnostic Management" },
  { "title": "Inventory control" },
  { "title": "Blood Bank Management System" },
  { "title": "Patient Records Management" },
  { "title": "Out-Patient Management" },
  { "title": "Accident & Emergency Care" },
  { "title": "System Security & Software Management" },
  { "title": "Accounting Management" },
  { "title": "Billing System" },
  { "title": "Purchase" },
  { "title": "PACS Support" },
  { "title": "Electronic medical records" },
  { "title": "Bed Management" },
  { "title": "Pharmacy with Inventory" },
  { "title": "Staff Payroll System" },
  { "title": "In-patient Management System" },
  { "title": "Appointment Management" }
];



const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFeatures = featuresData.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
            <Form>
              <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search Features..."
              value={searchQuery}
              onChange={handleSearch}
              className="mb-4"
            />
            </Form.Group>
            </Form>
          </Col>

          {filteredFeatures.map((feature, index) => (
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
