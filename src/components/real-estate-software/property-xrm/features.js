import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Expense Management" },
  { title: "Sales Tracking" },
  { title: "Marketing Analytics" },
  { title: "CRM & Sales Dashboards" },
  { title: "Vendor Management" },
  { title: "Survey Management" },
  { title: "Sales Forecasting" },
  { title: "Call Recording" },
  { title: "Accounts Receivable" },
  { title: "Email Templates" },
  { title: "Lead Management" },
  { title: "Workflow Management" },
  { title: "Referral Tracking" },
  { title: "Mobile App" },
  { title: "CRM" },
  { title: "Accounting" },
  { title: "Case Management" },
  { title: "Email Marketing / SMS Marketing" },
  { title: "Fee Management" },
  { title: "Contact Management" },
  { title: "Capture Leads from Twitter/Facebooks" },
  { title: "Proposal Generation" },
  { title: "Social Marketing" },
  { title: "Work order management" },
];

const moreFeatures = [
  { title: "Accounts payable" },
  { title: "Document Management" },
  { title: "CRM Analytics" },
  { title: "Task Management" },
  { title: "Sales Force Automation" },
  { title: "Opportunity Management" },
  { title: "Property Management" },
  { title: "Accounting" },
  { title: "Email Integration" },
  { title: "Owner Portal" },
  { title: "Tenant Database" },
  { title: "Lease Management" },
  { title: "Role-Based Permissions" },
  { title: "Facility Management" },
  { title: "Sentiment Analysis" },
  { title: "Maintenance Scheduling" },
  { title: "Client Portal" },
  { title: "Service Level Agreement (SLA) Management" },
  { title: "Campaign Management" },
  { title: "Maintenance Tracking" },
  { title: "Client Tracking" },
  { title: "Call Center Management" },
  { title: "Client database" },
  { title: "Email Marketing" },
  { title: "Dashboard" },
  { title: "Lease Classification" },
  { title: "Tenant Portal" },
  { title: "Facility Scheduling" },
  { title: "Facility Maintenance" },
  { title: "Reporting/Analytics" },
  { title: "Maintenance Management" },
  { title: "Accounting Management" },
  { title: "Sales Management" },
  { title: "Proposal Management" },
  { title: "Marketing Management" },
  { title: "Customization" },
  { title: "Business Process Automation" },
  { title: "Campaign Segmentation" },
  { title: "Discount Management" },
  { title: "Asset Tracking" },
  { title: "Mobile Access" },
  { title: "Conversion Tracking" },
  { title: "Customer Support Tracking" },
  { title: "Social media management" },
  { title: "Third party integrations" },
  { title: "Knowledge Base Management" },
  { title: "Sales Reports" },
  { title: "Financial Reporting" },
  { title: "GDPR Compliance" },
  { title: "Remote Document Access" },
  { title: "Communication Tracking" },
  { title: "Search/Filter" },
  { title: "User Interaction Tracking" },
  { title: "Goal Tracking" },
  { title: "Analytics/ROI Tracking" },
  { title: "Contact Import/Export" },
  { title: "Sales Intelligence" },
  { title: "Team Assignments" },
  { title: "Customer Surveys" },
  { title: "Property Database" },
  { title: "Occupancy Management" },
  { title: "Floor Plans & Maps" },
  { title: "Sales Dashboards & Reports" },
  { title: "Community Management" },
  { title: "Service History" },
  { title: "Asset Management" },
  { title: "Meter Tracking" },
  { title: "Commercial Properties" },
  { title: "Facility Tracking" },
  { title: "Invoice Management" },
  { title: "Budgeting & Forecasting" },
  { title: "Payment Tracking" },
  { title: "Commercial Leases" },
  { title: "Retail Leases" },
  { title: "Document Management" },
  { title: "Email Marketing / SMS Marketing" },
  { title: "Expense Management" },
  { title: "Supplier Management" },
  { title: "Milestone Tracking" },
  { title: "Portfolio Management" },
  { title: "Billing & Invoicing" },
  { title: "Rent Tracking" },
  { title: "Residential Properties" },
  { title: "Tax Management" },
  { title: "Website Management" },
  { title: "Surveys & Feedback" },
  { title: "Call Center Management" },
  { title: "Call Monitoring" },
  { title: "Telemarketing Management" },
  { title: "Lead Capture" },
  { title: "Lead Scoring" },
  { title: "Pipeline Management" },
  { title: "Campaign Management" },
  { title: "Lead Nurturing" },
  { title: "Lead Segmentation" },
  { title: "Prospecting Tools" },
  { title: "Scheduling" },
  { title: "Knowledge Base" },
  { title: "Call Scripting" },
  { title: "Version Control" },
  { title: "Contract Management" },
  { title: "Incident Management" },
  { title: "Third Party Integration" },
  { title: "Full Integration" },
  { title: "Client Portal" },
  { title: "Reservations Management" },
  { title: "Inspection Management" },
  { title: "Customizable Dashboard" },
  { title: "Receipt Management" },
  { title: "Campaign Analysis" },
  { title: "Customizable Templates" },
  { title: "Real Time Analytics" },
  { title: "Rules-Based Workflow" },
  { title: "Sales Management" },
  { title: "Proposal Management" },
  { title: "Marketing Management" },
  { title: "Process Mapping" },
  { title: "Team Management" },
  { title: "Customization" },
  { title: "Business Process Automation" },
  { title: "Campaign Segmentation" },
  { title: "Discount Management" },
  { title: "Enterprise Asset Management" },
  { title: "Listing Analytics" },
  { title: "Facility Scheduling" },
  { title: "Sales Pipeline Tracking" },
  { title: "Sales Dashboards & Reports" },
  { title: "Omnichannel Communication" },
  { title: "Event Triggered Email" },
  { title: "Multi-Account Management" },
  { title: "Asset Tracking" },
  { title: "Mobile Access" },
  { title: "Preventive Maintenance" },
  { title: "Service History Tracking" },
  { title: "Technician Management" },
  { title: "Fixed Asset Management" },
  { title: "Conversion Tracking" },
  { title: "Templates" },
  { title: "Meter Tracking" },
  { title: "Customer Support Tracking" },
  { title: "Social media management" },
  { title: "Third party integrations" },
  { title: "Client database" },
  { title: "Reporting & statistics" },
  { title: "Email Marketing" },
  { title: "Sales pipeline management" },
  { title: "Search" },
  { title: "Marketing Reports" },
  { title: "Shared Contacts" },
  { title: "Client Tracking" },
  { title: "Automated Scheduling" },
  { title: "Corrective / Preventive Actions" },
  { title: "Dues Management" },
  { title: "Report Templates" },
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
