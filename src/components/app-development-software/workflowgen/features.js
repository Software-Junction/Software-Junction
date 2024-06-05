import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Task Management" },
  { title: "Mobile App" },
  { title: "Data Imports/Exports" },
  { title: "Invoices" },
  { title: "Application Integration" },
  { title: "Workflow Management" },
  { title: "Audit Trail" },
  { title: "Collaboration" },
  { title: "Document Management" },
  { title: "Email Integration" },
  { title: "Resource Management" },
  { title: "Compliance Management" },
  { title: "Approval Process Control" },
  { title: "Knowledge Base" },
  { title: "Help Desk Management" },
  { title: "Task Tracking" },
  { title: "Alerts/Notifications" },
  { title: "Customizable Dashboard" },
  { title: "Configurable Workflow" },
  { title: "Event Monitoring" },
  { title: "Automatic Notifications" },
  { title: "Forms Management" },
  { title: "Graphical Workflow Editor" },
  { title: "Process Management" },
];

const moreFeatures = [
  { title: "Optimize Management" },
  { title: "Business Rules Management" },
  { title: "Data Mapping" },
  { title: "User Access Controls" },
  { title: "Process Analysis" },
  { title: "Rules-Based Workflow" },
  { title: "Process Capture" },
  { title: "Process Change Tracking" },
  { title: "Lifecycle Management" },
  { title: "Process Modeling & Design" },
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
