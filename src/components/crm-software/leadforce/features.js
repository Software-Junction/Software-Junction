import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Marketing Automation"},
    {"title": "Lead Assignment"},
    {"title": "Lead Segmentation"},
    {"title": "Content Management System"},
    {"title": "Import & Export Data"},
    {"title": "Pipeline Management"},
    {"title": "Lead Management"},
    {"title": "Appointment Management"},
    {"title": "CRM Analytics"},
    {"title": "Forecasting"},
    {"title": "Import/Export Data"},
    {"title": "CRM & Sales Reports"},
    {"title": "CRM & Sales Dashboards"},
    {"title": "IVR / Voice Recognition"},
    {"title": "Scheduling"},
    {"title": "Alerts/Notifications"},
    {"title": "Lead Distribution"},
    {"title": "Call Recording"},
    {"title": "Lead Verification"},
    {"title": "CRM"},
    {"title": "CRM integration"},
    {"title": "Content Scheduling"},
    {"title": "For Real Estate"},
    {"title": "For Sales"}
];

const moreFeatures = [
  {"title": "Internal Chat Integration"},
  {"title": "For Sales / Marketing"},
  {"title": "Lead Notifications"},
  {"title": "Calendar Sync"},
  {"title": "Content Management"},
  {"title": "Search/Filter"},
  {"title": "Allocation"},
  {"title": "Call List Management"},
  {"title": "For Brokers"},
  {"title": "For Hospitality"},
  {"title": "For Offices"},
  {"title": "Deal Management"},
  {"title": "For Field Service"},
  {"title": "For Retail"},
  {"title": "Document Imaging"},
  {"title": "Funnels"},
  {"title": "Import / Export Management"},
  {"title": "Import/Export Management"},
  {"title": "Search"}
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
