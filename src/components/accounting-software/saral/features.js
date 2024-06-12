import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Recurring invoice" },
    { "title": "Multiuser Login & Role-based access control" },
    { "title": "Financial Management" },
    { "title": "Task Management" },
    { "title": "Inventory Management" },
    { "title": "Budgeting" },
    { "title": "Supplier and Purchase Order Management" },
    { "title": "Taxation Management" },
    { "title": "Invoice" },
    { "title": "Email Integration" },
    { "title": "Quotation & Estimates" },
    { "title": "POS invoicing" },
    { "title": "Mobile Support" },
    { "title": "Multi Location" },
    { "title": "Barcode Integration" },
    { "title": "Production Management" },
    { "title": "Payment Handling" },
    { "title": "Product Database" },
    { "title": "Online document storage (back-up)" },
    { "title": "Payment Gateway Integration" },
    { "title": "Manufacturing" },
    { "title": "Cash Management" },
    { "title": "Accounts Receivable" },
    { "title": "Outstanding" }
];

const moreFeatures = [
  { "title": "Warehouse Management" },
  { "title": "Document Printing" },
  { "title": "Mobile App" },
  { "title": "General Ledger" },
  { "title": "Invoice Designer" },
  { "title": "Compliance Management" },
  { "title": "Accounts payable" },
  { "title": "Invoice Management" },
  { "title": "Purchasing" },
  { "title": "Bank Reconciliation" },
  { "title": "Revenue Management" },
  { "title": "Bills of Material" },
  { "title": "Analytics" },
  { "title": "Tax Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Vendor Management" },
  { "title": "Scheme Management" },
  { "title": "Collections" },
  { "title": "VAT" },
  { "title": "Financial Accounting" },
  { "title": "Government" },
  { "title": "MIS Reports" },
  { "title": "Cost-to-Completion Tracking" },
  { "title": "Trading Excise Registers" },
  { "title": "For Private Schools" },
  { "title": "Service Tax" },
  { "title": "Checks & Controls" },
  { "title": "Production Cost Tracking" },
  { "title": "Trust Accounting" },
  { "title": "Change Orders" },
  { "title": "TDS / TCS" },
  { "title": "Purchase Order Management" },
  { "title": "Material Workflow" },
  { "title": "VAT / CST / GST Reports" },
  { "title": "Cost-to-Completion Tracking" },
  { "title": "Graphs & Charts" }
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
