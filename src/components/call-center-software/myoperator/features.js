import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Call Center" },
  { title: "SMS" },
  { title: "Auto-Dialer" },
  { title: "Multiuser Login & Role-based access control" },
  { title: "Mobile App" },
  { title: "Lead Management" },
  { title: "Complete Messaging Platform" },
  { title: "API Integration" },
  { title: "Call Recording" },
  { title: "Call Logs" },
  { title: "Smart Call Tracking" },
  { title: "Multiple Simultaneous Calls" },
  { title: "Toll Free Number" },
  { title: "Single Access Number" },
  { title: "Call Management" },
  { title: "Real Time Reporting" },
  { title: "IVR and Dial Groups" },
  { title: "Call Routing" },
  { title: "Internal Call Transfer" },
  { title: "Contact Management" },
  { title: "Online Fax" },
  { title: "Customisable Welcome Greeting" },
  { title: "Multiple Extension" },
  { title: "Multiple Accessline" },
];

const moreFeatures = [
  { title: "Call Monitoring" },
  { title: "Inbound Reporting" },
  { title: "Outbound Reporting" },
  { title: "Call Center Management" },
  { title: "IVR / Voice Recognition" },
  { title: "Multi-Campaign" },
  { title: "Remarketing" },
  { title: "Analytical Reports" },
  { title: "Custom Sender ID" },
  { title: "Outgoing Call Tracking" },
  { title: "Call Queuing" },
  { title: "Email Notifications" },
  { title: "Call Reporting" },
  { title: "Mobile Access" },
  { title: "For Sales" },
  { title: "Communication Management" },
  { title: "Call Disposition and Notes" },
  { title: "Call Control" },
  { title: "Unlimited Concurrent Calls" },
  { title: "Outbound Caller ID" },
  { title: "IVR System" },
  { title: "Skill Based Routing" },
  { title: "Forward to Phone" },
  { title: "International Numbers" },
  { title: "Voice & Data Integration" },
  { title: "VoIP" },
  { title: "Historical Reporting" },
  { title: "Instant Message Delivery" },
  { title: "Virtual Call Center" },
  { title: "Lead Nurturing" },
  { title: "Text to Speech" },
  { title: "Chat / Messaging" },
  { title: "Call Transfer" },
  { title: "Call recording" },
  { title: "Auto-Dialing" },
  { title: "Campaign Tracking" },
  { title: "Call Hold Music" },
  { title: "Telephony" },
  { title: "Auto Dialer" },
  { title: "Call Hold" },
  { title: "Multi Lingual IVR" },
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
                  <span style={{ color: "#f95738 " }}>
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
