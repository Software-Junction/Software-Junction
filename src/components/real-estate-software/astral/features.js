import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Billing System" },
  { title: "Contact Management" },
  { title: "Project Management" },
  { title: "Supplier and Purchase Order Management" },
  { title: "Task Management" },
  { title: "Email Integration" },
  { title: "Expense Management" },
  { title: "Lead Management" },
  { title: "Document Management" },
  { title: "Email Marketing / SMS Marketing" },
  { title: "Inventory control" },
  { title: "Billing & Invoicing" },
  { title: "Milestone Tracking" },
  { title: "Commercial Properties" },
  { title: "Payment Processing" },
  { title: "Residential Properties" },
  { title: "Tax Management" },
  { title: "Tenant Database" },
  { title: "Budgeting & Forecasting" },
  { title: "Dashboard" },
  { title: "Sales Reporting" },
  { title: "Procurement Management" },
  { title: "Invoice Payments" },
  { title: "Contract Management" },
];

const moreFeatures = [
  { title: "Alerts Notifications" },
  { title: "MIS Reports" },
  { title: "Receipt Printing" },
  { title: "Quotes / Estimates" },
  { title: "Purchase Management" },
  { title: "Customization" },
  { title: "Property Alerts" },
  { title: "Subcontractor Management" },
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
