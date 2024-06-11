import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Customer DataBase" },
  { title: "Purchase" },
  { title: "Inventory Management & Consumption Tracking" },
  { title: "Barcode Scanning" },
  { title: "Table Management" },
  { title: "Stock Management" },
  { title: "Invoices" },
  { title: "Customer Management" },
  { title: "Cash Management" },
  { title: "Credit Card Payment Processing" },
  { title: "User Management" },
  { title: "Customer Support" },
  { title: "Inventory Management" },
  { title: "Multi Currency" },
  { title: "Payment Handling" },
  { title: "Vendor Management" },
  { title: "Warehouse Management" },
  { title: "Cloud Computing" },
  { title: "Multiple Payment Types" },
  { title: "Multiple Language" },
  { title: "Loyalty Management" },
  { title: "Sales Tracking" },
  { title: "Catalog Management" },
  { title: "Inventory control" },
];

const moreFeatures = [
  { title: "Pricing Optimization" },
  { title: "Cash Drawer Management" },
  { title: "Price / Margin Management" },
  { title: "Bar POS" },
  { title: "Wholesaler Management" },
  { title: "Single Store" },
  { title: "Returns" },
  { title: "Refunds and Store Credits" },
  { title: "Ecommerce Integration" },
  { title: "Employee Management" },
  { title: "Point of Sale (POS)" },
  { title: "Payment Processing" },
  { title: "Tax Management" },
  { title: "Receipt Printing" },
  { title: "Reporting" },
  { title: "Dashboard" },
  { title: "Supply Chain Management" },
  { title: "Sales Management" },
  { title: "Electronic Signature" },
  { title: "Multi-Location" },
  { title: "Supplier Management" },
  { title: "Billing & Invoicing" },
  { title: "Cost Tracking" },
  { title: "Kitting" },
  { title: "Item Management" },
  { title: "Order Management" },
  { title: "Returns Management" },
  { title: "Billing Management" },
  { title: "Promotions Management" },
  { title: "Purchasing" },
  { title: "Product Management" },
  { title: "Debit Card Support" },
  { title: "POS Transactions" },
  { title: "Discount Management" },
  { title: "Kitchen Management" },
  { title: "Returns Tracking" },
  { title: "Touch Screen" },
  { title: "Multi-Store Management" },
  { title: "Reorder Management" },
  { title: "Mobile Access" },
  { title: "For Sales" },
  { title: "Barcoded Garments" },
  { title: "eCommerce" },
  { title: "Delivery Tracking" },
  { title: "Menu Management" },
  { title: "Customer Account Profiles" },
  { title: "Pricing Management" },
  { title: "Restaurant POS" },
  { title: "Retail Management" },
  { title: "For Restaurants" },
  { title: "Online Ordering" },
  { title: "Loyalty Program" },
  { title: "Payment Tracking" },
  { title: "Serial Number Tracking" },
  { title: "User Access Permissions" },
  { title: "Purchase Order Management" },
  { title: "Sales Trend Analysis" },
  { title: "Online payments" },
  { title: "SKU / UPC codes" },
  { title: "Sales History" },
  { title: "GST" },
  { title: "Reporting/Analytics" },
  { title: "Mobile Payments" },
  { title: "Credit Reporting" },
  { title: "Barcoding" },
  { title: "Consignments" },
  { title: "Retail POS" },
  { title: "Multi-Language" },
  { title: "Customer Statements" },
  { title: "Gift Shop POS" },
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
