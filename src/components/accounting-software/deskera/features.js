import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "HR & Payroll" },
  { "title": "Banking Integration" },
  { "title": "CRM" },
  { "title": "Expense Tracking" },
  { "title": "Multi Currency" },
  { "title": "Bank Reconciliation" },
  { "title": "Forecasting" },
  { "title": "Accounts payable" },
  { "title": "Order Management" },
  { "title": "Barcode Integration" },
  { "title": "Bookkeeping" },
  { "title": "Ad hoc Analysis" },
  { "title": "Mobile Support" },
  { "title": "Bills of Material" },
  { "title": "Financial Reporting" },
  { "title": "Accounts Receivable" },
  { "title": "Expense Tracking" },
  { "title": "ACH Payment Processing" },
  { "title": "Analytics" },
  { "title": "Accounting Integration" },
  { "title": "Client Management" },
  { "title": "Activity Tracking" },
  { "title": "Budgeting" },
  { "title": "ACH Check Transactions" },
  { "title": "Automated Scheduling" },
  { "title": "Check Processing" },
  { "title": "CPA Firms" },
  { "title": "Accrual Accounting" },
  { "title": "401(k) Tracking" },
  { "title": "Drag & Drop" }
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

          {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
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
          ))
        ):(
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

          {isShowMore && 
          <>
          {/* {moreFeatures.map((featureM, index) => (
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
