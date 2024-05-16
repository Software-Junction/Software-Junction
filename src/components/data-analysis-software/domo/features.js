import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Dashboard"},
    {"title": "Performance Metrics"},
    {"title": "Workflow Management"},
    {"title": "Data Visualization"},
    {"title": "Alerts/Notifications"},
    {"title": "Analytics"},
    {"title": "Real Time Reporting"},
    {"title": "Ad hoc Analysis"},
    {"title": "Visualization / Presentation"},
    {"title": "Data Management"},
    {"title": "Budgeting & Forecasting"},
    {"title": "Key Performance Indicators"},
    {"title": "Database Servers"},
    {"title": "Event Logs"},
    {"title": "User Activity Monitoring"},
    {"title": "Analytics / ROI Tracking"},
    {"title": "Ad hoc Query"},
    {"title": "Data Analysis"},
    {"title": "Performance Management"},
    {"title": "Event Triggered Actions"},
    {"title": "Rules-Based Workflow"},
    {"title": "Customizable Dashboard"},
    {"title": "Predictive Modeling"},
    {"title": "Data Security"}
];

const moreFeatures = [
  {"title": "Job Scheduling"},
  {"title": "Push Notifications"},
  {"title": "Report writers"},
  {"title": "Data Source Connectors"},
  {"title": "ETL - Extract / Transfer / Load"},
  {"title": "Data Modeling"},
  {"title": "Online Analytical Processing (OLAP)"},
  {"title": "Data Integration"},
  {"title": "Data Discovery"},
  {"title": "Data Blending"},
  {"title": "Access Controls/Permissions"},
  {"title": "Dashboard Creation"},
  {"title": "Financial Reports"},
  {"title": "Data Cleansing"},
  {"title": "Visual Analytics"},
  {"title": "Machine Learning"},
  {"title": "Filtered Views"},
  {"title": "Data Governance"},
  {"title": "Predictive Analytics"},
  {"title": "Data Collection"},
  {"title": "Reporting/Analytics"},
  {"title": "Functions / Calculations"},
  {"title": "Big Data Analytics"},
  {"title": "Data Source Integrations"},
  {"title": "OLAP"},
  {"title": "Access Request Management"},
  {"title": "Geocoding"},
  {"title": "Data Discovery"},
  {"title": "Application Development"},
  {"title": "For Mobile"},
  {"title": "Multi-Language"},
  {"title": "Approval Process Management"},
  {"title": "KPIs"},
  {"title": "Single Sign On"},
  {"title": "Chat"},
  {"title": "Functions / Calculations"},
  {"title": "Drag & Drop"},
  {"title": "Scheduled / Automated Reports"},
  {"title": "Filtered Views"},
  {"title": "Multi-Language"},
  {"title": "For Developers"},
  {"title": "Private Dashboards"},
  {"title": "Public Dashboards"},
  {"title": "User Level Management"},
  {"title": "Statistical Analysis"},
  {"title": "Scorecarding"},
  {"title": "Multifactor Authentication"},
  {"title": "Machine Learning"},
  {"title": "Extract transform and load (ETL)"}
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
