import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Inventory control" },
  { title: "Customer DataBase" },
  { title: "Data Imports/Exports" },
  { title: "Field Sales Management" },
  { title: "Application Integration" },
  { title: "Collaboration Tools" },
  { title: "Asset Management" },
  { title: "CRM" },
  { title: "Email Integration" },
  { title: "Event Calendar" },
  { title: "Event Management" },
  { title: "Inventory Management" },
  { title: "Project Management" },
  { title: "Customer Management" },
  { title: "Recruitment Management" },
  { title: "Assignment Management" },
  { title: "Collaboration" },
  { title: "File Sharing" },
  { title: "Document Storage" },
  { title: "Workflow Management" },
  { title: "Task Management" },
  { title: "Time Tracking" },
  { title: "Lead Management" },
  { title: "Contact Management" },
];

const moreFeatures = [
  { title: "Resource Management" },
  { title: "Status Tracking" },
  { title: "Testing / QA Management" },
  { title: "Email Tracking" },
  { title: "Project Budgeting" },
  { title: "Project Templates" },
  { title: "Activity Tracking" },
  { title: "Pipeline Management" },
  { title: "Lead Nurturing" },
  { title: "Email Management" },
  { title: "Accounting Integration" },
  { title: "Budget Management" },
  { title: "Bug Tracking" },
  { title: "Gantt Charts" },
  { title: "Issue Management" },
  { title: "Milestone Tracking" },
  { title: "Percent-Complete Tracking" },
  { title: "Portfolio Management" },
  { title: "Project Planning" },
  { title: "Requirements Management" },
  { title: "Business Process Automation" },
  { title: "Cross Platform" },
  { title: "Push Notifications" },
  { title: "Progress Tracking" },
  { title: "Template Management" },
  { title: "Time Management" },
  { title: "Asset Tracking" },
  { title: "For Sales" },
  { title: "Asset Sharing" },
  { title: "Templates" },
  { title: "Third party integrations" },
  { title: "Due date tracking" },
  { title: "Dashboard" },
  { title: "Sales pipeline management" },
  { title: "Search" },
  { title: "Allocation" },
  { title: "Drag & Drop" },
  { title: "Prioritization" },
  { title: "Agile Methodologies" },
  { title: "Product Roadmapping" },
  { title: "Supports Agile" },
  { title: "Flowchart" },
  { title: "Process/Workflow Automation" },
  { title: "Access Controls/Permissions" },
  { title: "HR Management" },
  { title: "Workflow Configuration" },
  { title: "Document Control" },
  { title: "Kanban Board" },
  { title: "Search/Filter" },
  { title: "E-forms" },
  { title: "Recurring Task Management" },
  { title: "Editorial Calendar" },
  { title: "Recurring Issues" },
  { title: "Ticket/Issue Tracking" },
  { title: "Functions / Calculations" },
  { title: "Themes" },
  { title: "Visual Analytics" },
  { title: "Iteration Planning" },
  { title: "Visual Workflow Management" },
  { title: "Gantt/Timeline View" },
  { title: "Procurement Management" },
  { title: "Scheduling" },
  { title: "Calendar Management" },
  { title: "Project Tracking" },
  { title: "Forms Management" },
  { title: "Email Monitoring" },
  { title: "Client Management" },
  { title: "Team Management" },
  { title: "Item Management" },
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
