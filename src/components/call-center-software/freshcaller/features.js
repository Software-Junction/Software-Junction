import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Key Performance Indicators" },
  { title: "Historical Reporting" },
  { title: "Workflow Management" },
  { title: "Outbound Call Center" },
  { title: "Virtual Call Center" },
  { title: "Automatic Call Distribution" },
  { title: "Call Center" },
  { title: "Conferencing" },
  { title: "Call Center Management" },
  { title: "Call Monitoring" },
  { title: "Call Management" },
  { title: "Call Logs" },
  { title: "IVR and Dial Groups" },
  { title: "Call Routing" },
  { title: "Call Recording" },
  { title: "IVR / Voice Recognition" },
  { title: "Real Time Monitoring" },
  { title: "VoIP" },
  { title: "Computer Telephony" },
  { title: "Call Sharing" },
  { title: "Knowledge Base" },
  { title: "Call Logging" },
  { title: "Inbound Call Center" },
  { title: "Manual Dialer" },
];

const moreFeatures = [
  { title: "On-Demand Recording" },
  { title: "Data Import & Export" },
  { title: "Gamification" },
  { title: "Call Reporting" },
  { title: "For Call Centers" },
  { title: "For Sales" },
  { title: "International Numbers" },
  { title: "IVR System" },
  { title: "Forward to Phone" },
  { title: "Call Transfer" },
  { title: "CRM integration" },
  { title: "Call recording" },
  { title: "Live Chat" },
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
