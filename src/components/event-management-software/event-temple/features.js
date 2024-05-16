import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Task Management" },
{ "title": "Sales Management" },
{ "title": "Event Calendar" },
{ "title": "Room Block Management" },
{ "title": "Wedding Management" },
{ "title": "Event Logs" },
{ "title": "Calendar Management" },
{ "title": "Payments" },
{ "title": "Online Booking" },
{ "title": "Client Management" },
{ "title": "Resource Management" },
{ "title": "Reporting" },
{ "title": "Beverage Management" },
{ "title": "Meeting Management" },
{ "title": "Customizable Dashboard" },
{ "title": "Integrated CRM" },
{ "title": "Catering Management" },
{ "title": "Data Analysis Tools" },
{ "title": "Vendor Management" },
{ "title": "Social Promotion" },
{ "title": "Space / Room Setup" },
{ "title": "KPI Module" },
{ "title": "Customer Management" },
{ "title": "Scheduling" }
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
