import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Expense Management"},
  {"title": "Lead Capture"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Task Management"},
  {"title": "Sales Quotes"},
  {"title": "CRM"},
  {"title": "Data Security"},
  {"title": "Financial Management"},
  {"title": "Lead Management"},
  {"title": "Invoice"},
  {"title": "Appointment Management"},
  {"title": "Lead Distribution"},
  {"title": "Supplier Management"},
  {"title": "Mobile App"},
  {"title": "Sales Forecasting"},
  {"title": "Contact Management"},
  {"title": "CRM & Sales Reports"},
  {"title": "Referral Tracking"},
  {"title": "Project Management"},
  {"title": "Accounts Receivable"},
  {"title": "Employee Management"},
  {"title": "Activity Tracking"},
  {"title": "Proposal Generation"},
  {"title": "Multi-Location"}
];

const moreFeatures = [
  {"title": "Quote Management"},
  {"title": "Sales Dashboards & Reports"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Subscriber Management"},
  {"title": "Access Controls/Permissions"},
  {"title": "Proposal Management"},
  {"title": "Sales Management"},
  {"title": "Invoice Processing"},
  {"title": "Invoice Management"},
  {"title": "Forms Management"},
  {"title": "Quotes / Proposals"},
  {"title": "Data Analysis"},
  {"title": "Search/Filter"},
  {"title": "Client Management"},
  {"title": "Access control"},
  {"title": "Due date tracking"},
  {"title": "Multi-Account Management"},
  {"title": "Marketing Reports"},
  {"title": "Third party integrations"},
  {"title": "Analytics/ROI Tracking"},
  {"title": "Sales Reports"},
  {"title": "Web Forms"},
  {"title": "Client database"},
  {"title": "Report Export"},
  {"title": "Quotes/Estimates"},
  {"title": "Approval Workflow"},
  {"title": "Financial Reporting"},
  {"title": "Quote Management"},
  {"title": "Progress Tracking"},
  {"title": "Scheduling"},
  {"title": "Data Management"},
  {"title": "Mobile Access"},
  {"title": "Lead Notifications"},
  {"title": "Recurring Billing"},
  {"title": "Account Based Marketing"},
  {"title": "Contact Import/Export"}
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
