import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Document Management"},
  {"title": "Proposal Management"},
  {"title": "Customer Support"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Lead Scoring"},
  {"title": "Campaign Management"},
  {"title": "Performance Management"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Workflow Management"},
  {"title": "Interaction Tracking"},
  {"title": "Web Forms"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "List Management"},
  {"title": "CRM Analytics"},
  {"title": "Marketing Automation"},
  {"title": "Pipeline Management"},
  {"title": "Lead Management"},
  {"title": "Dashboard"},
  {"title": "Customization"},
  {"title": "Sales Tracking"},
  {"title": "Solution Management"},
  {"title": "Social CRM"},
  {"title": "Contact Manager"},
  {"title": "Project Management"},
  {"title": "Supplier and Purchase Order Management"},
  {"title": "Marketing Analytics"}
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
          {/* {moreFeatures.map((featureM, index) => (
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
          ))} */}
          </>
          }
          {/* <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Features;
