import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Budgeting" },
    { "title": "CRM" },
    { "title": "HR & Payroll" },
    { "title": "Payment Gateway Integration" },
    { "title": "Multiuser Login & Role-based access control" },
    { "title": "Barcode Integration" },
    { "title": "Inventory Management" },
    { "title": "Email Integration" },
    { "title": "Financial Management" },
    { "title": "Mobile Support" },
    { "title": "POS invoicing" },
    { "title": "Manufacturing" },
    { "title": "Asset Management" },
    { "title": "Online document storage (back-up)" },
    { "title": "Multi Currency" },
    { "title": "Invoice" },
    { "title": "Audit Trail" },
    { "title": "Outstanding" },
    { "title": "Loan & Advances Management" },
    { "title": "Customer Management" },
    { "title": "Payroll Management" },
    { "title": "Bonus" },
    { "title": "Multi-Currency" },
    { "title": "Multi Location" }
];

const moreFeatures = [

    { "title": "Appointment Reminders" },
    { "title": "Sales Management" },
    { "title": "Payment Management" },
    { "title": "Online Payment Processing" },
    { "title": "Barcode Integration" },
    { "title": "Appointment Management" },
    { "title": "Inventory Tracking" },
    { "title": "GST Ready" },
    { "title": "Multi-Company" },
    { "title": "Time & Expense Tracking" },
    { "title": "Sales Tracking" },
    { "title": "Business Rules Management" },
    { "title": "Asset Planning" },
    { "title": "Government" },
    { "title": "Invoice Designer" },
    { "title": "Taxation Management" },
    { "title": "Accounts Receivable" },
    { "title": "Project Tracking" },
    { "title": "Financial Accounting" },
    { "title": "Online Accounting" },
    { "title": "Workflow Management" },
    { "title": "Balance Sheet" },
    { "title": "Business Rules Management" },
    { "title": "Online Booking" },
    { "title": "Fixed Asset Management" },
    { "title": "SMS Integration" },
    { "title": "Automatic Time Capture" },
    { "title": "Multi-Location" },
    { "title": "Accounts payable" },
    { "title": "Records Management" },
    { "title": "Project billing" },
    { "title": "Graphs & Charts" },
    { "title": "Time & Attendance Management" },
    { "title": "Time Off Management" },
    { "title": "Collections" },
    { "title": "Payment Gateway Integration" },
    { "title": "Tax Management" },
    { "title": "Recurring invoice" },
    { "title": "MIS Reports" },
    { "title": "Purchase Orders" },
    { "title": "Barcoding" },
    { "title": "Service Tax" },
    { "title": "Accounts Receivable" },
    { "title": "Billing & Invoicing" },
    { "title": "Billing Portal" },
    { "title": "Shipping Management" },
    { "title": "Profit/Loss Statement" },
    { "title": "Recipe Management" },
    { "title": "eCommerce" },
    { "title": "Receipt Printing" },
    { "title": "Automatic Time Capture" },
    { "title": "Appointment Reminders" },
    { "title": "Automated Scheduling" },
    { "title": "Partnership Accounting" },
    { "title": "Online Payment Processing" },
    { "title": "Billing Portal" },
    { "title": "Serial Number Tracking" },
    { "title": "Rate Management" },
    { "title": "HR Management" },
    { "title": "Workflow Configuration" },
    { "title": "Receipt Upload" },
    { "title": "Workstation Tracking" },
    { "title": "Agency Management" },
    { "title": "Job Work" }
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
