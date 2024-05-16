import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Taxation Reports" },
  { "title": "Prescription Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "Billing Management" },
  { "title": "Payment Processing" },
  { "title": "GST" },
  { "title": "Point of Sale (POS)" },
  { "title": "Barcode Scanning" },
  { "title": "Multi-Currency" },
  { "title": "Data Security & Accuracy" },
  { "title": "Alerts/Notifications" },
  { "title": "Home Delivery & Due bill" },
  { "title": "Mobile Access" },
  { "title": "Batch Verification" },
  { "title": "Data Backup and Restore" },
  { "title": "Monitoring" },
  { "title": "Customer Management" },
  { "title": "Stock Management" },
  { "title": "Inventory Management" },
  { "title": "Fast Search" },
  { "title": "Discount system" },
  { "title": "Automatic Blocking of Expired Items" },
  { "title": "Employee Management" },
  { "title": "Bill & Deposit Reminder" },
  { "title": "Barcode Generation" },
  { "title": "Transaction management" },
  { "title": "Billing & Invoicing" },
  { "title": "Invoice history" },
  { "title": "MIS Reports" },
  { "title": "Document Printing" },
  { "title": "CRM & Sales Dashboards" },
  { "title": "Touch Capability" },
  { "title": "Medical Billing" },
  { "title": "Automatic Blocking of Expired Items" },
  { "title": "Schedule-H & Narcotics" }
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
