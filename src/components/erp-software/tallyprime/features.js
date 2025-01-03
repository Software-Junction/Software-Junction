import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "HR & Payroll"},
  {"title": "Customer Management"},
  {"title": "Asset Management"},
  {"title": "Banking Integration"},
  {"title": "Inventory Management"},
  {"title": "Budgeting"},
  {"title": "Online document storage (back-up)"},
  {"title": "POS invoicing"},
  {"title": "Email Integration"},
  {"title": "Financial Management"},
  {"title": "Loan & Advances Management"},
  {"title": "Job Costing"},
  {"title": "Manufacturing"},
  {"title": "Invoice"},
  {"title": "Multi Location"},
  {"title": "Audit Trail"},
  {"title": "Outstanding"},
  {"title": "Product Database"},
  {"title": "Payroll Management"},
  {"title": "Bonus"},
  {"title": "Investment"},
  {"title": "Multi Currency"},
  {"title": "Customer Support"},
  {"title": "Accounting"}
];

const moreFeatures = [
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Bank Reconciliation" },
  {"title": "Barcode Integration"},
  { "title": "Purchase Management" },
  { "title": "GST Ready" },
  { "title": "Taxation Management" },
  { "title": "Integrate Different Payment Gateways" },
  { "title": "Fund accounting" },
  { "title": "Sales Management" },
  { "title": "Billing & Invoicing" },
  { "title": "GST Compliance" },
  { "title": "Mobile Access" },
  { "title": "Accounts payable" },
  { "title": "Document Printing" },
  { "title": "Account Management" },
  { "title": "Analytics" },
  { "title": "Warehouse Management" },
  { "title": "Live Chat" },
  { "title": "Multi-Branch Connectivity" },
  { "title": "Balance Sheet" },
  { "title": "Bills of Material" },
  { "title": "Quotation & Estimates" },
  { "title": "Budgeting & Forecasting" },
  { "title": "Accounts Receivable" },
  { "title": "Compliance Management" },
  { "title": "Checks & Controls" },
  { "title": "Service Tax" },
  { "title": "Collections" },
  { "title": "24/7 Support" },
  { "title": "GST audit report" },
  { "title": "GST returns" },
  { "title": "Voucher Management" },
  { "title": "GST Tax Invoice" },
  { "title": "GST Compatible" },
  { "title": "Accounting Integration" },
  { "title": "Billing" },
  { "title": "Job Work" },
  { "title": "MIS Reporting Capabilities" },
  { "title": "Data Exchange Capabilities" },
  { "title": "Integrated payment processing" },
  { "title": "Annual Filings" },
  { "title": "Web Access / Restoration" },
  { "title": "Statutory Capabilities" }
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
