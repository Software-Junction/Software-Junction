import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Attendance management" },
  { "title": "Invoice" },
  { "title": "Email Integration" },
  { "title": "Financial Management" },
  { "title": "Sales Tracking" },
  { "title": "Inventory Management" },
  { "title": "Leave Management" },
  { "title": "POS invoicing" },
  { "title": "Expense Management" },
  { "title": "Bank Reconciliation" },
  { "title": "Document Management" },
  { "title": "Multi Company" },
  { "title": "Payroll Management" },
  { "title": "Fixed assets" },
  { "title": "Data Security" },
  { "title": "Dashboard" },
  { "title": "Profit & Loss Statement" },
  { "title": "Billing & Invoicing" },
  { "title": "Mobile App" },
  { "title": "Accounting" },
  { "title": "Collaborate" },
  { "title": "Data Backup and Restore" },
  { "title": "Document Printing" },
  { "title": "Multi-Currency" }
];

const moreFeatures = [
    { "title": "Sales Management" },
    { "title": "Permission Management" },
    { "title": "MIS Reports" },
    { "title": "Data Security & Accuracy" },
    { "title": "Discount & Schemes" },
    { "title": "Customer tracking" },
    { "title": "Online GST Portal" },
    { "title": "GST Compliance" },
    { "title": "Business performance dashboard" },
    { "title": "Monthly GST Report" },
    { "title": "Sales Analyse Report" },
    { "title": "GST audit report" },
    { "title": "GST returns" },
    { "title": "Purchase Management" },
    { "title": "ITC Match/Mismatch Report generation" },
    { "title": "Responsive Support" },
    { "title": "Multi-Branch Connectivity" },
    { "title": "Mailing list management" },
    { "title": "e-Payment" },
    { "title": "Data Security & Accuracy" },
    { "title": "Reporting" },
    { "title": "Stock Take and Monitoring" }
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

          {displayFeatures.length > 0 ? (
          displayFeatures.map((feature, index) => (
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
          ))
        ) : (
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

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
