import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Call Center" },
  { title: "Mobile App" },
  { title: "CRM integration" },
  { title: "SMS" },
  { title: "Lead Management" },
  { title: "Real Time Reporting" },
  { title: "Caller ID" },
  { title: "Conferencing" },
  { title: "Toll Free Number" },
  { title: "Call Management" },
  { title: "Auto-Dialer" },
  { title: "Multiple Extension" },
  { title: "Multiple Accessline" },
  { title: "API Integration" },
  { title: "Call Recording" },
  { title: "Call Center Management" },
  { title: "Call Logs" },
  { title: "Voicemails" },
  { title: "Smart Call Tracking" },
  { title: "Call Monitoring" },
  { title: "IVR and Dial Groups" },
  { title: "Call Routing" },
  { title: "Internal Call Transfer" },
  { title: "Customisable Welcome Greeting" },
];

const moreFeatures = [
  { title: "Call Cascading" },
  { title: "Incoming Call ID" },
  { title: "Outbound Reporting" },
  { title: "Call Hold Music" },
  { title: "Phone Support" },
  { title: "Call Duration" },
  { title: "Caller Identification" },
  { title: "IVR / Voice Recognition" },
  { title: "Blended Call Center" },
  { title: "Telemarketing Management" },
  { title: "Voice & Data Integration" },
  { title: "Activity Tracking" },
  { title: "Inbound Reporting" },
  { title: "Lead Capture" },
  { title: "Lead Nurturing" },
  { title: "Lead Segmentation" },
  { title: "Analytics" },
  { title: "Call Logging" },
  { title: "Automatic Call Distribution" },
  { title: "Inbound Call Center" },
  { title: "Virtual Call Center" },
  { title: "Call Sharing" },
  { title: "Call Queuing" },
  { title: "Analytical Reports" },
  { title: "Outgoing Call Tracking" },
  { title: "Call Reporting" },
  { title: "For Call Centers" },
  { title: "For Onboarding" },
  { title: "For Sales" },
  { title: "Call Disposition and Notes" },
  { title: "Call Control" },
  { title: "IVR System" },
  { title: "Built-In CRM" },
  { title: "Automated Tasks" },
  { title: "Call Results" },
  { title: "Lead Distribution" },
  { title: "Call Barging" },
  { title: "Call Conference" },
  { title: "Multi Lingual IVR" },
  { title: "Auto Dialer" },
  { title: "Call Transfer" },
  { title: "Callback Scheduling" },
  { title: "Auto-Dialing" },
  { title: "Call List Management" },
  { title: "Virtual Extensions" },
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
