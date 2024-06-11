import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Sales Force Automation"},
  {"title": "Cloud Computing"},
  {"title": "Appointment Management"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Sales Forecasting"},
  {"title": "Sales Tracking"},
  {"title": "Lead Generation"},
  {"title": "Developer API"},
  {"title": "CRM Analytics"},
  {"title": "Marketing Analytics"},
  {"title": "Lead Management"},
  {"title": "Field Sales Management"},
  {"title": "Opportunity Management"},
  {"title": "Email Integration"},
  {"title": "On-Demand (SaaS)"},
  {"title": "CRM & Sales Reports"},
  {"title": "Expense Management"},
  {"title": "Customer DataBase"},
  {"title": "Territory Management"},
  {"title": "Mobile App"},
  {"title": "Marketing Collateral"},
  {"title": "Plug-And-Play Integration"},
  {"title": "Email Templates"}
];

const moreFeatures = [
  {"title": "Proposal Management"},
  {"title": "Access Monitoring"},
  {"title": "Lead Scoring"},
  {"title": "Campaign Management"},
  {"title": "Real Time Analytics"},
  {"title": "Dashboard"},
  {"title": "Workflow Management"},
  {"title": "Call Center Management"},
  {"title": "List Management"},
  {"title": "Web Forms"},
  {"title": "Pipeline Management"},
  {"title": "Interaction Tracking"},
  {"title": "Customization"},
  {"title": "Inquiry Management"},
  {"title": "Team Management"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Landing Pages"},
  {"title": "Import & Export Data"},
  {"title": "Contract Management"}
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
