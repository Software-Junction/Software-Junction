import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Performance Management"},
    {"title": "Marketing Collateral"},
    {"title": "Attendance management"},
    {"title": "Mobile App"},
    {"title": "Event Management"},
    {"title": "Call Routing"},
    {"title": "Lead Management"},
    {"title": "Customer Support"},
    {"title": "CRM Analytics"},
    {"title": "CRM"},
    {"title": "Expense Management"},
    {"title": "Email Templates"},
    {"title": "Asset Management"},
    {"title": "Email Marketing / SMS Marketing"},
    {"title": "Catalog Management"},
    {"title": "CRM & Sales Reports"},
    {"title": "CRM integration"},
    {"title": "Appointment Management"},
    {"title": "CRM & Sales Dashboards"},
    {"title": "Marketing Automation"},
    {"title": "Mass Email"},
    {"title": "Call Recording"},
    {"title": "Lead Enrichment"},
    {"title": "Contact Management"}
];

const moreFeatures = [
  {"title": "Sales coaching and training"},
  {"title": "Account Alerts"},
  {"title": "Call List Management"},
  {"title": "Call Hunting & Routing"},
  {"title": "Commission Calculations"},
  {"title": "Ad Hoc Reports"},
  {"title": "Commission management"},
  {"title": "Lead Capture"},
  {"title": "Attendance Tracking"},
  {"title": "Data Mapping"},
  {"title": "Data Integration"},
  {"title": "Contact Database"},
  {"title": "Call Management"},
  {"title": "Content Management"},
  {"title": "Business intelligence (BI)"},
  {"title": "Access control"},
  {"title": "Sales cycle analysis"},
  {"title": "Access Monitoring"},
  {"title": "Proposal Management"},
  {"title": "Data Security"},
  {"title": "Marketing Management"},
  {"title": "Call Sharing"},
  {"title": "Lead Distribution"},
  {"title": "Call Parking"},
  {"title": "Accounts payable"},
  {"title": "Campaign Management"},
  {"title": "Attendance Tracking"},
  {"title": "Automatic Re-ordering"},
  {"title": "Action Item Tracking"},
  {"title": "Attendance Tracking"},
  {"title": "Data Protection"},
  {"title": "Accounts Receivable"},
  {"title": "Lead Notifications"},
  {"title": "Data Import and Export"},
  {"title": "Email Marketing"},
  {"title": "Automatic Player Updates"},
  {"title": "Audience Segmentation"},
  {"title": "Email Integration"},
  {"title": "Ad hoc Analysis"},
  {"title": "Appointment Reminders"},
  {"title": "Automated Scheduling"},
  {"title": "Automated Routing"},
  {"title": "Automated Quoting"},
  {"title": "Background Screening"},
  {"title": "Channel Management"},
  {"title": "Cataloging / Categorization"},
  {"title": "Campaign Segmentation"},
  {"title": "Data Management"},
  {"title": "Call Reporting"},
  {"title": "Dashboard"},
  {"title": "Lead Management"},
  {"title": "Sales dashboards and reports"},
  {"title": "Marketing Automation Integration"},
  {"title": "Lead Segmentation"},
  {"title": "Customization"},
  {"title": "Customer DataBase"},
  {"title": "Location Tracking"},
  {"title": "Audience Targeting"},
  {"title": "Call Scripting"},
  {"title": "Task Management"},
  {"title": "Sales goal setting and tracking"},
  {"title": "Goal Tracking"},
  {"title": "Task automation"},
  {"title": "Personalization and customization"},
  {"title": "Call Monitoring"},
  {"title": "Marketing Reports"},
  {"title": "Automatic Formatting"},
  {"title": "Performance Metrics"},
  {"title": "Ad hoc Query"},
  {"title": "Access Controls/Permissions"},
  {"title": "Business Process Automation"},
  {"title": "Sales Forecasting"},
  {"title": "Task automation"},
  {"title": "Custom Fields"},
  {"title": "Web Forms"},
  {"title": "Sales pipeline management"},
  {"title": "Lead Assignment"},
  {"title": "Workflow Automation"},
  {"title": "Sales conversion rate analysis"},
  {"title": "Call Center Management"},
  {"title": "Data Integration"},
  {"title": "Sales churn analysis"},
  {"title": "Calendar Management"},
  {"title": "Sales campaign management"},
  {"title": "Lead Nurturing"},
  {"title": "Lead Scoring"},
  {"title": "Marketing Collateral"},
  {"title": "Marketing Automation"},
  {"title": "Spend Control"},
  {"title": "Sales Tracking"},
  {"title": "Task Management"},
  {"title": "Business Process Automation"},
  {"title": "Appointment Management"},
  {"title": "Lead Database Integration"},
  {"title": "Call Logging"},
  {"title": "Automated Publishing"},
  {"title": "Mobile Access"},
  {"title": "CRM"},
  {"title": "Dashboard and analytics"},
  {"title": "Sales cycle analysis"},
  {"title": "Lead Notifications"},
  {"title": "Sales pipeline management"},
  {"title": "Sales conversion rate analysis"},
  {"title": "Task automation"},
  {"title": "Dashboard and analytics"},
  {"title": "Personalization and customization"},
  {"title": "Automated customer notifications and alerts"},
  {"title": "Mobile Access and CRM App"},
  {"title": "Customization and Personalization"},
  {"title": "Mobile CRM Access"},
  {"title": "Contact Management"}
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
