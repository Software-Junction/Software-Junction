import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Project Management" },
  { "title": "Inventory Management" },
  { "title": "Taxation Management" },
  { "title": "HR & Payroll" },
  { "title": "Accounts Receivable" },
  { "title": "Payroll Management" },
  { "title": "Accounts payable" },
  { "title": "Invoice" },
  { "title": "Cash Management" },
  { "title": "Banking Integration" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Revenue Management" },
  { "title": "Fund accounting" },
  { "title": "Tax Management" },
  { "title": "Financial Accounting" },
  { "title": "CPA Firms" },
  { "title": "Accounting Integration" },
  { "title": "Spend Management" },
  { "title": "Production Management" },
  { "title": "Product Database" },
  { "title": "Multi Currency" },
  { "title": "Trust Accounting" },
  { "title": "Collections" },
  { "title": "Partnership Accounting" },
  { "title": "Accrual Accounting" },
  { "title": "Accounting Management" },
  { "title": "Online Accounting" },
  { "title": "Project Accounting" },
  { "title": "General Ledger" },
  { "title": "Tax Management" },
  { "title": "Accounts Receivable" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Banking Integration" },
  { "title": "Financial Accounting" },
  { "title": "Inventory Management" },
  { "title": "Invoice" },
  { "title": "Production Management" },
  { "title": "Project Management" },
  { "title": "Taxation Management" },
  { "title": "HR & Payroll" },
  { "title": "Accounts payable" },
  { "title": "Payroll Management" },
  { "title": "Accounts Receivable" },
  { "title": "Cash Management" },
  { "title": "Tax Management" },
  { "title": "Revenue Management" },
  { "title": "Fund accounting" },
  { "title": "CPA Firms" },
  { "title": "Accounting Integration" },
  { "title": "Spend Management" },
  { "title": "Accounting Management" },
  { "title": "Financial Accounting" },
  { "title": "Online Accounting" },
  { "title": "Project Accounting" },
  { "title": "Trust Accounting" },
  { "title": "Collections" },
  { "title": "Partnership Accounting" },
  { "title": "Accrual Accounting" },
  { "title": "Banking Integration" },
  { "title": "Multi Currency" },
  { "title": "Revenue Management" },
  { "title": "Taxation Management" },
  { "title": "Accounts Receivable" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Payroll Management" },
  { "title": "Accounts payable" },
  { "title": "Cash Management" },
  { "title": "Invoice" },
  { "title": "Inventory Management" }
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

          {isShowMore && 
          <>
          {/* {moreFeatures.map((featureM, index) => (
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
          ))} */}
          </>
          }
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
