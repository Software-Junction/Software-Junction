import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Call Center" },
  { title: "Predictive Dialer" },
  { title: "Lead Management" },
  { title: "Contact Management" },
  { title: "CRM" },
  { title: "Internal Call Transfer" },
  { title: "Call Recording" },
  { title: "Call Logs" },
  { title: "Call Routing" },
  { title: "Call Management" },
  { title: "Application Integration" },
  { title: "Social Media Integration" },
  { title: "Real Time Monitoring" },
  { title: "Live chat system" },
  { title: "Real Time Reporting" },
  { title: "Surveys & Feedback" },
  { title: "Customer DataBase" },
  { title: "Dashboard" },
  { title: "Call Center Management" },
  { title: "Call Monitoring" },
  { title: "Auto-Dialer" },
  { title: "Inbound Reporting" },
  { title: "Outbound Reporting" },
  { title: "IVR / Voice Recognition" },
];

const moreFeatures = [
  { title: "Voice & Data Integration" },
  { title: "Analytics" },
  { title: "Scheduling" },
  { title: "Telemarketing Management" },
  { title: "Automatic Call Distribution" },
  { title: "Computer Telephony" },
  { title: "Blended Call Center" },
  { title: "Call Logging" },
  { title: "Call Scripting" },
  { title: "Inbound Call Center" },
  { title: "Manual Dialer" },
  { title: "Outbound Call Center" },
  { title: "VoIP" },
  { title: "Premise-Based Call Center" },
  { title: "Progressive Dialer" },
  { title: "Queue Manager" },
  { title: "Virtual Call Center" },
  { title: "Call Sharing" },
  { title: "Voice / SMS Alerts" },
  { title: "Multi-Campaign" },
  { title: "Call recording" },
  { title: "Voicemail" },
  { title: "Campaign Management" },
  { title: "Preview Dialer" },
  { title: "Web Callback" },
  { title: "Live Chat" },
  { title: "Quotes" },
  { title: "Auto-Dialing" },
  { title: "Call List Management" },
  { title: "Multi-Channel Collection" },
  { title: "Real-time Scheduling" },
  { title: "Auto Dialer" },
  { title: "Omni-Channel" },
  { title: "Surveys" },
  { title: "Real-time Chat" },
  { title: "Interactive Voice Response" },
  { title: "Queue Management" },
  { title: "Call Queuing" },
  { title: "Data Analysis" },
  { title: "Data Import & Export" },
  { title: "Call Reporting" },
  { title: "Customer Engagement" },
  { title: "For Call Centers" },
  { title: "Power Dialer" },
  { title: "Chat / Messaging" },
  { title: "Call Results" },
  { title: "Call Transfer" },
  { title: "Callback Scheduling" },
  { title: "Campaign Specific Caller ID" },
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
