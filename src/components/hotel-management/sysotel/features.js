import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Inventory control" },
  { "title": "SEO Management" },
  { "title": "Property Management" },
  { "title": "Event Calendar" },
  { "title": "Channel Management" },
  { "title": "Sales Forecasting" },
  { "title": "POS invoicing" },
  { "title": "POS Integration" },
  { "title": "Online Payment" },
  { "title": "Central Reservation System" },
  { "title": "Point of Sale (POS)" },
  { "title": "House keeping" },
  { "title": "Performance Metrics" },
  { "title": "Forecasting" },
  { "title": "Social Media Integration" },
  { "title": "Front Office management" },
  { "title": "Strategic Planning" },
  { "title": "Inventory Management" },
  { "title": "Multi Property Support" },
  { "title": "Reservation & Booking" },
  { "title": "CRM" },
  { "title": "Analytics" },
  { "title": "Residential Properties" },
  { "title": "Key Performance Indicators" }
];

const moreFeatures = [
  { "title": "Competitor Analysis" },
    { "title": "Room Scheduling" },
    { "title": "Sales Forecasting" },
    { "title": "Yield Maximisation" },
    { "title": "Promotions Management" },
    { "title": "Keyword Tracking" },
    { "title": "Keyword Research Tools" },
    { "title": "Room Allocation Management" },
    { "title": "Booking Management" },
    { "title": "Online invoicing" },
    { "title": "Guest Management" },
    { "title": "Room Booking Management" },
    { "title": "Booking Engine" },
    { "title": "Reservations Management" },
    { "title": "Channel Manager" },
    { "title": "Single Property" },
    { "title": "Competitor Analysis" },
    { "title": "Centralised Reservation System" },
    { "title": "Real-time Chat" },
    { "title": "Price Optimization Automation" },
    { "title": "Guest Experience" },
    { "title": "Reporting and Analytics" },
    { "title": "Revenue Management" },
    { "title": "Review Management" },
    { "title": "Guest Engagement" },
    { "title": "Review Monitoring" },
    { "title": "Room Availability Management" },
    { "title": "Channel Analysis" },
    { "title": "Social Media Metrics" },
    { "title": "Online Payment Processing" },
    { "title": "GDS OTA Integration" },
    { "title": "Social Media Monitoring" },
    { "title": "Channel Analytics" },
    { "title": "Guest List Management" },
    { "title": "Sentiment Analysis" },
    { "title": "Group Bookings" },
    { "title": "Website Monitoring" },
    { "title": "Payment Collection Automation" },
    { "title": "Revenue Management" },
    { "title": "Guest Management" },
    { "title": "Channel Manager" },
    { "title": "Reservations Management" },
    { "title": "Online Reputation Management" },
    { "title": "CPC & Instant Booking" },
    { "title": "Google Hotel Ads" },
    { "title": "Intelligent Yield Maximization" },
    { "title": "Hotel Sales Analytics" },
    { "title": "Centralised Reservation System" },
    { "title": "Individual Property Review Analysis" },
    { "title": "Voucher Management" },
    { "title": "Payment Collection Automation" },
    { "title": "Booking Chart Management" },
    { "title": "Dynamic Pricing for Room Rates" },
    { "title": "Business Insights" },
    { "title": "Room Scheduling" },
    { "title": "Online Payment Processing" },
    { "title": "Reporting/Analytics" },
    { "title": "Room Booking Management" },
    { "title": "Channel Analysis" },
    { "title": "Price Optimization Automation" },
    { "title": "Pricing Analytics" },
    { "title": "Reporting and Analytics" },
    { "title": "Rate Management" },
    { "title": "Social Media Tagging" },
    { "title": "Check-in / Check-out" },
    { "title": "Machine Learning" },
    { "title": "Review Request" },
    { "title": "QR Codes" },
    { "title": "Guest Reviews / Ratings" },
    { "title": "Booking Engine Customization" },
    { "title": "Room Availability Management" },
    { "title": "Rate Parity Monitoring" },
    { "title": "Promotions and Special Offers" },
    { "title": "Rate and Inventory Management" },
    { "title": "Guest Check-In and Check-Out" },
    { "title": "Centralized Reservation System" },
    { "title": "Guest History and Profile Management" },
    { "title": "Guest Communication and Messaging" },
    { "title": "Channel-wise Payment Integration" },
    { "title": "Guest Rating" },
    { "title": "Review Notification" },
    { "title": "Front Desk Operations" },
    { "title": "Booking Engine Integration" },
    { "title": "Online Reviews and Reputation Management" },
    { "title": "Reservation Management" },
    { "title": "Dynamic Pricing" },
    { "title": "Multi-Property Support" },
    { "title": "Room Upgrades and Add-ons" },
    { "title": "Group Booking Management" },
    { "title": "Channel Integration" },
    { "title": "Channel Mapping and Mapping Rules" },
    { "title": "Channel-wise Revenue Tracking" },
    { "title": "Group Reservations" },
    { "title": "Channel Performance Analytics" },
    { "title": "Rate Comparison and Rate Shopping Tools" },
    { "title": "Reservation Synchronization" },
    { "title": "Channel-wise Payment Integration" },
    { "title": "White Label" },
    { "title": "Competitive Analysis" },
    { "title": "Fulfillment Distribution" },
    { "title": "Channel-wise Revenue Tracking" },
    { "title": "Rate Plan Management" },
    { "title": "Spot Reservations Management" },
    { "title": "Multi-language and multi-currency support" },
    { "title": "Room Category Mapping" },
    { "title": "Guest Reviews / Ratings" },
    { "title": "Guest Communication and Messaging" },
    { "title": "Pickup report" },
    { "title": "GDS / OTA Integration" },
    { "title": "Restriction Management" },
    { "title": "For Hospitality Industry" },
    { "title": "Yield Management" },
    { "title": "Review Management" },
    { "title": "GDS/OTA Integration" },
    { "title": "Machine Learning" },
    { "title": "Channel Attribution" },
    { "title": "Guest Engagement" },
    { "title": "Sentiment Analysis" },
    { "title": "Online Reviews and Reputation Management" },
    { "title": "Guest Engagement" },
    { "title": "Channel-wise Payment Integration" },
    { "title": "Channel Manager" },
    { "title": "Reservations Management" },
    { "title": "Guest Reviews / Ratings" },
    { "title": "GDS/OTA Integration" },
    { "title": "Revenue Management" },
    { "title": "Guest Management" },
    { "title": "Group Bookings" },
    { "title": "Online Payment Processing" },
    { "title": "Rate Management" },
    { "title": "Channel Analysis" },
    { "title": "Yield Management" },
    { "title": "Online Booking" },
    { "title": "Guest Communication and Messaging" },
    { "title": "Guest List Management" },
    { "title": "Review Monitoring" },
    { "title": "Booking Engine" },
    { "title": "Online Registration" },
    { "title": "Channel Manager" },
    { "title": "Online Booking" },
    { "title": "Online invoicing" },
    { "title": "Channel-wise Revenue Tracking" },
    { "title": "Review Request" },
    { "title": "Channel Mapping and Mapping Rules" },
    { "title": "Room Booking Management" },
    { "title": "Channel Performance Analytics" },
    { "title": "Rate and Inventory Management" },
    { "title": "Pickup report" },
    { "title": "Centralized Reservation System" },
    { "title": "For Hospitality Industry" },
    { "title": "Channel Attribution" },
    { "title": "Competitive Analysis" },
    { "title": "Channel Rate Comparison" },
    { "title": "Rate Plan Management" },
    { "title": "Guest Rating" },
    { "title": "Spot Reservations Management" },
    { "title": "Review Notification" },
    { "title": "Historical Performance Data" },
    { "title": "Review Management" },
    { "title": "Fulfillment Distribution" },
    { "title": "White Label" }
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
