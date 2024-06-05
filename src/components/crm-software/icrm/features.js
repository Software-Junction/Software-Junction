import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "CRM"},
  {"title": "Lead Generation"},
  {"title": "Email Integration"},
  {"title": "CRM & Sales Reports"},
  {"title": "CRM & Sales Dashboards"},
  {"title": "Email Templates"},
  {"title": "Mass Email"},
  {"title": "Marketing Automation"},
  {"title": "Customer Support"},
  {"title": "Developer API"},
  {"title": "CRM Analytics"},
  {"title": "Marketing Analytics"},
  {"title": "Expense Management"},
  {"title": "Inventory Management"},
  {"title": "Invoice"},
  {"title": "Marketing Collateral"},
  {"title": "Cloud Computing"},
  {"title": "On-Demand (SaaS)"},
  {"title": "Capture Leads from Twitter/Facebooks"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Case Management"},
  {"title": "CRM integration"},
  {"title": "Sales Tracking"},
  {"title": "Partner Cloud (VAR or Service Provider)"}
];

const moreFeatures = [
  {"title": "Case Notes"},
  {"title": "Appointment Scheduling"},
  {"title": "Survey Management"},
  {"title": "Access control"},
  {"title": "Campaign Segmentation"},
  {"title": "Product Database"},
  {"title": "Access Controls/Permissions"},
  {"title": "Activity Tracking"},
  {"title": "Pipeline Management"},
  {"title": "Real Time Analytics"},
  {"title": "Territory Management"},
  {"title": "360° Customer View"},
  {"title": "Lead Management"},
  {"title": "Appointment Reminders"},
  {"title": "Private Cloud"},
  {"title": "Assignment Management"},
  {"title": "Solution Management"},
  {"title": "Approval Process Control"},
  {"title": "Alerts & Notifications"},
  {"title": "Call & SMS Tracking"},
  {"title": "Call Center Management"},
  {"title": "Product Catalog"},
  {"title": "Call Monitoring"},
  {"title": "To-Do List"},
  {"title": "Automated Scheduling"},
  {"title": "Opportunity Management"},
  {"title": "Web Forms"},
  {"title": "Proposal Management"},
  {"title": "Billing & Invoicing"},
  {"title": "Multi-Channel Communication"},
  {"title": "Call List Management"},
  {"title": "Campaign Personalization"},
  {"title": "Sales Quotes"},
  {"title": "Landing Pages"},
  {"title": "Import & Export Data"},
  {"title": "Interaction Tracking"},
  {"title": "Business Process Management"},
  {"title": "Sales Forecasting"},
  {"title": "Call Recording"},
  {"title": "Attendance Tracking"},
  {"title": "Team Management"},
  {"title": "Workflow Management"},
  {"title": "List Management"},
  {"title": "Asset Tracking"},
  {"title": "Calendar Sync"},
  {"title": "Call Hunting & Routing"},
  {"title": "Call Management"},
  {"title": "Social CRM"},
  {"title": "Customization"},
  {"title": "Customer DataBase"},
  {"title": "Sales Dashboards & Reports"},
  {"title": "Campaign Analysis"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Archiving"},
  {"title": "Manage Quotations"},
  {"title": "Plug-And-Play Integration"},
  {"title": "Omnichannel Communication"},
  {"title": "Activity / News Feed"},
  {"title": "Appointment Management"},
  {"title": "Candidate Tracking"},
  {"title": "Calendar/Reminder System"},
  {"title": "Field Sales Management"},
  {"title": "Access Monitoring"},
  {"title": "Inquiry Management"},
  {"title": "Application Integration"},
  {"title": "Call Hunting & Routing"},
  {"title": "Call Management"},
  {"title": "Call Center Management"},
  {"title": "Call & SMS Tracking"},
  {"title": "Appointment Scheduling"},
  {"title": "Approval Workflow"},
  {"title": "Access control"},
  {"title": "Sales Pipeline Tracking"},
  {"title": "Appointment Reminders"},
  {"title": "Automated Scheduling"},
  {"title": "Alerts & Notifications"},
  {"title": "Calendar/Reminder System"},
  {"title": "Campaign Personalization"},
  {"title": "Archiving"},
  {"title": "Candidate Tracking"},
  {"title": "Case Notes"},
  {"title": "Activity / News Feed"},
  {"title": "Categorization / Grouping"},
  {"title": "Calendar Sync"},
  {"title": "App Management"}
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
