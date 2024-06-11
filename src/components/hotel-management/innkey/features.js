import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Accounting" },
  { "title": "CRM" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Financial Management" },
  { "title": "Inventory Management" },
  { "title": "Multi Currency" },
  { "title": "POS invoicing" },
  { "title": "Front Office management" },
  { "title": "House keeping" },
  { "title": "Laundry Management" },
  { "title": "Banquet and conference Management" },
  { "title": "Property Management" },
  { "title": "Food and Beverage Costing" },
  { "title": "Multi Property Support" },
  { "title": "Reservation & Booking" },
  { "title": "Sales and Marketing" },
  { "title": "Mobile App" },
  { "title": "Online Payment" },
  { "title": "Point of Sale (POS)" },
  { "title": "Online Booking" },
  { "title": "Central Reservation System" },
  { "title": "GDS OTA Integration" },
  { "title": "Reservations Management" },
  { "title": "Single / Group Reservations" }
];

const moreFeatures = [
  { "title": "Marketing Management" },
    { "title": "Housekeeping and Maintenance Management" },
    { "title": "Group Bookings" },
    { "title": "Guest Management" },
    { "title": "Notification & Alerts" },
    { "title": "Vacation Rental" },
    { "title": "Centralised Reservation System" },
    { "title": "Single Property" },
    { "title": "Front Desk Operations" },
    { "title": "Yield Maximisation" },
    { "title": "Guest List Management" },
    { "title": "Maintenance Management" },
    { "title": "Point of Sale (POS) integration" },
    { "title": "Reviews Management" },
    { "title": "Guest Experience" },
    { "title": "Housekeeping Management" },
    { "title": "Yield Management" },
    { "title": "Catering Management" },
    { "title": "Check-in / Check-out" }
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
