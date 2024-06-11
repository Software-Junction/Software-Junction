import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Cloud Computing" },
  { "title": "Customer Management" },
  { "title": "Auto Discount" },
  { "title": "Import/Export DataBase" },
  { "title": "Invoice" },
  { "title": "Credit Card Payment Processing" },
  { "title": "Barcode Scanning" },
  { "title": "Sales Tracking" },
  { "title": "Search Option" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "User Management" },
  { "title": "Vat" },
  { "title": "Inventory Management" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Sales promotions handling" },
  { "title": "Table Management" },
  { "title": "Multiple Payment Types" },
  { "title": "Warehouse Management" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Multi Currency" },
  { "title": "Audit Trail" },
  { "title": "Email Integration" },
  { "title": "Stock Management" },
  { "title": "Home Delivery & Due bill" },
  { "title": "Payment Handling" },
  { "title": "Multiple Language" },
  { "title": "Barcode Integration" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Purchase" },
  { "title": "CRM" },
  { "title": "Returns" },
  { "title": "SMS Integration" },
];

const moreFeatures=[
  { "title": "Billing Management" },
  { "title": "Channel Management" },
  { "title": "Discount system" },
  { "title": "Tax Management" },
  { "title": "Employee Management" },
  { "title": "Loyalty Management" },
  { "title": "eCommerce Management" },
  { "title": "Ordering Automation" },
  { "title": "Refunds and Store Credits" },
  { "title": "Back Office" },
  { "title": "Promotions Management" },
  { "title": "Dashboard" },
  { "title": "Transaction Processing" },
  { "title": "Returns Tracking" },
  { "title": "Pricing Management" },
  { "title": "POS Integration" },
  { "title": "Gift Vouchers" },
  { "title": "Retail Management" },
  { "title": "Restaurant POS" },
  { "title": "Sales Management" },
  { "title": "Ecommerce Integration" },
  { "title": "MIS Reports" },
  { "title": "Ordering Automation" },
  { "title": "Layaway Management" }
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
