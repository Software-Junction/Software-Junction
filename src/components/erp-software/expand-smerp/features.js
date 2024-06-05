import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Inventory Management" },
{ "title": "Business process modeling (BPM)" },
{ "title": "Audit Trail" },
{ "title": "Opportunity Management" },
{ "title": "Document Management" },
{ "title": "Financial Management" },
{ "title": "Warehouse Management" },
{ "title": "Expense Tracking" },
{ "title": "Supplier and Purchase Order Management" },
{ "title": "Sales and Distribution" },
{ "title": "Mobile App" },
{ "title": "Bank Reconciliation" },
{ "title": "Accounts Receivable" },
{ "title": "HR & Payroll" },
{ "title": "Quotation & Estimates" },
{ "title": "Business intelligence (BI)" },
{ "title": "Job Costing" },
{ "title": "Quality Management" },
{ "title": "Accounts payable" },
{ "title": "Field service management" },
{ "title": "Inventory control" },
{ "title": "Sales and Distribution" },
{ "title": "Invoicing" },
{ "title": "General Ledger" }
];

const moreFeatures = [
  { "title": "Invoice Management" },
  { "title": "Barcode Scanning" },
  { "title": "Purchase Order" },
  { "title": "Order Management" },
  { "title": "Asset Planning" },
  { "title": "Point of Sale (POS)" },
  { "title": "Inventory Tracking" },
  { "title": "Document Storage" },
  { "title": "Issue Management" },
  { "title": "Customer Portal" },
  { "title": "Bookkeeping" },
  { "title": "Bills of Material" },
  { "title": "Invoice Processing" },
  { "title": "Return Management" },
  { "title": "Lead Capture" },
  { "title": "Budget Tracking/Job Costing" },
  { "title": "Currency Management" },
  { "title": "Asset Tracking" },
  { "title": "Document Templates" },
  { "title": "Barcode Scanning" },
  { "title": "Billing & Invoicing" },
  { "title": "Logistics Management" },
  { "title": "Financial Reporting" },
  { "title": "Job Management" },
  { "title": "Calendar/Reminder System" },
  { "title": "SKU / UPC codes" },
  { "title": "Livestock Management" },
  { "title": "Financial Accounting" },
  { "title": "3rd Party Integrations" },
  { "title": "Employee Management" },
  { "title": "Balance Sheet" },
  { "title": "Accounting Management" },
  { "title": "Mobile Access" },
  { "title": "Multi Smart Device (Desktop/ Laptop/Notepad/Mobile)" },
  { "title": "Multi Browser Compatible" },
  { "title": "Email/SMS Integration" },
  { "title": "Inventory Valuation" },
  { "title": "Work order management" },
  { "title": "Dashboard" },
  { "title": "Custom Fields" },
  { "title": "Calendar Management" },
  { "title": "Location Tracking" },
  { "title": "Export Documentation" },
  { "title": "Purchase Order Management" },
  { "title": "MRP" },
  { "title": "Financial Accounting" },
  { "title": "Customer DataBase" },
  { "title": "Account Management" },
  { "title": "Bills of Lading" },
  { "title": "Audit Trails" },
  { "title": "Real Time Tracking" },
  { "title": "Data Analysis" },
  { "title": "Template Management" },
  { "title": "Picking & Routing" },
  { "title": "Buy / Sell Ticketing" }
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

          {displayFeatures.map((feature, index) => (
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

          {/* {isShowMore && 
          <>
          {filteredMoreFeatures.map((featureM, index) => (
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
