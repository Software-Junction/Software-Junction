import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Task Management" },
  { title: "Email Integration" },
  { title: "Time Tracking" },
  { title: "Employee Scheduling" },
  { title: "Workflow Management" },
  { title: "Event Management" },
  { title: "Financial Management" },
  { title: "Document Management" },
  { title: "Asset Management" },
  { title: "Project Management" },
  { title: "Collaboration" },
  { title: "Accounting Integration" },
  { title: "Mobile App" },
  { title: "Invoices" },
  { title: "Data Imports/Exports" },
  { title: "Performance Metrics" },
  { title: "Onboarding" },
  { title: "File Sharing" },
  { title: "Event Calendar" },
  { title: "Employee Management" },
  { title: "Real Time Reporting" },
  { title: "Budget Management" },
  { title: "Reminders" },
  { title: "Collaboration Tools" },
];

const moreFeatures = [
  { title: "Project Management" },
  { title: "Gantt Charts" },
  { title: "Resource Management" },
  { title: "Task Tracking" },
  { title: "Time & Expense Tracking" },
  { title: "Billing & Invoicing" },
  { title: "Scheduling" },
  { title: "Approval Process Control" },
  { title: "Calendar Management" },
  { title: "Task Planning" },
  { title: "Dashboard" },
  { title: "Customizable Reporting" },
  { title: "Milestone Tracking" },
  { title: "Goal Management" },
  { title: "Performance Appraisal" },
  { title: "Campaign Management" },
  { title: "Sales & Operations Planning" },
  { title: "Procurement Management" },
  { title: "Backlog Management" },
  { title: "Process Management" },
  { title: "Asset Budgeting" },
  { title: "Job Scheduling" },
  { title: "Documentation Management" },
  { title: "Proposal Management" },
  { title: "Marketing Management" },
  { title: "Team Management" },
  { title: "Time Management" },
  { title: "Discussion Boards" },
  { title: "Online Time Tracking" },
  { title: "Automated Scheduling" },
  { title: "Report Templates" },
  { title: "Reporting/Analytics" },
  { title: "Cost-to-Completion Tracking" },
  { title: "Product Roadmapping" },
  { title: "Milestones" },
  { title: "Task Dependencies" },
  { title: "Deadlines" },
  { title: "Access Controls/Permissions" },
  { title: "Business Process Control" },
  { title: "Calendar/Reminder System" },
  { title: "Time Clock" },
  { title: "Document Control" },
  { title: "Kanban Board" },
  { title: "Goal Setting" },
  { title: "Electronic Forms" },
  { title: "Real Time Editing" },
  { title: "Automated Review & Approval" },
  { title: "Goal Tracking" },
  { title: "Alerts / Escalation" },
  { title: "Online Registration" },
  { title: "Tagging" },
  { title: "Gantt/Timeline View" },
  { title: "Multi-board" },
  { title: "Request Management" },
  { title: "Project Scheduling" },
  { title: "Forms Automation" },
  { title: "Financial Templates" },
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
