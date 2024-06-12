import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Cab Services" },
  { "title": "Mobile App" },
  { "title": "Point of Sale (POS)" },
  { "title": "Online Booking" },
  { "title": "GDS OTA Integration" },
  { "title": "Reservations Management" },
  { "title": "Guest Management" },
  { "title": "Revenue Management" },
  { "title": "Single / Group Reservations" },
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
  { "title": "Sales and Marketing" }
];

const moreFeatures = [
  { "title": "Guest Experience" },
    { "title": "Marketing Management" },
    { "title": "Catering Management" },
    { "title": "Reservation & Booking" },
    { "title": "Guest List Management" },
    { "title": "Maintenance Management" },
    { "title": "Single Property" },
    { "title": "Reviews Management" },
    { "title": "Vacation Rental" },
    { "title": "Channel Manager" },
    { "title": "Booking Engine" },
    { "title": "Online Reputation Management" },
    { "title": "CPC & Instant Booking" },
    { "title": "Promo Code" },
    { "title": "Google Hotel Ads" },
    { "title": "Intelligent Yield Maximization" },
    { "title": "E-collect" },
    { "title": "Daily Reports" },
    { "title": "Centralised Reservation System" },
    { "title": "Yield Maximisation" },
    { "title": "Chain Review Analysis" },
    { "title": "Individual Property Review Analysis" },
    { "title": "Meta Search Marketing on Tripadvisor" },
    { "title": "Secret & Public Promo Codes" },
    { "title": "Auto eCollect for Pay@hotel bookings" },
    { "title": "Welcome and Thank You Messages" },
    { "title": "Email and SMS Alerts" },
    { "title": "Voucher Management" },
    { "title": "Payment Collection Automation" },
    { "title": "Booking Chart Management" },
    { "title": "Room Allocation Management" },
    { "title": "Dynamic Pricing for Room Rates" }
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

          {displayFeatures.length > 0 ? (
          displayFeatures.map((feature, index) => (
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
          ))
        ) : (
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

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
