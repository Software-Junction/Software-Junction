import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Knowledge Management"},
  {"title": "Sales Force Automation"},
  {"title": "Call Management"},
  {"title": "Social CRM"},
  {"title": "Sales Management"},
  {"title": "Call Logging"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "CRM"},
  {"title": "Mobile Access"},
  {"title": "Customer Management"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Contact Management"},
  {"title": "Self Service Portal"},
  {"title": "Social Media Integration"},
  {"title": "Opportunity Management"},
  {"title": "Lead Management"},
  {"title": "Customer Support"},
  {"title": "Document Storage"},
  {"title": "Call Center Management"},
  {"title": "Sales pipeline management"}
];

const moreFeatures = [
  {"title": "Segmentation"},
  {"title": "Live Chat"},
  {"title": "Knowledge Base"},
  {"title": "Service History Tracking"},
  {"title": "Knowledge Base Management"},
  {"title": "Contact Import/Export"},
  {"title": "Internal Chat Integration"},
  {"title": "Ticketing"},
  {"title": "Ticket/Issue Tracking"},
  {"title": "Knowledge Library"}
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

          {isShowMore && 
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
          }
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
