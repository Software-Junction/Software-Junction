import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Reporting" },
    { "title": "Guest Management" },
    { "title": "Reservation & Booking" },
    { "title": "Inventory Management" },
    { "title": "Multi Property Support" },
    { "title": "Guest Experience" },
    { "title": "Maintainence Management and Administration" },
    { "title": "Front Office management" },
    { "title": "House keeping" },
    { "title": "Property Management" },
    { "title": "Single / Group Reservations" },
    { "title": "Database backup/restore (Management)" },
    { "title": "Employee Management" },
    { "title": "Messaging System" },
    { "title": "Point of Sale (POS)" },
    { "title": "Check-In" },
    { "title": "Channel Management" },
    { "title": "Data Import & Export" },
    { "title": "Groups" },
    { "title": "Self Check-in / Check-Out" },
    { "title": "Online Booking" },
    { "title": "Reservations Management" },
    { "title": "Multi Currency" },
    { "title": "Guest List Management" },
];

const moreFeatures = [
  { "title": "Booking Engine" },
    { "title": "Dynamic Pricing for Room Rates" },
    { "title": "Group Management" },
    { "title": "Dashboard" },
    { "title": "Online Booking Engine" },
    { "title": "Channel Manager" },
    { "title": "Rate Management" },
    { "title": "Daily Reports" },
    { "title": "Vacation Rental" },
    { "title": "Single Property" },
    { "title": "Promo Code" },
    { "title": "Analytics & Reporting" },
    { "title": "Booking Chart Management" },
    { "title": "Automatic Synchronisation" },
    { "title": "Welcome and Thank You Messages" }
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
