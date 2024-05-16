import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Task Planning" },
  { title: "Alerts/Notifications" },
  { title: "Document Storage" },
  { title: "Workflow Management" },
  { title: "Budget Management" },
  { title: "Gantt Charts" },
  { title: "Issue Management" },
  { title: "Portfolio Management" },
  { title: "Project Planning" },
  { title: "Project Budgeting" },
  { title: "Project Templates" },
  { title: "Billing & Invoicing" },
  { title: "Budgeting & Forecasting" },
  { title: "Activity Tracking" },
  { title: "Version Control" },
  { title: "Issue Tracking" },
  { title: "Third Party Integration" },
  { title: "Activity Dashboard" },
  { title: "Task Planning" },
  { title: "Alerts/Notifications" },
  { title: "Application Integration" },
  { title: "Email Integration" },
  { title: "Task Management" },
  { title: "Data Imports/Exports" },
];

const moreFeatures = [
  { title: "Gantt Charts" },
  { title: "Issue Management" },
  { title: "Portfolio Management" },
  { title: "Project Planning" },
  { title: "Project Budgeting" },
  { title: "Project Templates" },
  { title: "Budgeting & Forecasting" },
  { title: "Application Integration" },
  { title: "File Sharing" },
  { title: "Timesheet Management" },
  { title: "Document Storage" },
  { title: "Billing & Invoicing" },
  { title: "Workflow Management" },
  { title: "Budget Management" },
  { title: "Animation" },
  { title: "Activity Tracking" },
  { title: "Version Control" },
  { title: "Third Party Integration" },
  { title: "Activity Dashboard" },
  { title: "Administrator Level Control" },
  { title: "Issue Tracking" },
  { title: "Agenda Management" },
  { title: "Access control" },
  { title: "Customizable Dashboard" },
  { title: "Customizable Templates" },
  { title: "Cost Tracking" },
  { title: "Documentation Management" },
  { title: "Progress Tracking" },
  { title: "Template Management" },
  { title: "Two-Factor Authentication" },
  { title: "Chat / Messaging" },
  { title: "Group Calendars" },
  { title: "Team Chat" },
  { title: "Billable & Non-Billable Hours" },
  { title: "Mobile Time Tracking" },
  { title: "Approval Workflow" },
  { title: "Customizable" },
  { title: "Access control" },
  { title: "Third party integrations" },
  { title: "Reporting & statistics" },
  { title: "Allocation" },
  { title: "Drag & Drop" },
  { title: "Filtering" },
  { title: "Daily Reports" },
  { title: "Team Collaboration" },
  { title: "Reporting/Analytics" },
  { title: "Billing & Quotes" },
  { title: "Create Subtasks" },
  { title: "Timeline Bar Chart" },
  { title: "Gantt Bar" },
  { title: "Milestones" },
  { title: "Color-Coding" },
  { title: "Task Dependencies" },
  { title: "Critical Path" },
  { title: "Process/Workflow Automation" },
  { title: "Budget Tracking/Job Costing" },
  { title: "Calendar/Reminder System" },
  { title: "Report Export" },
  { title: "Kanban Board" },
  { title: "Color Coding" },
  { title: "Flexible Search" },
  { title: "Alerts / Escalation" },
  { title: "Private Dashboards" },
  { title: "Themes" },
  { title: "Widgets" },
  { title: "Billable Hours Tracking" },
  { title: "Gantt/Timeline View" },
  { title: "IT Budgeting" },
  { title: "Check In / Out" },
  { title: "Bulk Uploading" },
  { title: "Supports Agile" },
];

const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
          </Col>

          {featuresData.map((feature, index) => (
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
          
          {isShowMore && (
            <>
              {moreFeatures.map((featureM, index) => (
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
          )}
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
