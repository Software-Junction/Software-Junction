import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Appointment Management"},
  {"title": "Lead Scoring"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Marketing Analytics"},
  {"title": "Field Sales Management"},
  {"title": "Lead Management"},
  {"title": "Custom Fields"},
  {"title": "CRM Analytics"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Sales Tracking"},
  {"title": "Mass Email"},
  {"title": "CRM & Sales Reports"},
  {"title": "Email Templates"},
  {"title": "Lead Generation"},
  {"title": "Data Security"},
  {"title": "Customer Support"},
  {"title": "Capture Leads from Twitter/Facebooks"},
  {"title": "On-Demand (SaaS)"},
  {"title": "CRM integration"},
  {"title": "Call Management"},
  {"title": "Customer Management"},
  {"title": "Marketing Automation"},
  {"title": "Customer Engagement"},
  {"title": "Application Integration"}
];

const moreFeatures = [
  {"title": "Web Forms"},
  {"title": "Customization"},
  {"title": "Data Deduplication"},
  {"title": "Landing Pages"},
  {"title": "Customizable Templates"},
  {"title": "Conversion Tracking"},
  {"title": "Data Import / Export"},
  {"title": "Contact Manager"},
  {"title": "Data Integration"},
  {"title": "Analytics"},
  {"title": "Campaign Tracking"},
  {"title": "Data Visualization"},
  {"title": "Automated Routing"},
  {"title": "Chat / Messaging"},
  {"title": "Client Management"},
  {"title": "Campaign Personalization"},
  {"title": "Data Mapping"},
  {"title": "360° Customer View"},
  {"title": "Data Protection"},
  {"title": "Import & Export Data"},
  {"title": "Call & SMS Tracking"},
  {"title": "Auto-Responders"},
  {"title": "Contact History"},
  {"title": "Data Source Integrations"},
  {"title": "Data Source Connectors"},
  {"title": "Data Capture and Transfer"},
  {"title": "Data Entry"},
  {"title": "Data Verification"},
  {"title": "Branch workflows based on dynamic if-then analysis"},
  {"title": "Campaign Management"},
  {"title": "Behavioral Mapping"},
  {"title": "Check-in / Check-out"},
  {"title": "Collections Management"},
  {"title": "Account Management"},
  {"title": "1-click installationWorks with GoogleApps"},
  {"title": "Demographic Data"},
  {"title": "Data Export"}
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
