import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Sales and Marketing" },
  { "title": "POS invoicing" },
  { "title": "Multi Currency" },
  { "title": "Banquet and conference Management" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Inventory Management" },
  { "title": "House keeping" },
  { "title": "Multi Property Support" },
  { "title": "Financial Management" },
  { "title": "Mobile App" },
  { "title": "Point of Sale (POS)" },
  { "title": "Reservation & Booking" },
  { "title": "Laundry Management" },
  { "title": "Property Management" },
  { "title": "Cab Services" },
  { "title": "GDS OTA Integration" },
  { "title": "Front Office management" },
  { "title": "Messaging System" },
  { "title": "Online Booking" },
  { "title": "Maintainence Management and Administration" },
  { "title": "Food and Beverage Costing" },
  { "title": "Groups" },
  { "title": "Guest Management" },
  { "title": "Reservations Management" }
];

const moreFeatures = [
  { "title": "Maintenance Management" },
  { "title": "Google Hotel Ads" },
  { "title": "Centralised Reservation System" },
  { "title": "Booking Engine" },
  { "title": "Dynamic Pricing for Room Rates" },
  { "title": "Catering Management" },
  { "title": "Meta Search Marketing on Google" },
  { "title": "Guest List Management" },
  { "title": "Guest Experience" },
  { "title": "Channel Partner" },
  { "title": "Booking Chart Management" },
  { "title": "Promo Code" },
  { "title": "Meta Search Marketing on Tripadvisor" },
  { "title": "Payment Collection Automation" },
  { "title": "Voucher Management" },
  { "title": "Revenue Management" },
  { "title": "Online Reputation Management" },
  { "title": "Single Property" },
  { "title": "Intelligent Yield Maximization" },
  { "title": "Welcome and Thank You Messages" },
  { "title": "Competitor Rate Intelligence" },
  { "title": "Channel Manager" },
  { "title": "Single / Group Reservations" },
  { "title": "Reviews Management" },
  { "title": "E-collect" },
  { "title": "Dynamic Pricing for Room Rates" },
  { "title": "Hotel Sales Analytics" },
  { "title": "Daily Reports" },
  { "title": "Auto eCollect for Pay@hotel bookings" },
  { "title": "Marketing Management" },
  { "title": "SMS Alerts" },
  { "title": "Room Allocation Management" },
  { "title": "Guest List Management" },
  { "title": "Channel Partner" }
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
