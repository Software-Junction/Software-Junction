import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Caller ID" },
  { title: "Conferencing" },
  { title: "IVR / Voice Recognition" },
  { title: "Call Center Management" },
  { title: "Internal Call Transfer" },
  { title: "Call Monitoring" },
  { title: "Call Management" },
  { title: "Application Integration" },
  { title: "Onboarding" },
  { title: "Real Time Monitoring" },
  { title: "Real Time Reporting" },
  { title: "Dashboard" },
  { title: "Telemarketing Management" },
  { title: "Customisable Welcome Greeting" },
  { title: "Multiple Extension" },
  { title: "Call Recording" },
  { title: "Call Logs" },
  { title: "Multiple Simultaneous Calls" },
  { title: "Toll Free Number" },
  { title: "Inbound Reporting" },
  { title: "Call Center" },
  { title: "Quality Management" },
  { title: "IVR and Dial Groups" },
  { title: "Call Routing" },
];

const moreFeatures = [
  { title: "Incoming SMS" },
  { title: "Voicemail Transcription" },
  { title: "Country Blocking" },
  { title: "Call Duration" },
  { title: "Phone Support" },
  { title: "Call Mute" },
  { title: "Mobile Line Compatibility" },
  { title: "Virtual Assistant" },
  { title: "Historical Reporting" },
  { title: "Analytics" },
  { title: "Automatic Call Distribution" },
  { title: "Computer Telephony" },
  { title: "Workforce Management" },
  { title: "Call Logging" },
  { title: "Analytical Reports" },
  { title: "VoIP" },
  { title: "Outgoing Call Tracking" },
  { title: "Email Notifications" },
  { title: "Call Reporting" },
  { title: "Inbound Call Center" },
  { title: "For Call Centers" },
  { title: "Call Disposition and Notes" },
  { title: "Call Control" },
  { title: "Unlimited Concurrent Calls" },
  { title: "International Numbers" },
  { title: "Outbound Caller ID" },
  { title: "Personalized Greetings" },
  { title: "IVR System" },
  { title: "Skill Based Routing" },
  { title: "Forward to Phone" },
  { title: "Enhanced Caller ID" },
  { title: "Knowledge Base" },
  { title: "Blended Call Center" },
  { title: "Virtual Call Center" },
  { title: "Call Queuing" },
  { title: "Call Sharing" },
  { title: "Desktop Notifications" },
  { title: "Call Results" },
  { title: "Call Transfer" },
  { title: "Callback Scheduling" },
  { title: "Reporting" },
  { title: "Dashboards & Analytics" },
  { title: "Email Support" },
  { title: "Virtual Extensions" },
  { title: "Call Hold" },
  { title: "Call Barging" },
  { title: "Call Conference" },
  { title: "Warm Transfer" },
  { title: "Blind Transfer" },
  { title: "Multi Lingual IVR" },
  { title: "Call Cascading" },
  { title: "Incoming Call ID" },
  { title: "Call Hold Music" },
  { title: "Call Volume" },
  { title: "Queue Management" },
  { title: "Interactive Voice Response" },
  { title: "Call Parking" },
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
