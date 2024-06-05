import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Lead Generation"},
  {"title": "Financial Management"},
  {"title": "Reimbursement Management"},
  {"title": "Mass Email"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "CRM"},
  {"title": "Customer Support"},
  {"title": "CRM Analytics"},
  {"title": "Project Management"},
  {"title": "Event Management"},
  {"title": "Email Templates"},
  {"title": "Marketing Automation"},
  {"title": "Marketing Collateral"},
  {"title": "Sales Quotes"},
  {"title": "Email Integration"},
  {"title": "Customer Management"},
  {"title": "Invoice"},
  {"title": "Case Management"},
  {"title": "Marketing Analytics"},
  {"title": "CRM & Sales Reports"},
  {"title": "Task Management"},
  {"title": "Sales Tracking"},
  {"title": "Contact Manager"}
];

const moreFeatures = [
  {"title": "Appointment Management"},
  {"title": "Territory Management"},
  {"title": "Sales Forecasting"},
  {"title": "Mobile App"},
  {"title": "Lead Management"},
  {"title": "Contact Management"},
  {"title": "Sales Force Automation"},
  {"title": "Commission management"},
  {"title": "Customer DataBase"},
  {"title": "Order Tracking"},
  {"title": "Field Sales Management"},
  {"title": "Performance Metrics"},
  {"title": "Proposal Generation"},
  {"title": "Collaboration Tools"},
  {"title": "File Sharing"},
  {"title": "Document Storage"},
  {"title": "Workflow Management"},
  {"title": "Accounting Integration"},
  {"title": "Forecasting"},
  {"title": "Multi-Currency"},
  {"title": "Multi-Location"},
  {"title": "Billing & Invoicing"},
  {"title": "Payment Processing"},
  {"title": "Ad Hoc Reports"},
  {"title": "Budgeting & Forecasting"},
  {"title": "Dashboard"},
  {"title": "Key Performance Indicators"},
  {"title": "Strategic Planning"},
  {"title": "Inbound Reporting"},
  {"title": "Activity Tracking"},
  {"title": "Lead Capture"},
  {"title": "Lead Distribution"},
  {"title": "Lead Scoring"},
  {"title": "Pipeline Management"},
  {"title": "Campaign Management"},
  {"title": "Lead Nurturing"},
  {"title": "Lead Segmentation"},
  {"title": "Prospecting Tools"},
  {"title": "Source Tracking"},
  {"title": "Order Management"},
  {"title": "Purchase Orders"},
  {"title": "Analytics"},
  {"title": "Scheduling"},
  {"title": "Call Logging"},
  {"title": "Automated Routing"},
  {"title": "Contract Management"},
  {"title": "Issue Tracking"},
  {"title": "Client Portal"},
  {"title": "Quote Management"},
  {"title": "Purchasing"},
  {"title": "Customizable Dashboard"},
  {"title": "Forms Management"},
  {"title": "Event-Based Notifications"},
  {"title": "Web Forms"},
  {"title": "Invoice Management"},
  {"title": "Contact Database"},
  {"title": "Multi-Campaign"},
  {"title": "Campaign Analysis"},
  {"title": "Customizable Templates"},
  {"title": "Real Time Analytics"},
  {"title": "Invoice Processing"},
  {"title": "Sales Management"},
  {"title": "Import & Export Data"},
  {"title": "Client Management"},
  {"title": "Proposal Management"},
  {"title": "Marketing Management"},
  {"title": "Search Marketing"},
  {"title": "Mailing list management"},
  {"title": "Manage Quotations"},
  {"title": "Landing Pages"},
  {"title": "List Management"},
  {"title": "Customization"},
  {"title": "Campaign Segmentation"},
  {"title": "Website Visitor Tracking"},
  {"title": "Customer Segmentation"},
  {"title": "Response Management"},
  {"title": "Social Media Monitoring"},
  {"title": "Social Media Metrics"},
  {"title": "Pricing Management"},
  {"title": "Reviews Management"},
  {"title": "Content Syndication"},
  {"title": "Sales Dashboards & Reports"},
  {"title": "Multi-Store Management"},
  {"title": "Multi-Account Management"},
  {"title": "Multi-Site Management"},
  {"title": "Media Library"},
  {"title": "Quality Control"},
  {"title": "Multiple Billing Rates"},
  {"title": "Approval Workflow"},
  {"title": "Social media management"},
  {"title": "Client database"},
  {"title": "Reporting & statistics"},
  {"title": "Customizable invoices"},
  {"title": "Online payments"},
  {"title": "Online invoicing"},
  {"title": "Hourly billing"},
  {"title": "Email Marketing"},
  {"title": "Third Party Integration"},
  {"title": "Search"},
  {"title": "Data Integration"},
  {"title": "Allocation"},
  {"title": "Email Distribution"},
  {"title": "Data Source Connectors"},
  {"title": "Financial Reports"},
  {"title": "Marketing Reports"},
  {"title": "Audience Targeting"},
  {"title": "Call List Management"},
  {"title": "Account Alerts"},
  {"title": "Multi-Channel Collection"},
  {"title": "Online Payment Processing"},
  {"title": "Reporting/Analytics"},
  {"title": "Geo Targeting"},
  {"title": "Create Subtasks"},
  {"title": "Segmentation"},
  {"title": "Access Controls/Permissions"},
  {"title": "IT Asset Management"},
  {"title": "Sales Reports"},
  {"title": "Purchase Order Management"},
  {"title": "Import / Export Management"},
  {"title": "ERP"},
  {"title": "Quotes/Estimates"},
  {"title": "Calendar/Reminder System"},
  {"title": "Scheduled / Automated Reports"},
  {"title": "Internal Chat Integration"},
  {"title": "For Websites"},
  {"title": "Marketing Automation Integration"},
  {"title": "Financial Reporting"},
  {"title": "Multi-Country"},
  {"title": "Campaign Personalization"},
  {"title": "Customer Profiles"},
  {"title": "Personalization"},
  {"title": "Account Based Marketing"},
  {"title": "Action Item Tracking"},
  {"title": "Program Management"},
  {"title": "Case Notes"},
  {"title": "Communication Tracking"},
  {"title": "Automatic Formatting"},
  {"title": "Analytics/ROI Tracking"},
  {"title": "Drip Campaigns"},
  {"title": "Contact Import/Export"},
  {"title": "Sales Intelligence"},
  {"title": "Automated Quoting"},
  {"title": "Goals / Quota Management"},
  {"title": "Calendar Sync"},
  {"title": "Lead Database Integration"},
  {"title": "Data Extraction"},
  {"title": "Form Builder"},
  {"title": "Lead Enrichment"},
  {"title": "Lead Notifications"},
  {"title": "Demographic Data"},
  {"title": "Donor Targeting"},
  {"title": "Customer Targeting"},
  {"title": "KPIs"},
  {"title": "Public Dashboards"},
  {"title": "Email / Online"},
  {"title": "Quotes / Proposals"}
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
