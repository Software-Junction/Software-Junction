import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Task Management"},
  {"title": "CRM"},
  {"title": "Sales Quotes"},
  {"title": "Expense Tracking"},
  {"title": "Multi Location"},
  {"title": "Sales Tracking"},
  {"title": "Email Integration"},
  {"title": "Inventory Management"},
  {"title": "Auto Discount"},
  {"title": "Payment Handling"},
  {"title": "Invoice Designer"},
  {"title": "Quotation & Estimates"},
  {"title": "Financial Management"},
  {"title": "Multiuser Login & Role-based access control"},
  {"title": "Catalog Management"},
  {"title": "Expense Management"},
  {"title": "Banking Integration"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Sales promotions handling"},
  {"title": "Supplier and Purchase Order Management"},
  {"title": "Warehouse Management"},
  {"title": "Multi Currency"},
  {"title": "Invoice"},
  {"title": "Accounting"}
];

const moreFeatures = [
  {"title": "Credit Management"},
  {"title": "Customer Management"},
  {"title": "Invoice Management"},
  {"title": "Stock Management"},
  {"title": "Barcode / Ticket Scanning"},
  {"title": "Retail POS"},
  {"title": "Returns Tracking"},
  {"title": "Quote Management"},
  {"title": "GST Ready"},
  {"title": "Purchase Order Management"},
  {"title": "Cash Management"},
  {"title": "SKU / UPC codes"},
  {"title": "Order Management"},
  {"title": "Inventory Optimization"},
  {"title": "Sales Trend Analysis"},
  {"title": "Invoice Designer"},
  {"title": "Loyalty Program"},
  {"title": "Activity Tracking"},
  {"title": "Expense Management"},
  {"title": "Returns Management"},
  {"title": "Tax Calculator"},
  {"title": "Gift Vouchers"},
  {"title": "Accounting Management"},
  {"title": "Drill Down Reports"},
  {"title": "Warehouse Management"},
  {"title": "Reporting/Analytics"},
  {"title": "Multi-Company"},
  {"title": "Retail Management"},
  {"title": "Automatic Re-ordering"},
  {"title": "Retail Inventory Management"},
  {"title": "Payment Tracking"},
  {"title": "Billing & Invoicing"},
  {"title": "Inventory control"},
  {"title": "Payment Handling"},
  {"title": "Email Integration"},
  {"title": "Returns"},
  {"title": "Sales Reports"},
  {"title": "Order Processing"},
  {"title": "Purchase"},
  {"title": "User Access Permissions"},
  {"title": "ERP"},
  {"title": "Credit Notes"},
  {"title": "Centralized Data"},
  {"title": "Loyalty Card System"},
  {"title": "Sales Tracking"},
  {"title": "Barcodes/Labels"},
  {"title": "Purchase Management"},
  {"title": "Retail POS"},
  {"title": "GST"},
  {"title": "Inventory Management & Consumption Tracking"},
  {"title": "Payment Processing"},
  {"title": "eCommerce Management"},
  {"title": "Customer DataBase"},
  {"title": "Order Fulfillment"},
  {"title": "Inventory Tracking"},
  {"title": "Activity Tracking"},
  {"title": "Order Entry"},
  {"title": "Multi-Store"},
  {"title": "Expense Tracking"},
  {"title": "Sales Management"},
  {"title": "Inventory Valuation"},
  {"title": "Barcode Scanning"},
  {"title": "Retail Inventory Management"},
  {"title": "GST"},
  {"title": "Cataloging / Categorization"},
  {"title": "Sales History"},
  {"title": "eCommerce - online store"},
  {"title": "Order Fulfillment"},
  {"title": "Purchase Order"},
  {"title": "User Management"},
  {"title": "Supplier Management"},
  {"title": "Invoice"},
  {"title": "Sales promotions handling"},
  {"title": "Inventory Management"},
  {"title": "Sales Management"},
  {"title": "POS"},
  {"title": "Balance Sheet"},
  {"title": "Inventory Optimization"},
  {"title": "GST Ready"},
  {"title": "Receipt Printing"},
  {"title": "Payment Tracking"},
  {"title": "Email/SMS Integration"},
  {"title": "Bar Coding"},
  {"title": "User Access Permissions"},
  {"title": "Centralized Data"},
  {"title": "Drill Down Reports"},
  {"title": "Chart of Accounts"},
  {"title": "Stock Taking"},
  {"title": "Inventory Valuation"},
  {"title": "Sales Reports"},
  {"title": "Purchase Order Management"},
  {"title": "ERP"},
  {"title": "Barcoding"},
  {"title": "Scheduled / Automated Reports"},
  {"title": "Multi-Company"},
  {"title": "Profit/Loss Statement"},
  {"title": "Discounts Management"},
  {"title": "Roles Management"},
  {"title": "Retail POS"},
  {"title": "Barcode / Ticket Scanning"},
  {"title": "POS"},
  {"title": "Order Entry"},
  {"title": "Cash Drawer Management"},
  {"title": "Multi-Store"},
  {"title": "Securities Management"},
  {"title": "For Retail"},
  {"title": "Analytical Reporting"},
  {"title": "Barcodes/Labels"},
  {"title": "Reports & Insights"},
  {"title": "Credit Notes"}
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
