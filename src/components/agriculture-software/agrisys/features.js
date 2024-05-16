import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Built-In Accounting" },
  { title: "Supplier Management" },
  { title: "Order Processing" },
  { title: "Pricing Management" },
  { title: "Traceability" },
  { title: "Labor Management" },
  { title: "CRM" },
];

// const moreFeatures = [
//   { title: "Outbound Reporting" },
//   { title: "Predictive Dialer" },
//   { title: "Telemarketing Management" },
//   { title: "Voice & Data Integration" },
//   { title: "VoIP" },
//   { title: "Activity Tracking" },
//   { title: "Lead Capture" },
//   { title: "Conferencing" },
//   { title: "Call Center Management" },
//   { title: "Call Monitoring" },
//   { title: "Inbound Reporting" },
//   { title: "IVR / Voice Recognition" },
//   { title: "Social Media Integration" },
//   { title: "Collaboration Tools" },
//   { title: "Real Time Monitoring" },
//   { title: "Live chat system" },
//   { title: "Archiving & Retention" },
//   { title: "Compliance Management" },
//   { title: "Email Management" },
//   { title: "Lead Distribution" },
//   { title: "Lead Scoring" },
//   { title: "Campaign Management" },
//   { title: "Real Time Reporting" },
//   { title: "Feedback Management" },
//   { title: "Surveys & Feedback" },
//   { title: "Budgeting & Forecasting" },
//   { title: "Dashboard" },
//   { title: "Caller ID" },
//   { title: "Lead Segmentation" },
//   { title: "Historical Reporting" },
//   { title: "Analytics" },
//   { title: "Scheduling" },
//   { title: "Automatic Call Distribution" },
//   { title: "Computer Telephony" },
//   { title: "Knowledge Base" },
//   { title: "Blended Call Center" },
//   { title: "Call Logging" },
//   { title: "Call Scripting" },
//   { title: "Escalation Management" },
//   { title: "Inbound Call Center" },
//   { title: "Manual Dialer" },
//   { title: "Outbound Call Center" },
//   { title: "Premise-Based Call Center" },
//   { title: "Progressive Dialer" },
//   { title: "Queue Manager" },
//   { title: "Virtual Call Center" },
//   { title: "Workforce Management" },
//   { title: "Scheduled Recording" },
//   { title: "Audit Management" },
//   { title: "Call Sharing" },
//   { title: "Distributed Call Recording" },
//   { title: "Email Recording" },
//   { title: "Event Triggered Recording" },
//   { title: "File Transfer" },
//   { title: "Instant Retrieval" },
//   { title: "On-Demand Recording" },
//   { title: "Recording Bookmarking" },
//   { title: "Video Call Recording" },
//   { title: "Contact Database" },
//   { title: "Event Triggered Actions" },
//   { title: "Customer Segmentation" },
//   { title: "Gamification" },
//   { title: "Communication Management" },
//   { title: "Screen Activity Recording" },
//   { title: "Predictive Analytics" },
//   { title: "Call Reporting" },
//   { title: "Customer Engagement" },
//   { title: "For Sales" },
//   { title: "Call Disposition and Notes" },
//   { title: "Call Control" },
//   { title: "Personalized Greetings" },
//   { title: "IVR System" },
//   { title: "Skill Based Routing" },
//   { title: "For Call Centers" },
//   { title: "Contact History" },
//   { title: "Built-In CRM" },
//   { title: "Contact Tags and Custom Fields" },
//   { title: "Multi-Campaign" },
//   { title: "Call Queuing" },
//   { title: "Analytical Reports" },
//   { title: "Holiday Mapping" },
//   { title: "Outgoing Call Tracking" },
//   { title: "Analytics / ROI Tracking" },
//   { title: "Email Notifications" },
//   { title: "Power Dialer" },
//   { title: "Desktop Notifications" },
//   { title: "Data import and Synchronization" },
//   { title: "Conversion Tracking" },
//   { title: "Audio / Video Conferencing" },
//   { title: "Chat / Messaging" },
//   { title: "Usage Reporting" },
//   { title: "Call Results" },
//   { title: "Call Transfer" },
//   { title: "Auto-Dialing" },
//   { title: "Preview Dialer" },
//   { title: "Live Chat" },
//   { title: "Multi-user capable" },
//   { title: "Callback Scheduling" },
//   { title: "Campaign Specific Caller ID" },
//   { title: "Reporting" },
//   { title: "Dashboards & Analytics" },
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
              {/* {moreFeatures.map((featureM, index) => (
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
