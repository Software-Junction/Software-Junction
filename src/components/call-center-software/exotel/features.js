import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Caller ID" },
  { title: "Call Center Management" },
  { title: "Call Monitoring" },
  { title: "Automatic Call Distribution" },
  { title: "SMS" },
  { title: "Lead Management" },
  { title: "IVR and Dial Groups" },
  { title: "Call Routing" },
  { title: "Customisable Welcome Greeting" },
  { title: "Inbound Reporting" },
  { title: "Outbound Reporting" },
  { title: "Multiuser Login & Role-based access control" },
  { title: "Multiple Extension" },
  { title: "Call Logs" },
  { title: "Smart Call Tracking" },
  { title: "Multiple Simultaneous Calls" },
  { title: "Toll Free Number" },
  { title: "Single Access Number" },
  { title: "Complete Messaging Platform" },
  { title: "API Integration" },
  { title: "Call Recording" },
  { title: "Call Management" },
  { title: "Lead Capture" },
  { title: "VoIP" },
];

const moreFeatures = [
  { title: "Inbound Call Center" },
  { title: "On-Demand Communications" },
  { title: "Text Messaging" },
  { title: "Application Access Control" },
  { title: "Voice Customization" },
  { title: "Scheduled Messaging" },
  { title: "Outbound Call Center" },
  { title: "Virtual Call Center" },
  { title: "Call Queuing" },
  { title: "Analytical Reports" },
  { title: "Custom Sender ID" },
  { title: "Computer Telephony" },
  { title: "Unlimited Concurrent Calls" },
  { title: "Usage Reporting" },
  { title: "Callback Scheduling" },
  { title: "Offline Response Collection" },
  { title: "Outgoing Call Tracking" },
  { title: "Call Reporting" },
  { title: "Auto Dialer" },
  { title: "Call Barging" },
  { title: "Call Conference" },
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
