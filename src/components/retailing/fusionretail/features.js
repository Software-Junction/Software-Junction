import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Auto Discount"},
  {"title": "E-Commerce"},
  {"title": "Email Integration"},
  {"title": "Inventory Management"},
  {"title": "Multiuser Login & Role-based access control"},
  {"title": "Sales promotions handling"},
  {"title": "Search Option"},
  {"title": "Supplier and Purchase Order Management"},
  {"title": "Customer Management"},
  {"title": "Cloud Computing"},
  {"title": "Payment Handling"},
  {"title": "Email Marketing / SMS Marketing"},
  {"title": "Barcode Integration"},
  {"title": "Security"},
  {"title": "Warehouse Management"},
  {"title": "Multi Currency"},
  {"title": "Audit Trail"},
  {"title": "Invoice"},
  {"title": "Import/Export DataBase"},
  {"title": "Multi Location"},
  {"title": "Home Delivery & Due bill"},
  {"title": "Vendor Management"},
  {"title": "CRM"},
  {"title": "Accounting"},
  {"title": "Sales promotions handling"},
  {"title": "Export repots to Excel/Text/PDF Formats"}
];

const moreFeatures = [
  {"title": "Billing Management"},
    {"title": "Stock Management"},
    {"title": "Dashboard"},
    {"title": "Multiple Payment Types"},
    {"title": "POS Integration"},
    {"title": "Credit Card Payment Processing"},
    {"title": "Barcode Scanning"},
    {"title": "Refunds and Store Credits"},
    {"title": "Commission management"},
    {"title": "Sales Management"},
    {"title": "Loyalty Management"},
    {"title": "System Security & Software Management"},
    {"title": "Channel Management"},
    {"title": "Billing & Invoicing"},
    {"title": "Returns"},
    {"title": "Ecommerce Integration"},
    {"title": "Discount Management"},
    {"title": "Vat"},
    {"title": "Table Management"},
    {"title": "Gift Vouchers"},
    {"title": "Reporting"},
    {"title": "Back Office"},
    {"title": "Purchase"},
    {"title": "Inventory Management & Consumption Tracking"},
    {"title": "SMS Integration"},
    {"title": "Employee Management"},
    {"title": "Promotions Management"},
    {"title": "Ordering Automation"},
    {"title": "Pricing Management"},
    {"title": "Restaurant POS"},
    {"title": "Retail Management"},
    {"title": "Returns Tracking"},
    {"title": "Touch Screen"},
    {"title": "Auto sync online and offline sales channels"},
    {"title": "24/7 Support"},
    {"title": "Discount system"},
    {"title": "Customer Account Profiles"},
    {"title": "Layaway Management"},
    {"title": "Loyalty Program Support"},
    {"title": "eCommerce Management"},
    {"title": "Invoices"},
    {"title": "Transaction Processing"},
    {"title": "Multiple Language"}
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
