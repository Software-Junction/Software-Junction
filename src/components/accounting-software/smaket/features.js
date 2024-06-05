import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Invoice" },
  { "title": "Expense Management" },
  { "title": "Mobile App" },
  { "title": "Purchase Orders" },
  { "title": "Payment Handling" },
  { "title": "Quotation & Estimates" },
  { "title": "Billing Management" },
  { "title": "POS invoicing" },
  { "title": "Inventory Management" },
  { "title": "Field Sales Management" },
  { "title": "Stock Management" },
  { "title": "Barcode Scanning" },
  { "title": "Software Inventory" },
  { "title": "POS Transactions" },
  { "title": "Item Management" },
  { "title": "Receipt Printing" },
  { "title": "Inventory Tracking" },
  { "title": "Bills of Material" },
  { "title": "Procurement Management" },
  { "title": "Invoice Processing" }
];

const moreFeatures = [
  { "title": "Customer Management" },
  { "title": "Billing & Invoicing" },
  { "title": "Purchasing" },
  { "title": "Reporting/Analytics" },
    { "title": "Purchase Order Management" },
    { "title": "TDS / TCS" },
    { "title": "Payment Management" },
    { "title": "Billing for Data" },
    { "title": "Partial Payments" },
    { "title": "Payment Tracking" },
    { "title": "Invoicing" },
    { "title": "Purchasing & Receiving" },
    { "title": "VAT / CST / GST Reports" },
    { "title": "Billing Portal" },
    { "title": "Custom Rate Plans" },
    { "title": "Payment Plans" },
    { "title": "Profit/Loss Statement" },
    { "title": "Credit Notes" },
    { "title": "Barcoding" }
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
