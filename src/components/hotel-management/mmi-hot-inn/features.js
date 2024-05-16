import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Sales and Marketing" },
    { "title": "Multi Currency" },
    { "title": "HR & Payroll" },
    { "title": "Front Office management" },
    { "title": "Reservation & Booking" },
    { "title": "Laundry Management" },
    { "title": "Database backup/restore (Management)" },
    { "title": "Messaging System" },
    { "title": "Inventory Management" },
    { "title": "Multi Property Support" },
    { "title": "Banquet and conference Management" },
    { "title": "Financial Management" },
    { "title": "House keeping" },
    { "title": "POS invoicing" },
    { "title": "Property Management" },
    { "title": "Maintainence Management and Administration" },
    { "title": "Food and Beverage Costing" },
    { "title": "CRM" },
    { "title": "Reservations Management" },
    { "title": "Cab Services" },
    { "title": "Maintenance Management" }
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
