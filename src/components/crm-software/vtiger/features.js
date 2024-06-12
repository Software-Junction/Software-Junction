import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Email Marketing / SMS Marketing"},
    {"title": "Product Database"},
    {"title": "Customer Support"},
    {"title": "Asset Management"},
    {"title": "CRM integration"},
    {"title": "Contact Manager"},
    {"title": "Cloud Computing"},
    {"title": "Invoice"},
    {"title": "Mass Email"},
    {"title": "Solution Management"},
    {"title": "Sales Quotes"},
    {"title": "Document Management"},
    {"title": "CRM & Sales Reports"},
    {"title": "Case Management"},
    {"title": "Developer API"},
    {"title": "Inventory Management"},
    {"title": "Email Integration"},
    {"title": "Products & Price Books"},
    {"title": "Help Desk"},
    {"title": "CRM"},
    {"title": "Lead Generation"},
    {"title": "CRM Analytics"},
    {"title": "Email Templates"},
    {"title": "Customer Management"}
];

const moreFeatures = [
  {"title": "Invoice Management"},
  {"title": "Sales Analytics"},
  {"title": "Inventory control"},
  {"title": "Appointment Management"},
  {"title": "Sales Tracking"},
  {"title": "Email Monitoring"},
  {"title": "Campaign Management"},
  {"title": "Invoice Processing"},
  {"title": "Call Center"},
  {"title": "Sales Management"},
  {"title": "Data Analysis"},
  {"title": "Customizable Templates"},
  {"title": "Customization"},
  {"title": "Lead Management"},
  {"title": "Lead Scoring"},
  {"title": "Call Logging"},
  {"title": "Analytics"},
  {"title": "Order Management"},
  {"title": "Inventory Tracking"},
  {"title": "Document Storage"},
  {"title": "Appointment Scheduling"},
  {"title": "Approval Workflow"},
  {"title": "Lead Segmentation"},
  {"title": "Sales Forecasting"},
  {"title": "Field Sales Management"},
  {"title": "Mobile App"},
  {"title": "CRM Integration"},
  {"title": "Social Media Integration"},
  {"title": "Sales Force Automation"},
  {"title": "Sales Reports"},
  {"title": "Email Management"},
  {"title": "Sales Dashboards & Reports"},
  {"title": "Order Tracking"},
  {"title": "Contact Management"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Email Marketing"},
  {"title": "Lead Capture"},
  {"title": "Data Security"},
  {"title": "Business Process Automation"},
  {"title": "Campaign Analysis"},
  {"title": "Appointment Reminders"},
  {"title": "Real Time Analytics"},
  {"title": "Call Management"},
  {"title": "Email Response Control"},
  {"title": "Document Tagging"},
  {"title": "Lead Management"},
  {"title": "Sales pipeline management"},
  {"title": "SLA Monitoring"},
  {"title": "Data Import / Export"},
  {"title": "Workflow Management"},
  {"title": "VoIP"},
  {"title": "Deal Management"},
  {"title": "Sales Trend Analysis"},
  {"title": "Knowledge Base"},
  {"title": "Web Forms"},
  {"title": "Landing Pages"},
  {"title": "Product Catalog"},
  {"title": "Customer Engagement"},
  {"title": "Templates"},
  {"title": "Auto-Responders"},
  {"title": "Analytics"},
  {"title": "Accounting Integration"},
  {"title": "GDPR Compliance"},
  {"title": "Activity Log"},
  {"title": "SLA Management"},
  {"title": "Lead Scoring"},
  {"title": "Appointment Scheduling"},
  {"title": "Customizable invoices"},
  {"title": "Sales Performance Reports"},
  {"title": "Sales Tracking"},
  {"title": "Integrations"},
  {"title": "Document Templates"},
  {"title": "Customer Profiles"},
  {"title": "Alerts / Escalation"},
  {"title": "Calendar Sync"},
  {"title": "Drip Campaigns"},
  {"title": "Invoice Management"},
  {"title": "Data Import / Export"},
  {"title": "SLA Management"},
  {"title": "Sales Reports"},
  {"title": "Landing Pages/Web Forms"},
  {"title": "Manage Tasks"},
  {"title": "Appointment Management"}
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

          {displayFeatures.length > 0 ? (
          displayFeatures.map((feature, index) => (
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
          ))
        ) : (
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

          {/* {isShowMore && 
          <>
          {filteredMoreFeatures.map((featureM, index) => (
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
