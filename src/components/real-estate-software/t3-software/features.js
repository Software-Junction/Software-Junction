import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Project Management" },
  { title: "Lead Management" },
  { title: "Customer Support" },
  { title: "CRM & Sales Reports" },
  { title: "Survey Management" },
  { title: "Workflow Management" },
  { title: "Lead Generation" },
  { title: "Marketing Automation" },
  { title: "Accounting" },
  { title: "Supplier and Purchase Order Management" },
  { title: "CRM & Sales Dashboards" },
  { title: "Case Management" },
  { title: "Email Marketing / SMS Marketing" },
  { title: "Inventory Management" },
  { title: "Proposal Management" },
  { title: "Opportunity Management" },
  { title: "Territory Management" },
  { title: "Invoice" },
  { title: "List Management" },
  { title: "Landing Pages" },
  { title: "Lead Scoring" },
];

// const moreFeatures = [
//   { "title": "Hourly Employee Tracking" },
//   { "title": "Sales Reports" },
//   { "title": "Data Protection" },
//   { "title": "Lease Management" },
//   { "title": "Real Time Tracking" },
//   { "title": "Web And Mobile Notification" },
//   { "title": "Bid Management" },
//   { "title": "Quality Control" },
//   { "title": "Cost Tracking" },
//   { "title": "Customizable Templates" },
//   { "title": "Costing" },
//   { "title": "Customizable Reporting" },
//   { "title": "Online Payment Processing" },
//   { "title": "Financial Reporting" },
//   { "title": "Labor Cost Calculator" },
//   { "title": "Member Portal" },
//   { "title": "Data Backup and Restore" },
//   { "title": "HR Management" },
//   { "title": "Historical Database" },
//   { "title": "Rate Management" },
//   { "title": "Construction Breakdowns" },
//   { "title": "RFP Management" },
//   { "title": "Service Management" },
//   { "title": "Real time data" },
//   { "title": "Email/SMS Integration" },
//   { "title": "Customer Portal" },
//   { "title": "Project Tracking" },
//   { "title": "Account Management" },
//   { "title": "Brokerage Management" },
//   { "title": "Purchase Order Management" },
//   { "title": "Sales Management" },
//   { "title": "Material Management" },
//   { "title": "Cost-to-Completion Tracking" },
//   { "title": "Data Migration" },
//   { "title": "Reporting" },
//   { "title": "GST Ready" },
//   { "title": "Material Requirement Planning" },
//   { "title": "Equipment Tracking" },
//   { "title": "Workflow Management" },
//   { "title": "Cash Flow Analysis" },
//   { "title": "Human Resources Management System" },
//   { "title": "Import & Export Data" },
//   { "title": "Hourly Employee Tracking" }
// ];

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
                  <span style={{ color: "#f95738 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {feature.title}
                </h5>
              </div>
            </Col>
          ))}

          {isShowMore && (
            <>
              {/* {moreFeatures.map((featureM, index) => (
            <Col lg={3} className="mb-4" key={index}>
              <div className="box h-100 shadow border rounded-4 p-4 bg-light">
                {" "}
                <h5>
                  <span style={{ color: "#f95738 " }}>
                    <FaCheck />
                  </span>
                  &nbsp; {featureM.title}
                </h5>
              </div>
            </Col>
          ))} */}
            </>
          )}
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
