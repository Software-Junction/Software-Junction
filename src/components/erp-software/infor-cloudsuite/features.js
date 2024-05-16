import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Order Management" },
{ "title": "Order Fulfillment" },
{ "title": "Financial Management" },
{ "title": "Quality Management" },
{ "title": "Shipping Management" },
{ "title": "Capacity Planning" },
{ "title": "Supply Chain Management" },
{ "title": "Transportation Management" },
{ "title": "Distribution Management" },
{ "title": "Inventory Management" },
{ "title": "Warehouse Management" },
{ "title": "Project Management" },
{ "title": "Demand Planning" },
{ "title": "Change Management" },
{ "title": "Supplier Management" },
{ "title": "Safety Management" },
{ "title": "Electronic Data Interchange" },
{ "title": "Automated Scheduling" },
{ "title": "HR Management" },
{ "title": "MES" },
{ "title": "MRP" },
{ "title": "What-if Analysis" },
{ "title": "Import/Export Management" },
{ "title": "Enterprise Asset Management" },
{ "title": "Maintenance Management" },
{ "title": "CRM" }
];




const Features = ({ styles }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-4">Key Features</h3>
          </Col>

          {featuresData.map((feature, index) => (
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
