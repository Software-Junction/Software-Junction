import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "API Integration" },
  { title: "Complete Messaging Platform" },
  { title: "Call Recording" },
  { title: "Call Management" },
  { title: "Call Logs" },
  { title: "Single Access Number" },
  { title: "Smart Call Tracking" },
  { title: "Toll Free Number" },
  { title: "Multiple Simultaneous Calls" },
  { title: "CRM" },
  { title: "Multiuser Login & Role-based access control" },
  { title: "SMS" },
  { title: "Training Management" },
  { title: "Call Center" },
  { title: "CRM integration" },
  { title: "Lead Management" },
  { title: "Customisable Welcome Greeting" },
  { title: "Multiple Extension" },
  { title: "Mobile App" },
  { title: "Multiple Accessline" },
  { title: "Contact Management" },
  { title: "IVR and Dial Groups" },
  { title: "Call Routing" },
  { title: "Internal Call Transfer" },
];

const moreFeatures = [
  { title: "Performance Metrics" },
  { title: "Application Integration" },
  { title: "Self Service Portal" },
  { title: "Real Time Monitoring" },
  { title: "Real Time Reporting" },
  { title: "Billing & Invoicing" },
  { title: "Dashboard" },
  { title: "Key Performance Indicators" },
  { title: "Caller ID" },
  { title: "Conferencing" },
  { title: "Call Center Management" },
  { title: "Call Monitoring" },
  { title: "Inbound Reporting" },
  { title: "IVR / Voice Recognition" },
  { title: "Outbound Reporting" },
  { title: "Predictive Dialer" },
  { title: "Telemarketing Management" },
  { title: "Voice & Data Integration" },
  { title: "VoIP" },
  { title: "Activity Tracking" },
  { title: "Lead Distribution" },
  { title: "Campaign Management" },
  { title: "Historical Reporting" },
  { title: "Analytics" },
  { title: "Automatic Call Distribution" },
  { title: "Computer Telephony" },
  { title: "Blended Call Center" },
  { title: "Call Logging" },
  { title: "Call Scripting" },
  { title: "Inbound Call Center" },
  { title: "Manual Dialer" },
  { title: "Outbound Call Center" },
  { title: "Progressive Dialer" },
  { title: "Virtual Call Center" },
  { title: "Distributed Call Recording" },
  { title: "Contact Database" },
  { title: "Event Triggered Actions" },
  { title: "Multi-Campaign" },
  { title: "Remarketing" },
  { title: "Call Queuing" },
  { title: "Analytical Reports" },
  { title: "Custom Sender ID" },
  { title: "Outgoing Call Tracking" },
  { title: "Reporting" },
  { title: "Email Notifications" },
  { title: "Sentiment Analysis" },
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
