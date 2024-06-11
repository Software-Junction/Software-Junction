import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "IVR and Dial Groups" },
  { title: "Call Routing" },
  { title: "API Integration" },
  { title: "Call Recording" },
  { title: "Call Logs" },
  { title: "Smart Call Tracking" },
  { title: "Mobile App" },
  { title: "Contact Management" },
  { title: "Real Time Monitoring" },
  { title: "Workflow Management" },
  { title: "Activity Tracking" },
  { title: "Campaign Management" },
  { title: "Toll Free Number" },
  { title: "Call Management" },
  { title: "CRM integration" },
  { title: "SMS" },
  { title: "Training Management" },
  { title: "Call Center" },
  { title: "Applications Management" },
  { title: "Historical Reporting" },
  { title: "Analytics" },
  { title: "Scheduling" },
  { title: "Collaboration" },
  { title: "Dashboard" },
];

const moreFeatures = [
  { title: "Key Performance Indicators" },
  { title: "Caller ID" },
  { title: "Voice & Data Integration" },
  { title: "VoIP" },
  { title: "Automatic Call Distribution" },
  { title: "Blended Call Center" },
  { title: "Call Logging" },
  { title: "Call Scripting" },
  { title: "Inbound Call Center" },
  { title: "Conferencing" },
  { title: "Call Center Management" },
  { title: "Telemarketing Management" },
  { title: "Call Monitoring" },
  { title: "Inbound Reporting" },
  { title: "Outbound Reporting" },
  { title: "IVR / Voice Recognition" },
  { title: "Skill Based Routing" },
  { title: "Power Dialer" },
  { title: "Data import and Synchronization" },
  { title: "IVR System" },
  { title: "Audio / Video Conferencing" },
  { title: "Manual Dialer" },
  { title: "Outbound Call Center" },
  { title: "Call Results" },
  { title: "Call Transfer" },
  { title: "Auto-Dialing" },
  { title: "Speech Recognition" },
  { title: "Queue Manager" },
  { title: "Virtual Call Center" },
  { title: "Call Sharing" },
  { title: "Call Queuing" },
  { title: "Analytical Reports" },
  { title: "Sentiment Analysis" },
  { title: "Data Analysis" },
  { title: "Call Reporting" },
  { title: "For Sales" },
  { title: "Call Conference" },
  { title: "Warm Transfer" },
  { title: "Blind Transfer" },
  { title: "Multi Lingual IVR" },
  { title: "Call Hold Music" },
  { title: "Incoming SMS" },
  { title: "Outgoing SMS" },
  { title: "Voicemail Transcription" },
  { title: "Call Duration" },
  { title: "Caller Identification" },
  { title: "Text to Speech" },
  { title: "Call Disposition and Notes" },
  { title: "Queue Management" },
  { title: "Encryption" },
  { title: "Auto Dialer" },
  { title: "Call Hold" },
  { title: "Call Barging" },
  { title: "Statistical Analysis" },
  { title: "Rating" },
  { title: "International Numbers" },
  { title: "Phone Support" },
  { title: "Call Mute" },
  { title: "Archiving" },
  { title: "Interactive Voice Response" },
  { title: "Personalized Greetings" },
  { title: "Reporting/Analytics" },
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
                  <span style={{ color: "#f95738 " }}>
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
                  <span style={{ color: "#f95738 " }}>
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
