import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Business intelligence (BI)" },
  { "title": "Document Management" },
  { "title": "Multicurrency payment processing" },
  { "title": "Sales and Distribution" },
  { "title": "Budgeting" },
  { "title": "CRM" },
  { "title": "HR & Payroll" },
  { "title": "Inventory Management" },
  { "title": "Warehouse Management" },
  { "title": "Financial Management" },
  { "title": "Applicant tracking" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "Integration capabilities" },
  { "title": "Quotation & Estimates" },
  { "title": "Accounts Receivable" },
  { "title": "Accounts payable" },
  { "title": "Bank Reconciliation" },
  { "title": "Time Tracking" },
  { "title": "Sales Quotes" },
  { "title": "Transport / Fleet management" },
  { "title": "Quality Management" },
  { "title": "CMMS/EAM" },
  { "title": "Bill of materials (BoM)" },
  { "title": "Manufacturing" }
];

const moreFeatures = [
  { "title": "Fund accounting" },
  { "title": "Purchase Order" },
  { "title": "General Ledger" },
  { "title": "Business process modeling (BPM)" },
  { "title": "Field service management" },
  { "title": "Inventory control" },
  { "title": "Electronic data interchange (EDI) connectors" },
  { "title": "Credit card processing interface" },
  { "title": "Dispatching" },
  { "title": "Invoicing" },
  { "title": "Multi-carrier shipping integration" },
  { "title": "Work order management" },
  { "title": "Commission management" },
  { "title": "Fundraising Management" },
  { "title": "Electronic funds transfer (EFT)" }
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
