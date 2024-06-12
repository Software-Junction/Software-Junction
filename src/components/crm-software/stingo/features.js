import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Sales Quotes"},
    {"title": "Customer Support"},
    {"title": "CRM & Sales Reports"},
    {"title": "Search Option"},
    {"title": "CRM Analytics"},
    {"title": "Marketing Automation"},
    {"title": "Appointment Management"},
    {"title": "CRM integration"},
    {"title": "Lead Management"},
    {"title": "Email Templates"},
    {"title": "Invoice"},
    {"title": "Sales Tracking"},
    {"title": "Email Marketing / SMS Marketing"},
    {"title": "Marketing Analytics"},
    {"title": "Mass Email"},
    {"title": "Customer Management"},
    {"title": "CRM & Sales Dashboards"},
    {"title": "Email Integration"},
    {"title": "Lead Generation"},
    {"title": "Sales Forecasting"},
    {"title": "Developer API"},
    {"title": "Catalog Management"},
    {"title": "Lead Scoring"},
    {"title": "CRM"}
];

const moreFeatures = [
  {"title": "Data Management"},
  {"title": "Lead Notifications"},
  {"title": "Lead Assignment"},
  {"title": "Call Scripting"},
  {"title": "Invoice Management"},
  {"title": "Customizable Dashboard"},
  {"title": "Sales Dashboards & Reports"},
  {"title": "Lead Segmentation"},
  {"title": "Sales Reporting"},
  {"title": "Lead Capture"},
  {"title": "Call Management"},
  {"title": "Campaign Segmentation"},
  {"title": "Call Disposition and Notes"},
  {"title": "Email Management"},
  {"title": "Data Mapping"},
  {"title": "Event-Based Notifications"},
  {"title": "Call Logging"},
  {"title": "Lead Distribution"},
  {"title": "Email Marketing"},
  {"title": "Sales pipeline management"},
  {"title": "Appointment Reminders"},
  {"title": "Campaign Management"},
  {"title": "Custom Fields"},
  {"title": "Sales Trend Analysis"},
  {"title": "Lead Management"},
  {"title": "Sales Force Automation"},
  {"title": "Lead Nurturing"},
  {"title": "Sales Analytics"},
  {"title": "Campaign Personalization"},
  {"title": "Dashboard"},
  {"title": "Sales Management"},
  {"title": "API Integration"},
  {"title": "Quote Management"},
  {"title": "Call Center Management"},
  {"title": "Outgoing SMS"},
  {"title": "Sales Performance Management"},
  {"title": "Event Triggered Email"},
  {"title": "Search/Filter"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Customization"},
  {"title": "Sales Reports"},
  {"title": "CRM"},
  {"title": "Outgoing Call Tracking"},
  {"title": "Contact History"},
  {"title": "Customer Support Tracking"},
  {"title": "Product Management"},
  {"title": "Call List Management"},
  {"title": "Calendar Management"},
  {"title": "Appointment Scheduling"},
  {"title": "Lead Enrichment"},
  {"title": "Data Extraction"},
  {"title": "Business Process Automation"},
  {"title": "IVR / Voice Recognition"},
  {"title": "CRM Analytics"},
  {"title": "Ticketing"},
  {"title": "Web to Lead"},
  {"title": "Lead Database Integration"},
  {"title": "Call Duration"},
  {"title": "Campaign Tracking"},
  {"title": "Invoice Processing"},
  {"title": "List Management"},
  {"title": "Lead Scoring"},
  {"title": "ROI Tracking"},
  {"title": "Facebook Lead Gen Ad Integration"},
  {"title": "Reporting/Analytics"},
  {"title": "Data Integration"},
  {"title": "Activity Log"},
  {"title": "Pre Sales Cadences"},
  {"title": "Analytics/ROI Tracking"},
  {"title": "Call & SMS Tracking"},
  {"title": "Pre-built Templates"},
  {"title": "Quotes / Proposals"},
  {"title": "Employee Database"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Group Scheduling"},
  {"title": "Member Management"},
  {"title": "Business Card/Badge Scanning"},
  {"title": "Search Option"},
  {"title": "Reporting & statistics"},
  {"title": "Data Source Integrations"},
  {"title": "Lead Notifications"},
  {"title": "Sales Intelligence"},
  {"title": "Appointment Reminders"},
  {"title": "Scheduled Messaging"},
  {"title": "Landing Pages/Web Forms"},
  {"title": "Lead Scoring"},
  {"title": "Call Duration"},
  {"title": "Sales Reports"},
  {"title": "Data Security"},
  {"title": "Website Analytics"},
  {"title": "For Sales / Marketing"},
  {"title": "Call Monitoring"},
  {"title": "Analytics"},
  {"title": "Call Recording"},
  {"title": "Outbound Reporting"},
  {"title": "Document Extraction"},
  {"title": "Lead Notifications"},
  {"title": "CRM Integration"},
  {"title": "IVR System"},
  {"title": "Custom Sales Funnel Flow"},
  {"title": "Call Logs"},
  {"title": "Lead Verification"},
  {"title": "Email Response Control"},
  {"title": "Data Security"},
  {"title": "Event-Based Notifications"},
  {"title": "360° Customer View"},
  {"title": "Data Management"},
  {"title": "Manage Quotations"},
  {"title": "Campaign Analysis"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Sales Dashboards & Reports"},
  {"title": "Sales pipeline management"},
  {"title": "Lead Distribution"},
  {"title": "Lead Management"},
  {"title": "Email Marketing"},
  {"title": "Lead Capture"},
  {"title": "Search/Filter"},
  {"title": "Call Management"},
  {"title": "Sales Trend Analysis"},
  {"title": "Sales Performance Management"},
  {"title": "API Integration"},
  {"title": "Call Center Management"},
  {"title": "Sales Force Automation"},
  {"title": "Dashboard"},
  {"title": "Lead Segmentation"}
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
