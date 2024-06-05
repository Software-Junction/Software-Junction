import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Performance Management" },
  { title: "Offline Access" },
  { title: "Customer Support" },
  { title: "Employee Management" },
  { title: "Payroll Management" },
  { title: "Project Management" },
  { title: "Task Management" },
  { title: "Time Tracking" },
  { title: "Collaboration" },
  { title: "Collaboration Tools" },
  { title: "Real Time Monitoring" },
  { title: "Workflow Management" },
  { title: "Dashboard" },
  { title: "Real Time Reporting" },
  { title: "Attendance Management" },
  { title: "Task Scheduling" },
  { title: "Team Management" },
  { title: "Alerts/Notifications" },
  { title: "Billing & Invoicing" },
  { title: "Task Tracking" },
  { title: "Activity Tracking" },
  { title: "Activity Dashboard" },
  { title: "Invoice Management" },
  { title: "Budget Management" },
];

const moreFeatures = [
  { title: "Billable & Non-Billable Hours" },
  { title: "Traceability" },
  { title: "Hourly billing" },
  { title: "Multiple Billing Rates" },
  { title: "Timesheet Management" },
  { title: "Billing Rate Management" },
  { title: "Live Chat" },
  { title: "Web Activity" },
  { title: "Activity Monitoring" },
  { title: "Time Management" },
  { title: "Mobile Access" },
  { title: "Team Chat" },
  { title: "Hourly Employee Tracking" },
  { title: "Messaging" },
  { title: "Activity / News Feed" },
  { title: "Work Hour Tracking" },
  { title: "Visual Analytics" },
  { title: "Automatic Time Capture" },
  { title: "Usage Tracking / Analytics" },
  { title: "Reporting/Analytics" },
  { title: "Rate Management" },
  { title: "Productivity Analysis" },
  { title: "Time Clock" },
  { title: "Time & Attendance" },
  { title: "To-Do List View" },
  { title: "Employee Productivity Analysis" },
  { title: "Website Monitoring" },
  { title: "Offline Time Tracking" },
  { title: "Online invoicing" },
  { title: "Online Time Tracking" },
  { title: "Time per Project Reporting" },
  { title: "Mobile Time Tracking" },
  { title: "Customizable invoices" },
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
