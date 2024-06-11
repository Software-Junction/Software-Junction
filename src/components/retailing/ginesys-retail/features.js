import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Payment Gateway Integration" },
  { "title": "Banking Integration" },
  { "title": "Inventory Management" },
  { "title": "Cloud Computing" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "Barcode Integration" },
  { "title": "Auto Discount" },
  { "title": "Expense Management" },
  { "title": "Audit Trail" },
  { "title": "Payment Handling" },
  { "title": "CRM" },
  { "title": "Taxation Management" },
  { "title": "Sales promotions handling" },
  { "title": "Invoice" },
  { "title": "Home Delivery & Due bill" },
  { "title": "Production Management" },
  { "title": "Customer Management" },
  { "title": "Vendor Management" },
  { "title": "Email Integration" },
  { "title": "Warehouse Management" },
  { "title": "Import/Export DataBase" },
  { "title": "Multi Location" }
];

const moreFeatures = [
  {"title": "Credit Card Payment Processing"},
  {"title": "Inventory Management & Consumption Tracking"},
  {"title": "Budgeting & Forecasting"},
  {"title": "Inventory control"},
  {"title": "Point of Sale (POS)"},
  {"title": "Activity Tracking"},
  {"title": "Returns Management"},
  {"title": "Procurement Management"},
  {"title": "Gift Vouchers"},
  {"title": "Transaction Processing"},
  {"title": "Order Management"},
  {"title": "Promotions Management"},
  {"title": "Accounting Management"},
  {"title": "Channel Analytics"},
  {"title": "Barcode Scanning"},
  {"title": "Sales Tracking"},
  {"title": "Kitting"},
  {"title": "Dispatch Management"},
  {"title": "Ad Hoc Reports"},
  {"title": "Data Security"},
  {"title": "Invoice Designer"},
  {"title": "Billing Management"},
  {"title": "Tax Management"},
  {"title": "Budget Management"},
  {"title": "Demand Planning"},
  {"title": "Back Order Management"},
  {"title": "Inventory Management"},
  {"title": "Multi-Location"},
  {"title": "SMS Integration"},
  {"title": "Billing & Invoicing"},
  {"title": "Loyalty Management"},
  {"title": "Returns"},
  {"title": "Channel Management"},
  {"title": "User Management"},
  {"title": "Supply Chain Management"},
  {"title": "Gift Card Management"},
  {"title": "Back Office"},
  {"title": "Ecommerce Integration"},
  {"title": "Version Control"},
  {"title": "Cost Tracking"},
  {"title": "Customer DataBase"},
  {"title": "Receipt Printing"},
  {"title": "Accounting Management"},
  {"title": "Product configurator"},
  {"title": "Sales Management"},
  {"title": "Order Fulfillment"},
  {"title": "Data Analysis"},
  {"title": "Analytics"},
  {"title": "Discount Management"},
  {"title": "Purchase"},
  {"title": "Promotions Management"},
  {"title": "Multiple Payment Types"},
  {"title": "Employee Management"},
  {"title": "Ad Hoc Reports"},
  {"title": "Sales Trend Analysis"},
  {"title": "Auto sync online and offline sales channels"},
  {"title": "Data Synchronization"},
  {"title": "Tax Management"},
  {"title": "Multi-Location"},
  {"title": "Invoice"},
  {"title": "Data Analysis"},
  {"title": "Loyalty Program Support"},
  {"title": "Sales promotions handling"},
  {"title": "SMS Integration"},
  {"title": "Barcode Integration"},
  {"title": "Touch Screen"},
  {"title": "Back Office"},
  {"title": "Catalog Management"},
  {"title": "Data Integration"},
  {"title": "Mobile Access"},
  {"title": "Channel Management"},
  {"title": "Supply Chain Management"},
  {"title": "Data Synchronization"},
  {"title": "Job Management"},
  {"title": "Discount system"},
  {"title": "Returns Tracking"},
  {"title": "Data Integration"},
  {"title": "Built-In Accounting"},
  {"title": "Closing Documents"},
  {"title": "Reporting"},
  {"title": "Inventory control"},
  {"title": "Accounting Management"},
  {"title": "Vat"},
  {"title": "Barcode Scanning"},
  {"title": "Sales Management"},
  {"title": "Customer Account Profiles"},
  {"title": "Channel Management"},
  {"title": "Back Order Management"},
  {"title": "Gift Vouchers"},
  {"title": "Inventory Management & Consumption Tracking"},
  {"title": "Sales Tracking"},
  {"title": "Catalog Management"},
  {"title": "Supply Chain Management"},
  {"title": "Order Fulfillment"},
  {"title": "Sales promotions handling"},
  {"title": "Budgeting & Forecasting"},
  {"title": "Mobile Access"},
  {"title": "24/7 Support"}
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
