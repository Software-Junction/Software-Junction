import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "VoIP" },
  { title: "Analytics" },
  { title: "Onboarding" },
  { title: "Real Time Monitoring" },
  { title: "Live chat system" },
  { title: "Dashboard" },
  { title: "Automatic Call Distribution" },
  { title: "Activity Tracking" },
  { title: "Campaign Management" },
  { title: "CRM" },
  { title: "CRM integration" },
  { title: "Knowledge Management" },
  { title: "Caller ID" },
  { title: "Call Center Management" },
  { title: "Call Monitoring" },
  { title: "IVR / Voice Recognition" },
  { title: "Outbound Reporting" },
  { title: "Predictive Dialer" },
  { title: "Call Center" },
  { title: "Call Routing" },
  { title: "Call Management" },
  { title: "Performance Metrics" },
  { title: "Application Integration" },
  { title: "Applications Management" },
];

const moreFeatures = [
  { title: "Call Routing and Forwarding" },
  { title: "Call Transfers" },
  { title: "Call Queues" },
  { title: "Business SMS Messaging" },
  { title: "Call Metrics and Statistics" },
  { title: "Custom Greetings" },
  { title: "Hold Music or Messages" },
  { title: "Call Whisper" },
  { title: "Call Logs and Call History" },
  { title: "Call Logging" },
  { title: "Preview Dialer" },
  { title: "Call Scripting" },
  { title: "Inbound Call Center" },
  { title: "Call analytics and reporting" },
  { title: "Auto-Dialing" },
  { title: "Call List Management" },
  { title: "Computer Telephony" },
  { title: "Unified Communications" },
  { title: "Ring Groups" },
  { title: "Outbound Call Center" },
  { title: "Call History" },
  { title: "Voice Mail" },
  { title: "SMS Messaging" },
  { title: "Text to Speech" },
  { title: "SIP Trunking" },
  { title: "Interactive Voice Response (IVR)" },
  { title: "Virtual phone numbers" },
  { title: "International calling" },
  { title: "Reporting/Analytics" },
  { title: "Virtual Extensions" },
  { title: "Auto Dialer" },
  { title: "Statistical Analysis" },
  { title: "Call Transfer and Call Hold" },
  { title: "Call Whisper and Barge-In" },
  { title: "Call Monitoring and Whisper Coaching" },
  { title: "Call Hold" },
  { title: "Call Barging" },
  { title: "Virtual Assistant" },
  { title: "Call waiting" },
  { title: "Omni-Channel" },
  { title: "Call analytics" },
  { title: "Auto-attendant" },
  { title: "Call whispering" },
  { title: "Call analytics and insights" },
  { title: "Speech-to-text transcription" },
  { title: "Supports Audio / Images / Video" },
  { title: "Action Management" },
  { title: "Caller Identification" },
  { title: "Progressive Dialer" },
  { title: "Virtual Call Center" },
  { title: "Workforce Management" },
  { title: "Distributed Call Recording" },
  { title: "File Transfer" },
  { title: "Call Queuing" },
  { title: "Call Reporting" },
  { title: "Mobile Access" },
  { title: "For Call Centers" },
  { title: "For Developers" },
  { title: "For Sales" },
  { title: "IVR (Interactive Voice Response)" },
  { title: "Power Dialer" },
  { title: "Chat / Messaging" },
  { title: "Call Transfer" },
  { title: "Call forwarding" },
  { title: "Callback Scheduling" },
  { title: "Campaign Specific Caller ID" },
  { title: "Voicemail" },
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
