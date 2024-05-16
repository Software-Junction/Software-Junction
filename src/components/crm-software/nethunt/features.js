import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Contact Manager"},
  {"title": "Email Templates"},
  {"title": "Sales Tracking"},
  {"title": "Sales Force Automation"},
  {"title": "Customer Support"},
  {"title": "Opportunity Management"},
  {"title": "Lead Generation"},
  {"title": "Case Management"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "CRM Analytics"},
  {"title": "Mass Email"},
  {"title": "Sales Forecasting"},
  {"title": "Mobile App"},
  {"title": "Lead Management"},
  {"title": "CRM & Sales Reports"},
  {"title": "Email Integration"},
  {"title": "Customer Management"},
  {"title": "Developer API"},
  {"title": "Customer DataBase"},
  {"title": "Field Sales Management"}
];

const moreFeatures = [
  {"title": "Lead Scoring"},
  {"title": "Client Management"},
  {"title": "Lead Nurturing"},
  {"title": "Campaign Segmentation"},
  {"title": "Sales Management"},
  {"title": "Call Logging"},
  {"title": "Access control"},
  {"title": "Dashboard"},
  {"title": "Import & Export Data"},
  {"title": "Campaign Management"},
  {"title": "Contract Management"},
  {"title": "Workflow Management"},
  {"title": "Collaboration"},
  {"title": "Data Management"},
  {"title": "Document Storage"},
  {"title": "Contact Database"},
  {"title": "Sales Dashboards & Reports"},
  {"title": "Templates"},
  {"title": "Mobile Access"},
  {"title": "Forecasting"},
  {"title": "Team Management"},
  {"title": "List Management"},
  {"title": "Reporting"},
  {"title": "Client database"},
  {"title": "Email Marketing"},
  {"title": "Lead Segmentation"},
  {"title": "Campaign Analysis"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Customization"},
  {"title": "Audience Targeting"},
  {"title": "Customer Segmentation"},
  {"title": "Search"},
  {"title": "Access Controls/Permissions"},
  {"title": "Sales Reports"},
  {"title": "Import / Export Management"},
  {"title": "Report Export"},
  {"title": "Campaign Personalization"},
  {"title": "Customer Profiles"},
  {"title": "Personalization"},
  {"title": "Account Based Marketing"},
  {"title": "Action Item Tracking"},
  {"title": "Case Notes"},
  {"title": "Contractor Database"},
  {"title": "Audience Segmentation"},
  {"title": "Contact Import/Export"},
  {"title": "Calendar Sync"},
  {"title": "Customer Targeting"},
  {"title": "Aggregate Reports"},
  {"title": "1-click installationWorks with GoogleApps"},
  {"title": "Client Tracking"},
  {"title": "Canned Responses"},
  {"title": "Client database"},
  {"title": "Mailing list management"}
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
