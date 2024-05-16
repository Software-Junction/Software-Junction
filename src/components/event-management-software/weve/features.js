import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Video Chat" },
{ "title": "Meeting Management" },
{ "title": "Scheduling" },
{ "title": "Event Management" },
{ "title": "HD voice & video" },
{ "title": "Group Management" },
{ "title": "Multiparty Video Meeting" },
{ "title": "Collaboration" },
{ "title": "Video Sharing" },
{ "title": "Event Calendar" },
{ "title": "Meeting Room Booking" },
{ "title": "Internal Meetings" },
{ "title": "Activity / News Feed" },
{ "title": "Video Conferencing" },
{ "title": "Committee Meetings" },
{ "title": "Q & A" },
{ "title": "Multi-Event Management" },
{ "title": "Online Tests" },
{ "title": "Academic/Education" }
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
