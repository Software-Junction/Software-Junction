import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Email Marketing / SMS Marketing" },
  { title: "Sales Tracking" },
  { title: "Sales Quotes" },
  { title: "Opportunity Management" },
  { title: "Customer Support" },
  { title: "Time Tracking" },
  { title: "Task Management" },
  { title: "Task Management" },
  { title: "Marketing Analytics" },
  { title: "CRM Analytics" },
  { title: "Email Integration" },
  { title: "Performance Management" },
  { title: "Case Management" },
  { title: "Capture Leads from Twitter/Facebooks" },
  { title: "Referral Management" },
  { title: "Appointment Management" },
  { title: "Inventory Management" },
  { title: "Customer Management" },
  { title: "Vendor Management" },
  { title: "Asset Management" },
  { title: "Marketing Automation" },
  { title: "Email Templates" },
  { title: "CRM & Sales Dashboards" },
  { title: "CRM & Sales Reports" },
];

const moreFeatures = [
  { title: "Audit Trail" },
  { title: "Developer API" },
  { title: "Invoice" },
  { title: "Mass Email" },
  { title: "Product Database" },
  { title: "Products & Price Books" },
  { title: "Search Option" },
  { title: "Meeting Management" },
  { title: "Offline Access" },
  { title: "On-Demand (SaaS)" },
  { title: "Partner Cloud (VAR or Service Provider)" },
  { title: "Due date tracking" },
  { title: "Sales Force Automation" },
  { title: "Client Portal" },
  { title: "Event Triggered Email" },
  { title: "Data Security" },
  { title: "Ad Hoc Reports" },
  { title: "Lead Scoring" },
  { title: "Customization" },
  { title: "Call Scripting" },
  { title: "IVR / Voice Recognition" },
  { title: "Inbound Call Center" },
  { title: "Custom Fields" },
  { title: "Asset Tracking" },
  { title: "Campaign Analysis" },
  { title: "Multi-Channel Communication" },
  { title: "Lead Management" },
  { title: "Appointment Scheduling" },
  { title: "Incentive Management" },
  { title: "Customizable Templates" },
  { title: "Sales Dashboards & Reports" },
  { title: "Mobile App" },
  { title: "Lead Distribution" },
  { title: "Feedback Collection" },
  { title: "Social Media Monitoring" },
  { title: "Auto-Dialer" },
  { title: "Mobile Access" },
  { title: "Invoice Management" },
  { title: "Lead Capture" },
  { title: "Data Analysis" },
  { title: "Service Level Agreement (SLA) Management" },
  { title: "Call Routing" },
  { title: "Workflow Management" },
  { title: "Alerts Notifications" },
  { title: "Online Booking" },
  { title: "Appointment Management" },
  { title: "Document Management" },
  { title: "Calendar Management" },
  { title: "Marketing Management" },
  { title: "Attendance Tracking" },
  { title: "Customer Engagement" },
  { title: "Push Notifications" },
  { title: "Customer Feedback" },
  { title: "Task Management" },
  { title: "Archiving & Retention" },
  { title: "Call Recording" },
  { title: "Sales Tracking" },
  { title: "Dashboard" },
  { title: "Mobile Ticketing" },
  { title: "Third Party Integration" },
  { title: "Client Management" },
  { title: "Forms Management" },
  { title: "Access control" },
  { title: "Feedback Management" },
  { title: "Multi-Campaign" },
  { title: "Gamification" },
  { title: "Data Visualization" },
  { title: "Sales Quotes" },
  { title: "Sales Reporting" },
  { title: "Campaign Management" },
  { title: "Real Time Comparisons" },
  { title: "Role-Based Permissions" },
  { title: "Quote Management" },
  { title: "Real Time Analytics" },
  { title: "Lead Nurturing" },
  { title: "Lead Segmentation" },
  { title: "Data Backup and Restore" },
  { title: "Proposal Generation" },
  { title: "Call Management" },
  { title: "Email Marketing / SMS Marketing" },
  { title: "Referral Management" },
  { title: "Offline Access" },
  { title: "Customizable Branding" },
  { title: "Forms Management" },
  { title: "Role-Based Permissions" },
  { title: "Search Option" },
  { title: "Web Forms" },
  { title: "Sales Management" },
  { title: "Import & Export Data" },
  { title: "Interaction tracking" },
  { title: "Invoice Processing" },
  { title: "Client / Property Matching" },
  { title: "Attendance Tracking" },
  { title: "Profitability Analysis" },
  { title: "Asset Management" },
  { title: "Client database" },
  { title: "Reporting & statistics" },
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

          {isShowMore && (
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
          )}
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
