import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Payment Handling" },
  { "title": "Banking Integration" },
  { "title": "Expense Management" },
  { "title": "Inventory Management" },
  { "title": "Barcode Integration" },
  { "title": "Email Integration" },
  { "title": "Expense Tracking" },
  { "title": "Online document storage (back-up)" },
  { "title": "Budgeting" },
  { "title": "Financial Management" },
  { "title": "HR & Payroll" },
  { "title": "Invoice" },
  { "title": "Manufacturing" },
  { "title": "Multi Location" },
  { "title": "Customer Management" },
  { "title": "Multi Currency" },
  { "title": "Outstanding" },
  { "title": "Loan & Advances Management" },
  { "title": "Bonus" },
  { "title": "Online Banking Integration" },
  { "title": "Payment Gateway Integration" },
  { "title": "Invoice Designer" },
  { "title": "Accounting" }
];

const moreFeatures = [
  { "title": "Taxation Management" },
  { "title": "Bank Reconciliation" },
  { "title": "POS invoicing" },
  { "title": "Mobile App" },
  { "title": "Accounts Receivable" },
  { "title": "Accounts payable" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Bills of Material" },
  { "title": "Quotation & Estimates" },
  { "title": "Tax Management" },
  { "title": "General Ledger" },
  { "title": "Vat" },
  { "title": "Warehouse Management" },
  { "title": "Cash Management" },
  { "title": "Document Printing" },
  { "title": "Billing & Invoicing" },
  { "title": "Multi-Branch Connectivity" },
  { "title": "Payroll Management" },
  { "title": "Service Tax" },
  { "title": "Vendor Management" },
  { "title": "Financial Accounting" },
  { "title": "Collections" },
  { "title": "Purchasing" },
  { "title": "MIS Reports" },
  { "title": "Scheme Management" },
  { "title": "TDS / TCS" },
  { "title": "Checks & Controls" },
  { "title": "Trading Excise Registers" }
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
          }
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
