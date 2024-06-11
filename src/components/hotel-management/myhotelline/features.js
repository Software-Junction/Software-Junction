import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Reservation & Booking" },
  { "title": "Banking Integration" },
  { "title": "HR & Payroll" },
  { "title": "Laundry Management" },
  { "title": "Inventory Management" },
  { "title": "Accounts payable" },
  { "title": "Front Office management" },
  { "title": "Multi Location" },
  { "title": "Mobile Support" },
  { "title": "Multi Currency" },
  { "title": "Barcode Integration" },
  { "title": "Banquet and conference Management" },
  { "title": "Property Management" },
  { "title": "Food and Beverage Costing" },
  { "title": "Maintenance Staff Management" },
  { "title": "Accounts Receivable" },
  { "title": "Vendor Management" },
  { "title": "Inventory control" },
  { "title": "Online Payment" },
  { "title": "Barcode Scanning" },
  { "title": "Credit Card Payment Processing" },
  { "title": "Loyalty Management" },
  { "title": "POS Integration" },
  { "title": "Commission management" }
];

const moreFeatures = [
  { "title": "Central Reservation System" },
  { "title": "Maintenance Management" },
  { "title": "Online Booking" },
  { "title": "Accounting Integration" },
  { "title": "Payment Processing" },
  { "title": "Channel Management" },
  { "title": "Reservations Management" },
  { "title": "Visitor Tracking" },
  { "title": "Access Controls" },
  { "title": "Balance Sheet" },
  { "title": "Activity Tracking" },
  { "title": "Accommodation Booking" },
  { "title": "Activities Booking" },
  { "title": "Housekeeping Management" },
  { "title": "Group Bookings" },
  { "title": "Property Inspections" },
  { "title": "Accounting Management" },
  { "title": "Cost Tracking" },
  { "title": "24/7 Support" },
  { "title": "Badge Management" },
  { "title": "Catering Management" },
  { "title": "Food Costing" },
  { "title": "Loyalty Program Support" },
  { "title": "Restaurant POS" },
  { "title": "Maintenance Scheduling" },
  { "title": "Vacation Rental" },
  { "title": "Costing" },
  { "title": "Banquet Management" },
  { "title": "Booking Management" },
  { "title": "For Restaurants" },
  { "title": "Kiosk Ticketing" },
  { "title": "Credit Card Processing" },
  { "title": "Committee Management" },
  { "title": "Commission Calculations" },
  { "title": "Channel Manager" },
  { "title": "Booking Engine" },
  { "title": "Chain Review Analysis" },
  { "title": "Channel Partner" },
  { "title": "Account Tracking" },
  { "title": "ACH Payment Processing" },
  { "title": "Retail Inventory Management" },
  { "title": "Loyalty Program" },
  { "title": "Chatbot" },
  { "title": "Access Controls/Permissions" },
  { "title": "Channel Analysis" },
  { "title": "Multi-Channel Management" },
  { "title": "Material Management" },
  { "title": "Multi-Language" },
  { "title": "Channel Attribution" },
  { "title": "Barcode / Ticket Scanning" },
  { "title": "Food & Beverage Management" },
  { "title": "Activity Registration" },
  { "title": "Cash Drawer Management" },
  { "title": "Check Cashing" },
  { "title": "Bar POS" },
  { "title": "Vendor Managed Inventory" },
  { "title": "GDS / OTA Integration" },
  { "title": "Channel Integration" },
  { "title": "Automated Rate Distribution" },
  { "title": "Booking Notifications" },
  { "title": "Booking Engine Customization" },
  { "title": "Booking Engine Integration" },
  { "title": "Centralized Dashboard" },
  { "title": "Channel Performance Analytics" },
  { "title": "Channel-wise Reporting" },
  { "title": "Channel Rate Comparison" },
  { "title": "Channel Mapping and Mapping Rules" },
  { "title": "Booking Modification Handling" },
  { "title": "Centralized Inventory Control" },
  { "title": "Channel-wise Payment Integration" },
  { "title": "CRM and Guest Relationship Management" },
  { "title": "Channel Management and Distribution" }
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
