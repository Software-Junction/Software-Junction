import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Stock Management" },
    { "title": "Online Booking" },
    { "title": "POS Transactions" },
    { "title": "Billing & Invoicing" },
    { "title": "Housekeeping Management" },
    { "title": "Front Office management" },
    { "title": "POS invoicing" },
    { "title": "Analytics" },
    { "title": "Online Payment" },
    { "title": "Access Controls" },
    { "title": "Notification & Alerts" },
    { "title": "Invoices" },
    { "title": "Accommodation Booking" },
    { "title": "User Activity Monitoring" },
    { "title": "POS Integration" },
    { "title": "Revenue Management" },
    { "title": "Onboarding" },
    { "title": "24/7 Support" },
    { "title": "Vacation Rental" },
    { "title": "Split Billing" },
    { "title": "Customizable invoices" },
    { "title": "Channel Manager" },
    { "title": "Multi-Currency" },
    { "title": "Inventory Management" }
];

const moreFeatures = [
  { "title": "Review Management" },
  { "title": "Dynamic Pricing" },
  { "title": "Daily Reports" },
  { "title": "Data Extraction" },
  { "title": "Analytical Reporting" },
  { "title": "Access Controls/Permissions" },
  { "title": "GDS/OTA Integration" },
  { "title": "Booking Engine" },
  { "title": "Activity / News Feed" },
  { "title": "Group Reservations" },
  { "title": "Discount / Coupon Management" },
  { "title": "Google Hotel Ads" },
  { "title": "Online Invoice Payment" },
  { "title": "Statistical Analysis" },
  { "title": "Self Check-in" },
  { "title": "Activity Log" },
  { "title": "For Hospitality Industry" }
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
                  <span style={{ color: "#FC5185 " }}>
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
                  <span style={{ color: "#FC5185 " }}>
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
