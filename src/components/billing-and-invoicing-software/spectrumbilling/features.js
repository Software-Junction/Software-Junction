import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Banking Integration" },
  { title: "VAT" },
  { title: "Customer Management" },
  { title: "Invoice" },
  { title: "Expense Management" },
  { title: "Inventory Management" },
  { title: "Accounting" },
  { title: "Payment Gateway Integration" },
  { title: "Payment Handling" },
  { title: "Product Database" },
  { title: "Supplier and Purchase Order Management" },
  { title: "Quotation & Estimates" },
  { title: "Recurring invoice" },
  { title: "Taxation Management" },
  { title: "Time Tracking" },
  { title: "Vendor Management" },
  { title: "Mobile App" },
  { title: "Invoice Designer" },
  { title: "Multiuser Login & Role-based access control" },
];

// const moreFeatures = [
//   { title: "Reporting/Analytics" },
//   { title: "Refund Management" },
//   { title: "Access Controls/Permissions" },
//   { title: "Compliance Tracking" },
//   { title: "Hardware Inventory" },
//   { title: "Purchasing" },
//   { title: "Receipt Printing" },
//   { title: "Contact Database" },
//   { title: "Invoice Processing" },
//   { title: "Returns Management" },
//   { title: "Client Management" },
//   { title: "Proposal Management" },
//   { title: "Mobile Access" },
//   { title: "Trust Accounting" },
//   { title: "Due date tracking" },
//   { title: "Online Invoice Payment" },
//   { title: "Customizable invoices" },
//   { title: "Online payments" },
//   { title: "General Ledger Entry" },
//   { title: "Credit Notes" },
// ];

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

          {/* {isShowMore && (
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
          )} */}
          {/* <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Features;
