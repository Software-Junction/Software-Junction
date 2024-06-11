import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Customer Management"},
  {"title": "Payment Handling"},
  {"title": "Bank Reconciliation"},
  {"title": "Invoice"},
  {"title": "Accounts Receivable"},
  {"title": "Payment Gateway Integration"},
  {"title": "Banking Integration"},
  {"title": "Invoice Designer"},
  {"title": "Expense Management"},
  {"title": "Order Tracking"},
  {"title": "Customizable Branding"},
  {"title": "Warehouse Management"},
  {"title": "Billing & Invoicing"},
  {"title": "Accounts payable"},
  {"title": "CRM"},
  {"title": "Cash Management"},
  {"title": "Multi-Location"},
  {"title": "Ad Hoc Reports"},
  {"title": "Barcoding / RFID"},
  {"title": "Customer DataBase"},
  {"title": "Payment Gateway Integration"},
  {"title": "Quotation & Estimates"},
  {"title": "Inventory Management"},
  {"title": "Accounting"}
];

const moreFeatures = [
  {"title": "Rate Management"},
  {"title": "Partial Payments"},
  {"title": "Quotes / Estimates"},
  {"title": "Receipt Management"},
  {"title": "Returns Management"},
  {"title": "Recurring Billing"},
  {"title": "Hardware Inventory"},
  {"title": "Purchasing"},
  {"title": "Multiuser Login & Role-based access control"},
  {"title": "Credit Card Management"},
  {"title": "POS Transactions"},
  {"title": "Discount Management"},
  {"title": "Supplier and Purchase Order Management"},
  {"title": "Online payments"},
  {"title": "Product Catalog"},
  {"title": "Account Management"},
  {"title": "Flexible Rate Tables"},
  {"title": "Receipt Printing"},
  {"title": "Check Printing"},
  {"title": "Tax Calculator"},
  {"title": "Purchasing & Receiving"},
  {"title": "Invoice Management"},
  {"title": "Reporting/Analytics"},
  {"title": "Kitting"},
  {"title": "Order Management"},
  {"title": "Customizable Billing"},
  {"title": "Multiple Billing Rates"}
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
