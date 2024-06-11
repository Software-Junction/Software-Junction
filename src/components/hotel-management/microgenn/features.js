import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Sales and Marketing" },
  { "title": "Banquet and conference Management" },
  { "title": "Mobile App" },
  { "title": "Database backup/restore (Management)" },
  { "title": "HR & Payroll" },
  { "title": "24/7 Support" },
  { "title": "Central Reservation System" },
  { "title": "Reservation & Booking" },
  { "title": "Point of Sale (POS)" },
  { "title": "Inventory Management" },
  { "title": "Loyalty Program" },
  { "title": "Guest Management" },
  { "title": "POS invoicing" },
  { "title": "Back Office" },
  { "title": "Laundry Management" },
  { "title": "Email and SMS Alerts" },
  { "title": "Accounting Integration" },
  { "title": "Catering Management" },
  { "title": "Feedback Management" },
  { "title": "Single / Group Reservations" },
  { "title": "Membership Management" },
  { "title": "House keeping" },
  { "title": "Food and Beverage Costing" },
  { "title": "Front Office management" },
  { "title": "Booking Engine" },
  { "title": "Food & Beverage Management" },
  { "title": "Bar POS" },
  { "title": "Call Monitoring" },
  { "title": "Accounting" }
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
                  <span style={{ color: "#f95738 " }}>
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
