import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Inspection Management" },
  { "title": "Alerts/Notifications" },
  { "title": "Expense Management" },
  { "title": "Time & Expense Tracking" },
  { "title": "Tax Management" },
  { "title": "Vendor Management" },
  { "title": "Lease and Maintenance Management" },
  { "title": "Claims Management" },
  { "title": "Activity Tracking" },
  { "title": "Fee Management" },
  { "title": "Tenant Database" },
  { "title": "Online Booking" },
  { "title": "Contact Management" },
  { "title": "Payment Processing" },
  { "title": "Residential Properties" },
  { "title": "Maintenance Tracking" },
  { "title": "Property Inspections" },
  { "title": "Property Management" },
  { "title": "Vacancy Tracking" },
  { "title": "Notice Board" },
  { "title": "Asset & Property Tracker" },
  { "title": "Contact Database" },
  { "title": "Document Management" },
  { "title": "Rent Tracking" },
];

const moreFeatures = [
  { "title": "Work order management" },
  { "title": "Reservations Management" },
  { "title": "Multi Location" },
  { "title": "Tenant Portal" },
  { "title": "Fee Management" },
  { "title": "Activity Tracking" },
  { "title": "Expense Management" },
  { "title": "Maintenance Tracking" },
  { "title": "Contact Management" },
  { "title": "Document Management" },
  { "title": "Property Inspections" },
  { "title": "Time & Expense Tracking" },
  { "title": "Alerts/Notifications" },
  { "title": "Contact Database" },
  { "title": "Push Notifications" },
  { "title": "Listing Analytics" },
  { "title": "Chat / Messaging" },
  { "title": "Reporting/Analytics" },
  { "title": "Tenant Management" },
  { "title": "Expense Reporting" },
  { "title": "Document Templates" },
  { "title": "Property Alerts" },
  { "title": "Single Property" },
  { "title": "Committee Management" },
  { "title": "Payment Tracking" },
  { "title": "Rate Management" },
  { "title": "Member Communities" },
  { "title": "Activity / News Feed" },
  { "title": "Multi-Facility" },
  { "title": "Residential Leases" },
  { "title": "Listing Management" },
  { "title": "Overdue Tracking" },
  { "title": "Rental Management" },
  { "title": "Multi-Property" },
  { "title": "Fee / Commission Management" },
  { "title": "Vacancy Management" }
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
