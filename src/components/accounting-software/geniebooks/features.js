import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Banking Integration" },
  { "title": "Online Banking Integration" },
  { "title": "Security" },
  { "title": "Taxation Management" },
  { "title": "Expense Management" },
  { "title": "Inventory Management" },
  { "title": "HR & Payroll" },
  { "title": "Payroll Management" },
  { "title": "Accounts Receivable" },
  { "title": "Invoicing" },
  { "title": "Stock Management" },
  { "title": "Fixed assets" },
  { "title": "Manage Customers and Suppliers" },
  { "title": "Accounting" },
  { "title": "Multi Layer Security" }
];

const moreFeatures = [
  { "title": "Online Accounting" },
  { "title": "Online invoicing" },
  { "title": "Financial Accounting" },
  { "title": "Profit & Loss Statement" },
  { "title": "Budgeting & Forecasting" },
  { "title": "Analytical Reporting" },
  { "title": "Compliance Management" },
  { "title": "Compliance Tracking" },
  { "title": "Tax Management" },
  { "title": "GST Compliance" },
  { "title": "GST Tax Invoice" },
  { "title": "GST audit report" },
  { "title": "Taxation & Assessment" },
  { "title": "Financial Reports" },
  { "title": "Purchase Order Management" },
  { "title": "Purchasing & Receiving" },
  { "title": "Bookkeeping" },
  { "title": "Software Inventory" },
  { "title": "Online GST Portal" }
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
