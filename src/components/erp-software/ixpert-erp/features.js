import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Sales Quotes" },
  { "title": "Quality Management" },
  { "title": "Field service management" },
  { "title": "Financial Management" },
  { "title": "Integration capabilities" },
  { "title": "Bank Reconciliation" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Dispatching" },
  { "title": "Inventory Management" },
  { "title": "CRM" },
  { "title": "Bill of materials (BoM)" },
  { "title": "Accounts Receivable" },
  { "title": "Transport / Fleet management" },
  { "title": "Project Management" },
  { "title": "Electronic data interchange (EDI) connectors" },
  { "title": "Warehouse Management" },
  { "title": "Accounts payable" },
  { "title": "Manufacturing" },
  { "title": "Commission management" },
  { "title": "Sales and Distribution" },
  { "title": "Budgeting" },
  { "title": "Fixed assets" },
  { "title": "Quotation & Estimates" },
  { "title": "Business intelligence (BI)" }
];

const moreFeatures = [
  { "title": "Financial Accounting" },
{ "title": "Work order management" },
{ "title": "Inventory control" },
{ "title": "Sales Management" },
{ "title": "Distribution Management" },
{ "title": "Purchase Order" },
{ "title": "Dashboard" },
{ "title": "Accounting Management" },
{ "title": "Purchase Management" },
{ "title": "Invoicing" }
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
