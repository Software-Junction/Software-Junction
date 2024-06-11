import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Tax Management" },
  { title: "Lease Management" },
  { title: "Rent Tracking" },
  { title: "Portfolio Management" },
  { title: "Contact Management" },
  { title: "Residential Properties" },
  { title: "Expense Management" },
  { title: "Late Fee Calculation" },
  { title: "Tenant Database" },
  { title: "Lease and Maintenance Management" },
];

// const moreFeatures = [
//   { title: "Unicode Compliance" },
//   { title: "Feedback Management" },
//   { title: "Goal Management" },
//   { title: "Ad hoc Analysis" },
//   { title: "Ad Hoc Reports" },
//   { title: "Key Performance Indicators" },
//   { title: "Strategic Planning" },
//   { title: "IVR / Voice Recognition" },
//   { title: "Voice & Data Integration" },
//   { title: "VoIP" },
//   { title: "Campaign Management" },
//   { title: "Demand Planning" },
//   { title: "Sales & Operations Planning" },
//   { title: "Procurement Management" },
//   { title: "Analytics" },
//   { title: "Scheduling" },
//   { title: "Escalation Management" },
//   { title: "Approval Process Control" },
//   { title: "Permission Management" },
//   { title: "SEO Management" },
//   { title: "Version Control" },
//   { title: "Incident Management" },
//   { title: "Ticket Management" },
//   { title: "Issue Tracking" },
//   { title: "Requirements Review" },
//   { title: "Audit Management" },
//   { title: "Defect Tracking" },
//   { title: "ISO Standards Management" },
//   { title: "Supplier Quality Control" },
//   { title: "Testing Management" },
//   { title: "Client Portal" },
//   { title: "GPS Integration" },
//   { title: "Routing" },
//   { title: "Purchasing" },
//   { title: "Time & Expense Tracking" },
//   { title: "Server Performance" },
//   { title: "Event Logs" },
//   { title: "CPU Monitoring" },
//   { title: "Database Servers" },
//   { title: "Email Monitoring" },
//   { title: "History Tracking" },
//   { title: "User Activity Monitoring" },
//   { title: "Virtual Machine Monitoring" },
//   { title: "Customizable Templates" },
//   { title: "Backlog Management" },
//   { title: "Employee Alignment" },
//   { title: "Employee Awards" },
//   { title: "Data Management" },
//   { title: "Marketing Management" },
//   { title: "Business Rules Management" },
//   { title: "Process Change Tracking" },
//   { title: "Process Mapping" },
//   { title: "Configuration Management" },
//   { title: "Change Management" },
//   { title: "Customization" },
//   { title: "File Management" },
//   { title: "Customer Activity Tracking" },
//   { title: "Discount Management" },
//   { title: "Gift Card System" },
//   { title: "Loyalty Card System" },
//   { title: "Member Portal" },
//   { title: "No-Card Loyalty System" },
//   { title: "Rewards Management" },
//   { title: "Customer Segmentation" },
//   { title: "Push Notifications" },
//   { title: "Device management" },
//   { title: "Archiving & Retention" },
//   { title: "Compliance Management" },
//   { title: "Collaboration Tools" },
//   { title: "Assignment Management" },
//   { title: "Self Service Portal" },
//   { title: "Collaboration" },
//   { title: "Workflow Management" },
//   { title: "Document Indexing" },
//   { title: "Order Fulfillment" },
//   { title: "Software Management" },
//   { title: "Supplier Management" },
//   { title: "Bug Tracking" },
//   { title: "Idea Management" },
//   { title: "Shipping Management" },
//   { title: "Percent-Complete Tracking" },
//   { title: "Portfolio Management" },
//   { title: "Requirements Management" },
//   { title: "Milestone Tracking" },
//   { title: "Status Tracking" },
//   { title: "Testing / QA Management" },
//   { title: "Billing & Invoicing" },
//   { title: "Resource Management" },
//   { title: "Physician Management" },
//   { title: "Succession Planning" },
//   { title: "Policy Management" },
//   { title: "Community Management" },
//   { title: "Feedback Collection" },
//   { title: "Ad hoc Query" },
//   { title: "Benchmarking" },
//   { title: "Data Analysis" },
//   { title: "Data Visualization" },
//   { title: "Profitability Analysis" },
//   { title: "Trend / Problem Indicators" },
//   { title: "Predictive Analytics" },
//   { title: "Release Management" },
//   { title: "Multi-User Collaboration" },
//   { title: "Screen Capture" },
//   { title: "2D Drawing" },
//   { title: "Intrusion Detection System" },
//   { title: "Exceptions Management" },
//   { title: "Audio / Video Conferencing" },
//   { title: "Data Entry Verification" },
//   { title: "Duplicate Detection" },
//   { title: "Image Entry" },
//   { title: "Chat / Messaging" },
//   { title: "Mis-Keyed Variation Detection" },
//   { title: "Templates" },
//   { title: "Remote Access" },
//   { title: "Presentation Tools" },
//   { title: "Video Streaming" },
//   { title: "Approval Workflow" },
//   { title: "Full Text Search" },
//   { title: "Dashboard" },
//   { title: "Reporting" },
//   { title: "Access control" },
//   { title: "Filtered Views" },
//   { title: "Electronic Data Interchange" },
//   { title: "Dashboard Creation" },
//   { title: "Drag & Drop" },
//   { title: "Audience Targeting" },
//   { title: "Patient Management" },
//   { title: "Desktop Interface" },
//   { title: "Interactive Elements" },
//   { title: "Mobile Interface" },
//   { title: "Page Linking" },
//   { title: "Prototype Creation" },
//   { title: "Wireframe Creation" },
//   { title: "Mockup Creation" },
//   { title: "Filtering" },
//   { title: "Prototyping" },
//   { title: "Data Collection" },
//   { title: "Chat" },
//   { title: "Connectivity Management" },
//   { title: "Encryption" },
//   { title: "Diagramming" },
//   { title: "User Authentication" },
//   { title: "Content Management" },
//   { title: "Loyalty Program" },
//   { title: "In-app Coupons" },
//   { title: "One Click Contacting" },
//   { title: "Revision History" },
//   { title: "QR/Barcode Scanner Integration" },
//   { title: "Virtual Reality" },
//   { title: "Quiz App" },
//   { title: "Bluetooth Technology" },
//   { title: "Diagnostic Tools" },
//   { title: "Chatbot" },
//   { title: "Process/Workflow Automation" },
//   { title: "Access Controls/Permissions" },
//   { title: "Code Refactoring" },
//   { title: "Code-free Development" },
//   { title: "Compatibility Testing" },
//   { title: "Social Networking Capabilities" },
//   { title: "Feedback System" },
//   { title: "Search Feature" },
//   { title: "Menus" },
//   { title: "Error Monitoring" },
//   { title: "Github Integration" },
//   { title: "Augmented Reality" },
//   { title: "Google Indoor-maps" },
//   { title: "Big Data Analytics" },
//   { title: "Application Development" },
//   { title: "Move & Copy" },
//   { title: "Parameterized Testing" },
//   { title: "Requirements-Based Testing" },
//   { title: "Hierarchical View" },
//   { title: "Security Testing" },
//   { title: "Visual Discovery" },
//   { title: "Organizational Charting" },
//   { title: "Prioritization" },
//   { title: "Test Script Reviews" },
//   { title: "Action Management" },
//   { title: "Reporting/Analytics" },
//   { title: "Product Roadmapping" },
//   { title: "Trend Analysis" },
//   { title: "Supports Scrum" },
//   { title: "Supports Agile" },
// ];

const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFeatures = featuresData.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

          {filteredFeatures.map((feature, index) => (
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

          {isShowMore && 
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
          }
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
