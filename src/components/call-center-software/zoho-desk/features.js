import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Call Management" },
  { title: "Alerts & Notifications" },
  { title: "Self Service Portal" },
  { title: "Call Recording" },
  { title: "Customer Feedback" },
  { title: "Mobile Support" },
  { title: "Customer Support" },
  { title: "Time Tracking" },
  { title: "Workflow Management" },
  { title: "Knowledge Management" },
  { title: "Help Desk Management" },
  { title: "Service Level Agreement (SLA) Management" },
  { title: "Case Management" },
  { title: "CRM integration" },
  { title: "Assignment Management" },
  { title: "Dashboard" },
  { title: "Call Center Management" },
  { title: "Ticket Management" },
  { title: "Call Monitoring" },
  { title: "Call Logging" },
  { title: "Escalation Management" },
  { title: "Extensibility" },
  { title: "Community Forums" },
  { title: "Email Management" },
];

const moreFeatures = [
  { title: "Live Chat" },
  { title: "Multi-Department" },
  { title: "Customer Experience Management" },
  { title: "Multi-Channel Collection" },
  { title: "Canned Responses" },
  { title: "Social Media" },
  { title: "Chatbot" },
  { title: "Process/Workflow Automation" },
  { title: "Multi-Channel Communication" },
  { title: "Complaint Monitoring" },
  { title: "Customer Engagement" },
  { title: "Social Media Monitoring" },
  { title: "Communication Management" },
  { title: "Community Management" },
  { title: "Chat / Messaging" },
  { title: "Customer Support Tracking" },
  { title: "Self Service Portal" },
  { title: "CRM integration" },
  { title: "Omni-Channel" },
  { title: "Multi-Language" },
  { title: "Interactive Voice Response" },
  { title: "Customer Complaint Tracking" },
  { title: "Unified Communications" },
  { title: "SLAs & Escalations" },
  { title: "Personalization" },
  { title: "Omnichannel" },
  { title: "Instant Messaging" },
  { title: "Process Automation" },
  { title: "Knowledge Base Management" },
  { title: "Guided Conversations" },
  { title: "Ticket Assignment" },
  { title: "Auto-tag tickets" },
  { title: "Reply Assistant" },
  { title: "Field Predictions" },
  { title: "Multi-brand Help Center" },
  { title: "KB Bot" },
  { title: "Sentiment Analysis" },
  { title: "Complaint Management" },
  { title: "Agent Productivity" },
  { title: "Web Forms" },
  { title: "Embeddable self-service" },
  { title: "Domain mapping" },
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
