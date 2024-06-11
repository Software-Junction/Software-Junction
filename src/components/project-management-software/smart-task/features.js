import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Document Management" },
  { title: "Recruitment Management" },
  { title: "Email Integration" },
  { title: "Event Calendar" },
  { title: "Project Management" },
  { title: "CRM" },
  { title: "CRM integration" },
  { title: "Task Management" },
  { title: "Time Tracking" },
  { title: "Appointment Management" },
  { title: "Contact Management" },
  { title: "Call Recording" },
  { title: "Custom Fields" },
  { title: "Budget Management" },
  { title: "Gantt Charts" },
  { title: "Idea Management" },
  { title: "Portfolio Management" },
  { title: "Project Planning" },
  { title: "Application Integration" },
  { title: "Collaboration Tools" },
  { title: "Customizable Branding" },
  { title: "File Sharing" },
  { title: "Archiving & Retention" },
  { title: "Collaboration" },
];

const moreFeatures = [
  { title: "Status Tracking" },
  { title: "Project Budgeting" },
  { title: "Customer Complaint Tracking" },
  { title: "Project Templates" },
  { title: "Dashboard" },
  { title: "Activity Tracking" },
  { title: "Procurement Management" },
  { title: "Analytics" },
  { title: "Call Logging" },
  { title: "Inbound Call Center" },
  { title: "Approval Process Control" },
  { title: "Issue Tracking" },
  { title: "Activity Dashboard" },
  { title: "Recurring Tasks" },
  { title: "Activity Monitoring" },
  { title: "Audio / Video Conferencing" },
  { title: "Brainstorming" },
  { title: "Chat / Messaging" },
  { title: "Discussion Boards" },
  { title: "Appointment Scheduling" },
  { title: "Automatic Time Capture" },
  { title: "Billable & Non-Billable Hours" },
  { title: "Approval Workflow" },
  { title: "Completion Tracking" },
  { title: "Calendar Management" },
  { title: "Task Scheduling" },
  { title: "Requirements Management" },
  { title: "Contact Import/Export" },
  { title: "Billable Hours Tracking" },
  { title: "Access Request Management" },
  { title: "Allocation" },
  { title: "Alerts/Notifications" },
  { title: "Contact Database" },
  { title: "Automatic Notifications" },
  { title: "Cost Tracking" },
  { title: "Access control" },
  { title: "Live Chat" },
  { title: "Drag & Drop" },
  { title: "Appointment Reminders" },
  { title: "Automated Scheduling" },
  { title: "Approval Process Management" },
  { title: "Agile Methodologies" },
  { title: "Create Subtasks" },
  { title: "Product Roadmapping" },
  { title: "Access Controls/Permissions" },
  { title: "HR Management" },
  { title: "Calendar/Reminder System" },
  { title: "Kanban Board" },
  { title: "Commenting / Notes" },
  { title: "Board Meetings" },
  { title: "Activity / News Feed" },
  { title: "Categorization / Grouping" },
  { title: "Application Portfolio Management" },
  { title: "Analytics/ROI Tracking" },
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
