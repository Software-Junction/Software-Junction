import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Payroll Management" },
  { "title": "Task Management" },
  { "title": "Property Management" },
  { "title": "Customer Support" },
  { "title": "Laundry Management" },
  { "title": "Attendance management" },
  { "title": "Multi Currency" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Cab Services" },
  { "title": "Financial Management" },
  { "title": "Inventory Management" },
  { "title": "Online Payment" },
  { "title": "Banquet and conference Management" },
  { "title": "Customer Management" },
  { "title": "Reservation & Booking" },
  { "title": "HR & Payroll" },
  { "title": "POS invoicing" },
  { "title": "Front Office management" },
  { "title": "Food and Beverage Costing" },
  { "title": "Business intelligence (BI)" },
  { "title": "Table Management" },
  { "title": "Mobile App" },
  { "title": "Customer DataBase" },
  { "title": "Multi Property Support" }
];

const moreFeatures = [
  { "title": "Point of Sale (POS)" },
    { "title": "Field Sales Management" },
    { "title": "Group Reservations" },
    { "title": "Credit Card Payment Processing" },
    { "title": "Online Booking" },
    { "title": "Analytics" },
    { "title": "Channel Management" },
    { "title": "Guest Management" },
    { "title": "Employee Management" },
    { "title": "Maintenance Management" },
    { "title": "Reservation & Booking" },
    { "title": "Room Booking Management" },
    { "title": "Booking Management" },
    { "title": "Central Reservation System" },
    { "title": "Housekeeping Management" },
    { "title": "Multi-Property" },
    { "title": "Channel Manager" },
    { "title": "Booking Engine" },
    { "title": "Daily Reports" },
    { "title": "Tax Management" },
    { "title": "Online Reputation Management" },
    { "title": "Loyalty Program" },
    { "title": "Email Marketing" },
    { "title": "Revenue Management" },
    { "title": "Promo Code" },
    { "title": "Employee Directory" },
    { "title": "Guest Experience" },
    { "title": "Competitor Analysis" },
    { "title": "Customizable invoices" },
    { "title": "Channel Partner" },
    { "title": "Dynamic Pricing for Room Rates" },
    { "title": "Feedback Collection" },
    { "title": "Automatic Synchronisation" },
    { "title": "Financial Management" },
    { "title": "Room Allocation Management" },
    { "title": "Commission Calculations" },
    { "title": "Guest Reviews / Ratings" },
    { "title": "Maintenance Scheduling" },
    { "title": "Marketing Management" },
    { "title": "Budgeting & Forecasting" },
    { "title": "Client database" },
    { "title": "Call Management" },
    { "title": "Yield Management" },
    { "title": "Inventory Management" },
    { "title": "Database backup/restore (Management)" },
    { "title": "Tax Calculator" },
    { "title": "Channel Analytics" },
    { "title": "Check-in / Check-out" },
    { "title": "Guest List Management" },
    { "title": "Multi-Country" },
    { "title": "Price Optimization" },
    { "title": "Booth Rental Management" },
    { "title": "Conferences/Conventions" },
    { "title": "Spa and Activities" },
    { "title": "Attendance management" },
    { "title": "Multi Currency" },
    { "title": "Food & Beverage Management" },
    { "title": "Confirmation/Reminders" },
    { "title": "Extended Stay" },
    { "title": "Fee / Commission Management" },
    { "title": "Guest Loyalty" },
    { "title": "Competing Product Analysis" },
    { "title": "Market Analysis" },
    { "title": "Pricing Analytics" },
    { "title": "Online Distribution Management" },
    { "title": "Automatic Synchronisation" },
    { "title": "Accommodation Booking" },
    { "title": "Activities Booking" },
    { "title": "Custom Packages" },
    { "title": "GDS OTA Integration" },
    { "title": "Itinerary Creation" },
    { "title": "Purchasing" },
    { "title": "Alerts/Notifications" },
    { "title": "Booking Notes" },
    { "title": "Kitchen Management" },
    { "title": "Review Monitoring" },
    { "title": "Sentiment Analysis" },
    { "title": "Single Property" },
    { "title": "Reviews Management" },
    { "title": "Banquet Management" },
    { "title": "Recipe Management" },
    { "title": "Group Management" },
    { "title": "Check-In Manager" },
    { "title": "Notes Management" },
    { "title": "Client Management" },
    { "title": "Email Management" },
    { "title": "Commission management" },
    { "title": "Client database" },
    { "title": "Data Import & Export" },
    { "title": "Accounting Integration" },
    { "title": "Dashboard" },
    { "title": "Campaign Management" },
    { "title": "Order Management" },
    { "title": "Channel Integration" },
    { "title": "Back Office" },
    { "title": "Barcode Integration" },
    { "title": "Electronic Signature" },
    { "title": "Channel-wise Reporting" },
    { "title": "Channel-wise Payment Integration" },
    { "title": "CRM" },
    { "title": "Field Sales Management" },
    { "title": "Visitor Tracking" },
    { "title": "Access Controls" },
    { "title": "Balance Sheet" },
    { "title": "Payment Processing" }
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
