import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Email Integration"},
  {"title": "Lead Generation"},
  {"title": "Sales Quotes"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Document Management"},
  {"title": "Customer Support"},
  {"title": "CRM Analytics"},
  {"title": "Project Management"},
  {"title": "Inventory Management"},
  {"title": "CRM & Sales Reports"},
  {"title": "Task Management"},
  {"title": "Marketing Automation"},
  {"title": "Mass Email"},
  {"title": "Supplier and Purchase Order Management"},
  {"title": "On-Demand (SaaS)"},
  {"title": "Developer API"},
  {"title": "Private Cloud"},
  {"title": "Invoice"},
  {"title": "Contact Manager"},
  {"title": "Sales Tracking"},
  {"title": "Lead Management"},
  {"title": "Territory Management"},
  {"title": "Accounting"}
];

const moreFeatures = [
  {"title": "Customer Segmentation"},
  {"title": "Mobile App"},
  {"title": "Sales Force Automation"},
  {"title": "Pipeline Management"},
  {"title": "Opportunity Management"},
  {"title": "Appointment Management"},
  {"title": "Dashboard"},
  {"title": "Contact Management"},
  {"title": "Sales Forecasting"},
  {"title": "Lead Scoring"},
  {"title": "IVR / Voice Recognition"},
  {"title": "Campaign Segmentation"},
  {"title": "Document Management"},
  {"title": "Multi-Currency"},
  {"title": "Real Time Analytics"},
  {"title": "Import & Export Data"},
  {"title": "Inquiry Management"},
  {"title": "Web Forms"},
  {"title": "Access Monitoring"},
  {"title": "Live Chat"},
  {"title": "Audience Targeting"},
  {"title": "Scheduling"},
  {"title": "Interaction Tracking"},
  {"title": "Product Catalog"},
  {"title": "Customization"},
  {"title": "For Sales"},
  {"title": "Sales pipeline management"},
  {"title": "Document Templates"},
  {"title": "Funnel Analysis"},
  {"title": "Website Analytics"},
  {"title": "Visual Editor"},
  {"title": "Split Testing"},
  {"title": "Statistical Relevance Analysis"},
  {"title": "Test Scheduling"},
  {"title": "Behavioral Mapping"},
  {"title": "Dynamic Maps"},
  {"title": "Element Analytics"},
  {"title": "Heatmaps"}
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
