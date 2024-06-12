import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Multi Currency" },
  { title: "Maintainence Management and Administration" },
  { title: "Food and Beverage Costing" },
  { title: "POS invoicing" },
  { title: "Sales and Marketing" },
  { title: "Multi Property Support" },
  { title: "Housekeeping" },
  { title: "Inventory Management" },
  { title: "Reservation & Booking" },
  { title: "Financial Management" },
  { title: "GDS OTA Integration" },
  { title: "Database backup/restore (Management)" },
  { title: "Point of Sale (POS)" },
  { title: "Front Office management" },
  { title: "Groups" },
  { title: "Laundry Management" },
  { title: "Online Booking" },
  { title: "Cab Services" },
  { title: "Messaging System" },
  { title: "Property Management" },
  { title: "Accounting" },
  { title: "Banquet and conference Management" },
  { title: "Reservations Management" },
  { title: "Mobile App" },
];

const moreFeatures = [
  { title: "Revenue Management" },
  { title: "Room Allocation Management" },
  { title: "Guest List Management" },
  { title: "Single / Group Reservations" },
  { title: "Channel Manager" },
  { title: "Online Reputation Management" },
  { title: "Guest Experience" },
  { title: "Google Hotel Ads" },
  { title: "Centralised Reservation System" },
  { title: "Catering Management" },
  { title: "Booking Engine" },
  { title: "Single Property" },
  { title: "Competitor Rate Intelligence" },
  { title: "Dynamic Pricing for Room Rates" },
  { title: "Meta Search Marketing on Google" },
  { title: "Guest Management" },
  { title: "Marketing Management" },
  { title: "Maintenance Management" },
  { title: "Vacation Rental" },
  { title: "Auto eCollect for Pay@hotel bookings" },
  { title: "E-collect" },
  { title: "Promo Code" },
  { title: "Daily Reports" },
  { title: "Email and SMS Alerts" },
  { title: "Yield Maximisation" },
  { title: "Meta Search Marketing on Tripadvisor" },
  { title: "Payment Collection Automation" },
  { title: "Intelligent Yield Maximization" },
  { title: "Welcome and Thank You Messages" },
  { title: "Booking Chart Management" },
  { title: "Reviews Management" },
  { title: "Channel Partner" },
  { title: "Hotel Sales Analytics" },
  { title: "Voucher Management" },
  { title: "CPC & Instant Booking" },
  { title: "Chain Review Analysis" },
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
