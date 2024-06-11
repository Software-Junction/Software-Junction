import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Sales Tax Management" },
  { "title": "Taxation Management" },
  { "title": "Balance Sheet" },
  { "title": "Invoice Management" },
  { "title": "Manufacturing" },
  { "title": "Bank Reconciliation" },
  { "title": "Inventory Management" },
  { "title": "Accounts Receivable" },
  { "title": "Quotation & Estimates" },
  { "title": "Bills of Material" },
  { "title": "Tax Management" },
  { "title": "Outstanding" },
  { "title": "Billing Management" },
  { "title": "Mobile App" },
  { "title": "Multi Currency" },
  { "title": "Project Tracking" },
  { "title": "Dashboard" },
  { "title": "Multi Location" },
  { "title": "Audit Trail" },
  { "title": "Accounts payable" },
  { "title": "Invoice" },
  { "title": "Purchase Orders" },
  { "title": "Billing & Invoicing" }
];

const moreFeatures = [
  { "title": "Receipt Printing" },
  { "title": "Invoice Processing" },
  { "title": "Compliance Reporting" },
  { "title": "Payment Management" },
  { "title": "Payment Tracking" },
  { "title": "Project Accounting" },
  { "title": "Item Management" },
  { "title": "Multi-Branch Connectivity" },
  { "title": "Fixed Asset Management" },
  { "title": "Financial Reporting" },
  { "title": "Multi-User Collaboration" },
  { "title": "Invoice" },
  { "title": "Online invoicing" },
  { "title": "Billing Rate Management" },
  { "title": "Multi-Store Management" },
  { "title": "Bookkeeping" },
  { "title": "Multi-Company" },
  { "title": "Client Statements" },
  { "title": "Revenue Recognition" },
  { "title": "Financial Accounting" },
  { "title": "Multi-State" },
  { "title": "Accounting Management" },
  { "title": "Partnership Accounting" },
  { "title": "Import / Export Management" },
  { "title": "Document Templates" },
  { "title": "Compliance Tracking" },
  { "title": "Purchase Order Management" },
  { "title": "Multi-Department/Project" },
  { "title": "Accrual Accounting" },
  { "title": "Multi-User Collaboration" },
  { "title": "Project billing" },
  { "title": "Revenue Recognition" },
  { "title": "TDS / TCS" },
  { "title": "Recurring Billing" },
  { "title": "Tax" },
  { "title": "Profitability Analysis" },
  { "title": "VAT / CST / GST Reports" },
  { "title": "Billing Rate Management" },
  { "title": "Multi-Store Management" },
  { "title": "Mobile Access" }
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
                  <span style={{ color: "#f95738 " }}>
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
