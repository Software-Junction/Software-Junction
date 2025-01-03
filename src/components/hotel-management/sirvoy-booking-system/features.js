import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Reservation & Booking" },
  { "title": "Online Booking" },
  { "title": "Point of Sale (POS)" },
  { "title": "Inventory Management" },
  { "title": "Accounting" },
  { "title": "Front Office management" },
  { "title": "House keeping" },
  { "title": "Property Management" },
  { "title": "Multi Property Support" },
  { "title": "Customer Management" },
  { "title": "Sales and Marketing" },
  { "title": "Billing & Invoicing" },
  { "title": "Payment Processing" },
  { "title": "Expense Management" },
  { "title": "Financial Management" },
  { "title": "HR & Payroll" },
  { "title": "Loyalty Management" },
  { "title": "Employee Management" },
  { "title": "Channel Management" },
  { "title": "Mobile App" },
  { "title": "POS invoicing" },
  { "title": "Laundry Management" },
  { "title": "Multi Currency" },
  { "title": "Event Management" }
];

const moreFeatures = [
  { "title": "Revenue Management" },
  { "title": "Room Booking Management" },
  { "title": "Guest Engagement" },
  { "title": "Promotions Management" },
  { "title": "Booking Notes" },
  { "title": "Housekeeping Management" },
  { "title": "Profile Management" },
  { "title": "Client Management" },
  { "title": "Marketing Management" },
  { "title": "Group Management" },
  { "title": "Check-In" },
  { "title": "Maintenance Management" },
  { "title": "Guest Experience" },
  { "title": "Group Bookings" },
  { "title": "Guest Management" },
  { "title": "Vacancy Tracking" },
  { "title": "Online Reputation Management" },
  { "title": "Single / Group Reservations" },
  { "title": "Accommodation Booking" },
  { "title": "Analytics" },
  { "title": "Data Import & Export" },
  { "title": "Third Party Booking" },
  { "title": "Client database" },
  { "title": "Reservations Management" },
  { "title": "Channel Manager" },
  { "title": "Booking Engine" },
  { "title": "GDS OTA Integration" },
  { "title": "Activities Booking" },
  { "title": "Contact Database" },
  { "title": "Back Office" },
  { "title": "Guest List Management" },
  { "title": "Discount Management" },
  { "title": "Secret & Public Promo Codes" },
  { "title": "Auto eCollect for Pay@hotel bookings" },
  { "title": "Welcome and Thank You Messages" },
  { "title": "Email and SMS Alerts" },
  { "title": "Voucher Management" },
  { "title": "Payment Collection Automation" },
  { "title": "Booking Chart Management" },
  { "title": "Room Allocation Management" },
  { "title": "Dynamic Pricing for Room Rates" },
  { "title": "Channel Partner" },
  { "title": "Room Scheduling" },
  { "title": "Analytics & Reporting" },
  { "title": "Online Distribution Management" },
  { "title": "Rich Calendar" },
  { "title": "Online Booking Engine" },
  { "title": "Automatic Synchronisation" },
  { "title": "Guest Loyalty" },
  { "title": "Rate Management" },
  { "title": "Weddings/Parties" },
  { "title": "Cash Drawer Management" },
  { "title": "Guest List Search" },
  { "title": "Multi-Property" },
  { "title": "Dorms" },
  { "title": "Private Rooms" },
  { "title": "Price Optimization" },
  { "title": "Reputation Management" },
  { "title": "Spa and Activities" },
  { "title": "Condo/Timeshare" },
  { "title": "Club Management" },
  { "title": "Banquet Management" },
  { "title": "Group Scheduling" },
  { "title": "Meta Search Marketing on Tripadvisor" },
  { "title": "CPC & Instant Booking" },
  { "title": "Promo Code" },
  { "title": "Google Hotel Ads" },
  { "title": "Intelligent Yield Maximization" },
  { "title": "Hotel Sales Analytics" },
  { "title": "Daily Reports" },
  { "title": "Centralised Reservation System" },
  { "title": "Yield Maximisation" },
  { "title": "Chain Review Analysis" }
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
