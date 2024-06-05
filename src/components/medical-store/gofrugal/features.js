import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Alerts/Notifications" },
  { "title": "Automatic Blocking of Expired Items" },
  { "title": "Barcode Generation" },
  { "title": "Barcode Scanning" },
  { "title": "Batch Verification" },
  { "title": "Billing & Invoicing" },
  { "title": "Billing Management" },
  { "title": "Cash Management" },
  { "title": "CRM & Sales Dashboards" },
  { "title": "Data Backup and Restore" },
  { "title": "Data Security & Accuracy" },
  { "title": "Discount system" },
  { "title": "Document Printing" },
  { "title": "Due bill" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "E-Prescribing" },
  { "title": "Expiry and Near Expiry" },
  { "title": "Fast Search" },
  { "title": "Home Delivery & Due bill" },
  { "title": "Inventory Management" },
  { "title": "MIS Reports" },
  { "title": "Multi-Currency" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Point of Sale (POS)" },
  { "title": "Prescription Management" },
  { "title": "Schedule-H & Narcotics" },
  { "title": "Stock Management" },
  { "title": "Taxation Reports" },
  { "title": "Transaction management" }
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
