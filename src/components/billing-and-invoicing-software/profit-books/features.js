import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Quotation & Estimates" },
  { title: "Recurring invoice" },
  { title: "Taxation Management" },
  { title: "Vendor Management" },
  { title: "Order Management" },
  { title: "Payment Processing" },
  { title: "Invoice" },
  { title: "Multiuser Login & Role-based access control" },
  { title: "Payment Handling" },
  { title: "Product Database" },
  { title: "Supplier and Purchase Order Management" },
  { title: "Warehouse Management" },
  { title: "Billing & Invoicing" },
  { title: "Invoice Designer" },
  { title: "Vat" },
  { title: "Accounts payable" },
  { title: "Accounts Receivable" },
  { title: "General Ledger" },
  { title: "Tax Management" },
  { title: "Accounting" },
  { title: "Customer Management" },
  { title: "Expense Management" },
  { title: "Financial Management" },
  { title: "Inventory Management" },
];

const moreFeatures = [
  { title: "Reporting/Analytics" },
  { title: "Refund Management" },
  { title: "Access Controls/Permissions" },
  { title: "Compliance Tracking" },
  { title: "Hardware Inventory" },
  { title: "Purchasing" },
  { title: "Receipt Printing" },
  { title: "Contact Database" },
  { title: "Invoice Processing" },
  { title: "Returns Management" },
  { title: "Client Management" },
  { title: "Proposal Management" },
  { title: "Mobile Access" },
  { title: "Trust Accounting" },
  { title: "Due date tracking" },
  { title: "Online Invoice Payment" },
  { title: "Customizable invoices" },
  { title: "Online payments" },
  { title: "General Ledger Entry" },
  { title: "Credit Notes" },
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
