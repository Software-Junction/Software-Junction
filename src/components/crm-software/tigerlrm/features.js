import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Call Recording"},
  {"title": "Mass Email"},
  {"title": "CRM & Sales Reports"},
  {"title": "Forecasting"},
  {"title": "Email Integration"},
  {"title": "Customer Support"},
  {"title": "Sales Forecasting"},
  {"title": "CRM Analytics"},
  {"title": "Point of Sale (POS)"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Lead Management"},
  {"title": "Employee Management"},
  {"title": "Resource Management"},
  {"title": "On-Demand (SaaS)"},
  {"title": "Call Monitoring"},
  {"title": "Sales Tracking"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Marketing Automation"},
  {"title": "Payment Processing"},
  {"title": "Customer DataBase"},
  {"title": "Sales Force Automation"},
  {"title": "Lead Capture"},
  {"title": "Sales Management"},
  {"title": "Project Management"}
];

const moreFeatures = [
  {"title": "Client Management"},
  {"title": "Lead Distribution"},
  {"title": "Call Reporting"},
  {"title": "Lead Scoring"},
  {"title": "Lead Segmentation"},
  {"title": "Calendar Management"},
  {"title": "Access Controls/Permissions"},
  {"title": "Website Visitor Tracking"},
  {"title": "Reporting & statistics"},
  {"title": "Mobile Access"},
  {"title": "List Management"},
  {"title": "Auto-Responders"},
  {"title": "Media Library"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Email Marketing"},
  {"title": "Online Payment Processing"},
  {"title": "Audience Segmentation"},
  {"title": "Sales pipeline management"},
  {"title": "Employee Database"},
  {"title": "Access Monitoring"},
  {"title": "Mobile Payments"},
  {"title": "Quotes/Proposals"},
  {"title": "Campaign Personalization"},
  {"title": "Digital Asset Management"},
  {"title": "Goal Tracking"},
  {"title": "Alerts / Escalation"},
  {"title": "Contact Import/Export"},
  {"title": "Sales Intelligence"},
  {"title": "Lead Enrichment"},
  {"title": "Lead Notifications"},
  {"title": "Customer Targeting"},
  {"title": "Segmentation"},
  {"title": "Audience Targeting"}
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
