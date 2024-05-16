import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Dashboard" },
  { title: "Alerts/Notifications" },
  { title: "Analytics" },
  { title: "Gantt Charts" },
  { title: "Project Planning" },
  { title: "Quote Management" },
  { title: "BIM Modeling" },
  { title: "Claims Management" },
  { title: "Accounting Management" },
  { title: "Job Scheduling" },
  { title: "HR & Payroll" },
  { title: "Accounting" },
  { title: "CRM" },
  { title: "Supplier Management" },
  { title: "Inventory Management" },
  { title: "Job Costing" },
  { title: "Project Management" },
  { title: "Contractor Management" },
  { title: "Integration capabilities" },
  { title: "Business intelligence (BI)" },
  { title: "Cash Management" },
  { title: "Employee Management" },
  { title: "Workflow Management" },
  { title: "Procurement Management" },
];

const moreFeatures = [
  { title: "Cost Database" },
  { title: "Takeoff" },
  { title: "Issue & Return Management" },
  { title: "Raw Material Specifications" },
  { title: "Preventive Maintenance Scheduling" },
  { title: "Bid Management" },
  { title: "Subcontractor Management" },
  { title: "Client Management" },
  { title: "Approval Workflow" },
  { title: "Analytics & Reporting" },
  { title: "Cost-to-Completion Tracking" },
  { title: "Real-time tracking and reporting" },
  { title: "Subcontracting Management" },
  { title: "Multi Smart Device (Desktop/ Laptop/Notepad/Mobile)" },
  { title: "Chart of Accounts" },
  { title: "Purchase Order Management" },
  { title: "Budget Tracking/Job Costing" },
  { title: "Warranty / Service Management" },
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
