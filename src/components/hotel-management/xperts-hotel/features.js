import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Multi Property Support" },
  { "title": "Centralised Reservation System" },
  { "title": "Front Office management" },
  { "title": "Vacation Rental" },
  { "title": "Point of Sale (POS)" },
  { "title": "Mobile App" },
  { "title": "Reservations Management" },
  { "title": "Dynamic Pricing for Room Rates" },
  { "title": "Financial Management" },
  { "title": "Inventory Management" },
  { "title": "POS invoicing" },
  { "title": "Single Property" },
  { "title": "Groups" },
  { "title": "Laundry Management" },
  { "title": "Guest Management" },
  { "title": "Online Booking" },
  { "title": "Channel Manager" },
  { "title": "Booking Chart Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Banquet and conference Management" },
  { "title": "House keeping" },
  { "title": "Property Management" },
  { "title": "Food and Beverage Costing" },
  { "title": "Reservation & Booking" },
  { "title": "GDS OTA Integration" },
  { "title": "Room Allocation Management" },
  { "title": "Single / Group Reservations" },
  { "title": "Booking Engine" }
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
