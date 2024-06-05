import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Lead Generation"},
    {"title": "Email Marketing / SMS Marketing"},
    {"title": "Expense Management"},
    {"title": "Email Templates"},
    {"title": "CRM & Sales Reports"},
    {"title": "Cloud Computing"},
    {"title": "Case Management"},
    {"title": "Marketing Analytics"},
    {"title": "Email Integration"},
    {"title": "CRM Analytics"},
    {"title": "Customer Management"},
    {"title": "Meeting Management"},
    {"title": "Capture Leads from Twitter/Facebooks"},
    {"title": "Customer Support"},
    {"title": "Marketing Automation"},
    {"title": "Contact Manager"},
    {"title": "Mass Email"},
    {"title": "CRM & Sales Dashboards"},
    {"title": "Marketing Collateral"},
    {"title": "Invoice"},
    {"title": "Inventory Management"},
    {"title": "Channel Management"},
    {"title": "Lead Scoring"},
    {"title": "Accounting"}
];

const moreFeatures = [
    {"title": "CRM Integration"},
    {"title": "Live Chat"},
    {"title": "Data Management"},
    {"title": "Invoice Management"},
    {"title": "Email Integration"},
    {"title": "Sales Quotes"},
    {"title": "Business Process Management"},
    {"title": "Lead Assignment"},
    {"title": "Sales Pipeline Tracking"},
    {"title": "Project Management"},
    {"title": "Lead Generation"},
    {"title": "Lead Notifications"},
    {"title": "Sales Forecasting"},
    {"title": "Email Marketing / SMS Marketing"},
    {"title": "Territory Management"},
    {"title": "Customizable CTAs"},
    {"title": "Business intelligence (BI)"},
    {"title": "Email Templates"},
    {"title": "Task Management"},
    {"title": "Mobile App"},
    {"title": "Social CRM"},
    {"title": "Alerts & Notifications"},
    {"title": "Marketing Automation"},
    {"title": "Sales Force Automation"},
    {"title": "Contact Management"},
    {"title": "Lead Management"},
    {"title": "Customer Engagement"},
    {"title": "Sales Reporting"},
    {"title": "Solution Management"},
    {"title": "Graphical Data Presentation"},
    {"title": "Multi-Channel Marketing"},
    {"title": "Data Integration"},
    {"title": "Dashboard"},
    {"title": "Lead Capture"},
    {"title": "Document Storage"},
    {"title": "Sales Automation"},
    {"title": "Marketing Reports"},
    {"title": "Sales Analytics"},
    {"title": "Contact Database"},
    {"title": "Opportunity Management"},
    {"title": "Lead Enrichment"},
    {"title": "On-Demand (SaaS)"},
    {"title": "Sales Tracking"},
    {"title": "Product Database"},
    {"title": "Customer Management"},
    {"title": "Product Catalog"},
    {"title": "Campaign Analysis"},
    {"title": "Social Media Integration"},
    {"title": "Historical Reporting"},
    {"title": "Business Process Automation"},
    {"title": "Channel Analytics"},
    {"title": "Progress Tracking"},
    {"title": "Custom Fields"},
    {"title": "A/B Testing"},
    {"title": "Web Forms"},
    {"title": "Custom Fields"},
    {"title": "Sales Performance Management"},
    {"title": "Role Based Access Control"},
    {"title": "Third Party Integration"},
    {"title": "Data Management"},
    {"title": "Progress Tracking"},
    {"title": "User Journeys"},
    {"title": "Territory Management"},
    {"title": "Lead Distribution"},
    {"title": "Sales Orders"},
    {"title": "Client Portal"},
    {"title": "Custom Fields"},
    {"title": "Lead Management"},
    {"title": "Sales Intelligence"},
    {"title": "Project Management"},
    {"title": "Email Response Control"},
    {"title": "CRM Integration"},
    {"title": "Alerts / Escalation"},
    {"title": "Multi-Channel"},
    {"title": "Sales Automation"},
    {"title": "Data Integration"},
    {"title": "Marketing Automation"},
    {"title": "Lead Management"},
    {"title": "Sales Analytics"},
    {"title": "Product Database"},
    {"title": "Social CRM"},
    {"title": "Territory Management"},
    {"title": "Multi-Channel Marketing"},
    {"title": "Customer Management"},
    {"title": "Contact Manager"},
    {"title": "Solution Management"},
    {"title": "Task Management"},
    {"title": "Sales Forecasting"},
    {"title": "Sales Tracking"},
    {"title": "Opportunity Management"},
    {"title": "Mobile App"},
    {"title": "Lead Management"},
    {"title": "Contact Management"},
    {"title": "Sales Force Automation"},
    {"title": "Business intelligence (BI)"},
    {"title": "On-Demand (SaaS)"}
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
