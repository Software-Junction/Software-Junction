import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Scheduling" },
  { "title": "Registration Management" },
  { "title": "Calendar Management" },
  { "title": "Event Management" },
  { "title": "Sales Management" },
  { "title": "Inventory Management" },
  { "title": "Payments" },
  { "title": "Task Management" },
  { "title": "Online Booking" },
  { "title": "Security Management" },
  { "title": "Staff Management" },
  { "title": "Customizable Dashboard" },
  { "title": "Attendee Management" },
  { "title": "Ticket Management" },
  { "title": "Invoicing" },
  { "title": "Client Management" },
  { "title": "Integrated CRM" },
  { "title": "Communication Logs" },
  { "title": "Meeting Management" },
  { "title": "Travel Management" },
  { "title": "Resource Management" },
  { "title": "Accommodation Booking" },
  { "title": "Event Logs" },
  { "title": "Badge Management" },
  { "title": "Catering Management" },
  { "title": "Exhibit Management" },
  { "title": "Booking Wizard" },
  { "title": "Beverage Management" },
  { "title": "Package Management" },
  { "title": "Data Analysis Tools" },
  { "title": "KPI Module" },
  { "title": "Virtual Assistants" },
  { "title": "Floorplans" }
];

// const moreFeatures = [
//   { "title": "Supplier and Purchase Order Management" },
//   { "title": "Bank Reconciliation" },
//   {"title": "Barcode Integration"},
//   { "title": "Purchase Management" },
//   { "title": "GST Ready" },
//   { "title": "Taxation Management" },
//   { "title": "Integrate Different Payment Gateways" },
//   { "title": "Fund accounting" },
//   { "title": "Sales Management" },
//   { "title": "Billing & Invoicing" },
//   { "title": "GST Compliance" },
//   { "title": "Mobile Access" },
//   { "title": "Accounts payable" },
//   { "title": "Document Printing" },
//   { "title": "Account Management" },
//   { "title": "Analytics" },
//   { "title": "Warehouse Management" },
//   { "title": "Live Chat" },
//   { "title": "Multi-Branch Connectivity" },
//   { "title": "Balance Sheet" },
//   { "title": "Bills of Material" },
//   { "title": "Quotation & Estimates" },
//   { "title": "Budgeting & Forecasting" },
//   { "title": "Accounts Receivable" },
//   { "title": "Compliance Management" },
//   { "title": "Checks & Controls" },
//   { "title": "Service Tax" },
//   { "title": "Collections" },
//   { "title": "24/7 Support" },
//   { "title": "GST audit report" },
//   { "title": "GST returns" },
//   { "title": "Voucher Management" },
//   { "title": "GST Tax Invoice" },
//   { "title": "GST Compatible" },
//   { "title": "Accounting Integration" },
//   { "title": "Billing" },
//   { "title": "Job Work" },
//   { "title": "MIS Reporting Capabilities" },
//   { "title": "Data Exchange Capabilities" },
//   { "title": "Integrated payment processing" },
//   { "title": "Annual Filings" },
//   { "title": "Web Access / Restoration" },
//   { "title": "Statutory Capabilities" }
// ];


const Features = ({ styles }) => {
   const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredFeatures = featuresData.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

          {filteredFeatures.map((feature, index) => (
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

          {isShowMore && 
          <>
          {/* {moreFeatures.map((featureM, index) => (
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
