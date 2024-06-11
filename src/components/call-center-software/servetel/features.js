import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Multiple Simultaneous Calls" },
  { title: "Toll Free Number" },
  { title: "Single Access Number" },
  { title: "Call Center Management" },
  { title: "Call Monitoring" },
  { title: "Inbound Reporting" },
  { title: "CRM integration" },
  { title: "Multiuser Login & Role-based access control" },
  { title: "Call Center" },
  { title: "Mobile App" },
  { title: "Call Management" },
  { title: "Real Time Reporting" },
  { title: "Caller ID" },
  { title: "Auto-Dialer" },
  { title: "Lead Management" },
  { title: "Call Routing" },
  { title: "Internal Call Transfer" },
  { title: "Customisable Welcome Greeting" },
  { title: "Multiple Extension" },
  { title: "Smart Call Tracking" },
  { title: "Multiple Accessline" },
  { title: "API Integration" },
  { title: "Call Recording" },
  { title: "Call Logs" },
];

const moreFeatures = [
  { title: "Custom Sender ID" },
  { title: "Outgoing Call Tracking" },
  { title: "Phone Support" },
  { title: "Call Reporting" },
  { title: "International Numbers" },
  { title: "Call Hold" },
  { title: "Call Barging" },
  { title: "Personalized Greetings" },
  { title: "IVR System" },
  { title: "Chat / Messaging" },
  { title: "Progressive Dialer" },
  { title: "Virtual Call Center" },
  { title: "Call Queuing" },
  { title: "Analytical Reports" },
  { title: "Dashboard" },
  { title: "Auto Dialer" },
  { title: "Manual Dialer" },
  { title: "Call Hold Music" },
  { title: "Outgoing SMS" },
  { title: "IVR / Voice Recognition" },
  { title: "Outbound Reporting" },
  { title: "Call Logging" },
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
