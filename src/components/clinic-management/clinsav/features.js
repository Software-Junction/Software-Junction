import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Alerts/Notifications"},
  {"title": "Data Security"},
  {"title": "Invoice Management"},
  {"title": "Case Management"},
  {"title": "Import/Export Data"},
  {"title": "Patient Records"},
  {"title": "Patient Scheduling"},
  {"title": "Mobile App"},
  {"title": "Receipt Management"},
  {"title": "Applications Management"},
  {"title": "Patient Billing"},
  {"title": "Inventory Tracking"},
  {"title": "Customizable invoices"},
  {"title": "Patient Registration"},
  {"title": "Patient Record Management"},
  {"title": "Patient Flow Management"},
  {"title": "Patient Monitoring"},
  {"title": "Inventory Optimization"},
  {"title": "Multi-User"},
  {"title": "E-Prescribing"},
  {"title": "Prescription Management"},
  {"title": "Appointment Scheduling"},
  {"title": "Patient Records Management"},
  {"title": "Cash Management"}
];

const moreFeatures = [
  {"title": "Real-time Scheduling"},
  {"title": "Online invoicing"},
  {"title": "Appointment Reminders"},
  {"title": "Clinical Alerts"},
  {"title": "Health Record Access"},
  {"title": "Data Backup Scheduling"},
  {"title": "Appointment scheduling and management"},
  {"title": "Ticket/Issue Tracking"},
  {"title": "Reminder customization based on appointment type"},
  {"title": "Appointment reminder history and logs"},
  {"title": "Payment Reminders"},
  {"title": "Appointment status tracking"},
  {"title": "Case Notes"},
  {"title": "Appointment follow-up messages or surveys"},
  {"title": "Medication History"},
  {"title": "Self Management"},
  {"title": "Patient Management"}
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
