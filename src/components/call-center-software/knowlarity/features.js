import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Mobile App" },
  { title: "Multiuser Login & Role-based access control" },
  { title: "Multiple Extension" },
  { title: "Multiple Accessline" },
  { title: "API Integration" },
  { title: "Call Recording" },
  { title: "Call Logs" },
  { title: "Smart Call Tracking" },
  { title: "CRM integration" },
  { title: "Lead Management" },
  { title: "Call Routing" },
  { title: "Internal Call Transfer" },
  { title: "Customisable Welcome Greeting" },
  { title: "Multiple Simultaneous Calls" },
  { title: "Caller ID" },
  { title: "Conferencing" },
  { title: "Auto-Dialer" },
  { title: "Call Monitoring" },
  { title: "Single Access Number" },
  { title: "Inbound Reporting" },
  { title: "Toll Free Number" },
  { title: "Real Time Reporting" },
  { title: "Call Management" },
  { title: "Dashboard" },
];

const moreFeatures = [
  { title: "Telemarketing Management" },
  { title: "Progressive Dialer" },
  { title: "Outbound Reporting" },
  { title: "Outgoing Call Tracking" },
  { title: "IVR System" },
  { title: "Call Reporting" },
  { title: "International Numbers" },
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
