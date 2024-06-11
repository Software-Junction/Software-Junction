import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Employee Scheduling" },
  { title: "Workflow Management" },
  { title: "Multi-Currency" },
  { title: "Budget Management" },
  { title: "Performance Management" },
  { title: "Product Database" },
  { title: "Project Management" },
  { title: "Supplier and Purchase Order Management" },
  { title: "Task Management" },
  { title: "Taxation Management" },
  { title: "Accounting" },
  { title: "Email Integration" },
  { title: "Inventory Management" },
  { title: "Invoice" },
  { title: "Project Templates" },
  { title: "Work order management" },
  { title: "Timesheet Management" },
  { title: "Project Planning" },
  { title: "Project Budgeting" },
  { title: "Resource Management" },
  { title: "Time Tracking" },
  { title: "Warehouse Management" },
  { title: "Accounts Receivable" },
  { title: "Estimating" },
];

const moreFeatures = [
  { title: "KPIs" },
  { title: "Account Tracking" },
  { title: "Budget Tracking/Job Costing" },
  { title: "Resource Scheduling" },
  { title: "Team Assignments" },
  { title: "Analytics/ROI Tracking" },
  { title: "Billing & Invoicing" },
  { title: "Real Time Currency Quotes" },
  { title: "Status Reporting" },
  { title: "Project Tracking" },
  { title: "Resource Allocation" },
  { title: "Time Tracking by Project" },
  { title: "Project Scheduling" },
  { title: "Budgeting & Forecasting" },
  { title: "Dashboard" },
  { title: "Analytics" },
  { title: "Ad Hoc Reports" },
  { title: "Scheduling" },
  { title: "Nonconformance Tracking" },
  { title: "Time & Expense Tracking" },
  { title: "Customizable Dashboard" },
  { title: "Backlog Management" },
  { title: "Employee Alignment" },
  { title: "Quotes / Estimates" },
  { title: "Profit / Loss Statement" },
  { title: "Job Scheduling" },
  { title: "Team Management" },
  { title: "Time & Attendance" },
  { title: "Report Export" },
  { title: "Quotes/Proposals" },
  { title: "Pre-built Templates" },
  { title: "Real Time Tracking" },
  { title: "Internal Cost Allocation" },
  { title: "Capacity Monitoring" },
  { title: "Work Hour Tracking" },
  { title: "Attendee Management" },
  { title: "Data Visualization" },
  { title: "Progress Tracking" },
  { title: "Project Accounting" },
  { title: "Filtered Search" },
  { title: "Billable & Non-Billable Hours" },
  { title: "Overtime Calculation" },
  { title: "Approval Workflow" },
  { title: "Reporting & statistics" },
  { title: "Private Dashboards" },
  { title: "Iteration Planning" },
  { title: "Graphical Data Presentation" },
  { title: "Gantt/Timeline View" },
  { title: "Publish Scheduling" },
  { title: "Collaboration Board" },
  { title: "KPI Monitoring" },
  { title: "Project billing" },
  { title: "Customizable Templates" },
  { title: "Financial Reports" },
  { title: "Report Templates" },
  { title: "Usage Tracking / Analytics" },
  { title: "Analytical Reporting" },
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
