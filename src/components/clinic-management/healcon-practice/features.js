import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Patient Registration"},
    {"title": "Practice Management"},
    {"title": "Document Management"},
    {"title": "Task Management"},
    {"title": "Appointment Management"},
    {"title": "E-Prescribing"},
    {"title": "Contact Management"},
    {"title": "Online Booking"},
    {"title": "Billing System"},
    {"title": "Workflow Management"},
    {"title": "Waiting Time Tracking"},
    {"title": "HIPAA Compliant"},
    {"title": "Electronic medical records"},
    {"title": "E/M Coding"},
    {"title": "Multi-Location"},
    {"title": "Real Time Reporting"},
    {"title": "Case Management"},
    {"title": "Charting"},
    {"title": "Application Security"},
    {"title": "Patient Flow Management"},
    {"title": "Billing & Invoicing"},
    {"title": "Video Chat"},
    {"title": "Email Management"},
    {"title": "Patient Portal"},
];

const moreFeatures = [
  {"title": "Patient Record Management"},
  {"title": "Doctor Schedule & Appointments"},
  {"title": "Physician Scheduling"},
  {"title": "Patient Billing"},
  {"title": "Patient Scheduling"},
  {"title": "Patient Appointments"},
  {"title": "Appointment Scheduling"},
  {"title": "Billing Management"},
  {"title": "Patient History Management"},
  {"title": "Dashboard"},
  {"title": "Appointment Reminders"},
  {"title": "Patient Medication"},
  {"title": "Calendar Management"},
  {"title": "EMR / EHR"},
  {"title": "Chat / Messaging"},
  {"title": "Patient History Records"},
  {"title": "Client Portal"},
  {"title": "Clinical Charting"},
  {"title": "Multi-Physician"},
  {"title": "Scheduling"},
  {"title": "Staff Management"},
  {"title": "Treatment Plans"},
  {"title": "Treatment Planning"},
  {"title": "Analytics"},
  {"title": "Communication Management"},
  {"title": "Manage Consultations"},
  {"title": "Appointment Confirmations"},
  {"title": "Health Record Access"},
  {"title": "Video Conferencing"},
  {"title": "Medical History Record"},
  {"title": "Usage Tracking"},
  {"title": "Recurring Appointments"},
  {"title": "Patient Records"},
  {"title": "Patient Account Management"},
  {"title": "Prescription Management"},
  {"title": "SMS Messaging"},
  {"title": "Manage Imaging and Diagnostics"},
  {"title": "Patient History Management"},
  {"title": "Vitals Tracking"},
  {"title": "Calendar management"},
  {"title": "Data Import / Export"},
  {"title": "Appointment Scheduling"},
  {"title": "Rescheduling"},
  {"title": "Payment Reminders"},
  {"title": "Analytical Reports"},
  {"title": "Mobile Access"},
  {"title": "Email Reminders"}
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

  const combinedFeatures = [...featuresData, ...moreFeatures];
  const filteredFeatures = combinedFeatures.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayFeatures = searchQuery
    ? filteredFeatures
    : isShowMore
    ? combinedFeatures
    : featuresData;

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

          {displayFeatures.map((feature, index) => (
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

          {/* {isShowMore && 
          <>
          {filteredMoreFeatures.map((featureM, index) => (
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
          } */}
          {!searchQuery && (
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
           )}
        </Row>
      </Container>
    </>
  );
};

export default Features;
