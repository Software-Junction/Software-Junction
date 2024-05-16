import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Reservation & Booking" },
    { "title": "Online Booking" },
    { "title": "Point of Sale (POS)" },
    { "title": "Guest Management" },
    { "title": "Front Office management" },
    { "title": "Marketing Management" },
    { "title": "Employee Management" },
    { "title": "House keeping" },
    { "title": "Property Management" },
    { "title": "Multi Property Support" },
    { "title": "Channel Manager" },
    { "title": "Guest List Management" },
    { "title": "Guest Experience" },
    { "title": "Booking Engine" },
    { "title": "Online Reputation Management" },
    { "title": "Daily Reports" },
    { "title": "Vacation Rental" },
    { "title": "Dashboard" },
    { "title": "Centralised Reservation System" },
    { "title": "Back Office" },
    { "title": "Single Property" }
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
