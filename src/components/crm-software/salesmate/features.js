import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Sales Tracking"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Lead Generation"},
  {"title": "Sales Quotes"},
  {"title": "Email Integration"},
  {"title": "CRM"},
  {"title": "CRM integration"},
  {"title": "Customer Support"},
  {"title": "Document Management"},
  {"title": "Workflow Management"},
  {"title": "Mass Email"},
  {"title": "Sales Force Automation"},
  {"title": "CRM & Sales Reports"},
  {"title": "Sales Forecasting"},
  {"title": "Dashboard"},
  {"title": "Lead Management"},
  {"title": "Pipeline Management"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "On-Demand (SaaS)"},
  {"title": "Contact Manager"}
];

const moreFeatures = [
  {"title": "Customization"},
  {"title": "Email Templates"},
  {"title": "Customer DataBase"},
  {"title": "Marketing Automation"},
  {"title": "Sales Dashboards & Reports"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Contact Manager"},
  {"title": "Real Time Analytics"},
  {"title": "Inquiry Management"},
  {"title": "List Management"},
  {"title": "Interaction Tracking"},
  {"title": "Contract Management"},
  {"title": "Landing Pages"},
  {"title": "Web Forms"},
  {"title": "Import & Export Data"},
  {"title": "Omnichannel Communication"},
  {"title": "Call & SMS Tracking"}
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
