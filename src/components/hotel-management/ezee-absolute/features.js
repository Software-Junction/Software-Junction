import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Multi Currency" },
  { "title": "POS invoicing" },
  { "title": "Sales Tracking" },
  { "title": "Reservation & Booking" },
  { "title": "Financial Management" },
  { "title": "Property Management" },
  { "title": "Sales and Marketing" },
  { "title": "Work order management" },
  { "title": "CRM" },
  { "title": "Database backup/restore (Management)" },
  { "title": "Expense Management" },
  { "title": "Inventory Management" },
  { "title": "Mobile App" },
  { "title": "Marketing Automation" },
  { "title": "Multi Location" },
  { "title": "Laundry Management" },
  { "title": "House keeping" },
  { "title": "Front Office management" },
  { "title": "Email Integration" },
  { "title": "Customer DataBase" },
  { "title": "Banquet and conference Management" },
  { "title": "Food and Beverage Costing" },
  { "title": "Multi Property Support" },
  { "title": "Accounting" }
];

const moreFeatures = [
  { "title": "Credit Card Payment Processing" },
    { "title": "Online Booking" },
    { "title": "Reminders" },
    { "title": "Marketing Automation" },
    { "title": "Channel Management" },
    { "title": "Performance Metrics" },
    { "title": "Guest Management" },
    { "title": "Revenue Management" },
    { "title": "Housekeeping Management" },
    { "title": "Guest Experience" },
    { "title": "Sales Management" },
    { "title": "Marketing Management" },
    { "title": "GST Compliance" },
    { "title": "Mobile Access" },
    { "title": "Booking Management" },
    { "title": "Client database" },
    { "title": "Email Marketing" },
    { "title": "Expense Reporting" },
    { "title": "Reviews Management" },
    { "title": "Banquet Management" },
    { "title": "Online Ticketing" },
    { "title": "Commission Calculations" },
    { "title": "Channel Manager" },
    { "title": "Booking Engine" },
    { "title": "Online Reputation Management" },
    { "title": "Google Hotel Ads" },
    { "title": "Intelligent Yield Maximization" },
    { "title": "Hotel Sales Analytics" },
    { "title": "Centralised Reservation System" },
    { "title": "Voucher Management" },
    { "title": "Payment Collection Automation" },
    { "title": "Dynamic Pricing for Room Rates" },
    { "title": "Room Booking Management" },
    { "title": "Reporting/Analytics" },
    { "title": "Access Controls/Permissions" },
    { "title": "Check-in / Check-out" },
    { "title": "Group Reservations" },
    { "title": "GDS / OTA Integration" },
    { "title": "Multi-Property" },
    { "title": "Guest Reviews / Ratings" },
    { "title": "Dynamic Pricing" },
    { "title": "Online Payment" },
    { "title": "Profit & Loss Statement" },
    { "title": "Billing & Invoicing" },
    { "title": "SMS Integration" },
    { "title": "Late Fee Calculation" },
    { "title": "Payment Processing" },
    { "title": "Tax Management" },
    { "title": "Accommodation Booking" },
    { "title": "Custom Packages" },
    { "title": "Reservations Management" },
    { "title": "Alerts/Notifications" },
    { "title": "Booking Notes" },
    { "title": "Single / Group Reservations" },
    { "title": "Staff Management" },
    { "title": "Reporting" },
    { "title": "Discount & Schemes" },
    { "title": "Document Printing" },
    { "title": "Data Backup and Restore" },
    { "title": "Data Security & Accuracy" },
    { "title": "Check-In" },
    { "title": "e-Payment" },
    { "title": "Monthly GST Report" },
    { "title": "Sales Analyse Report" },
    { "title": "Multi-Branch Connectivity" },
    { "title": "GST audit report" },
    { "title": "GST returns" },
    { "title": "Responsive Support" },
    { "title": "Discount Management" },
    { "title": "Customer Review Platform" },
    { "title": "Sentiment Analysis" },
    { "title": "Maintenance Management" },
    { "title": "Single Property" },
    { "title": "Vacation Rental" },
    { "title": "Promo Code" },
    { "title": "CPC & Instant Booking" },
    { "title": "Daily Reports" },
    { "title": "Yield Maximisation" },
    { "title": "Chain Review Analysis" },
    { "title": "Meta Search Marketing on Tripadvisor" },
    { "title": "Secret & Public Promo Codes" },
    { "title": "Auto eCollect for Pay@hotel bookings" },
    { "title": "Welcome and Thank You Messages" },
    { "title": "Email and SMS Alerts" },
    { "title": "Room Allocation Management" },
    { "title": "Channel Performance Analytics" },
    { "title": "Multi-Country" },
    { "title": "Self Check-in" },
    { "title": "Review Notification" },
    { "title": "Guest List Search" },
    { "title": "GDS/OTA Integration" },
    { "title": "Owner Management" },
    { "title": "Dorms" }
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
          {moreFeatures.map((featureM, index) => (
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
          }
          <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Features;
