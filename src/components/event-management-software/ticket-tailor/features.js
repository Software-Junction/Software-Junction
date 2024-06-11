import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Event Management" },
{ "title": "Attendance management" },
{ "title": "Online Ticketing" },
{ "title": "Contact Management" },
{ "title": "Attendee Management" },
{ "title": "Event Calendar" },
{ "title": "Surveys & Feedback" },
{ "title": "Payment Processing" },
{ "title": "Fundraising Management" },
{ "title": "Customer DataBase" },
{ "title": "Website Management" },
{ "title": "Guest List Management" },
{ "title": "Onsite Ticketing" },
{ "title": "Print-at-Home" },
{ "title": "Reserved Seating" },
{ "title": "Season Tickets" },
{ "title": "Box Office Management" },
{ "title": "Concessions Management" },
{ "title": "General Admission" },
{ "title": "Kiosk Ticketing" },
{ "title": "Mobile Ticketing" },
{ "title": "Online payments" },
{ "title": "Data Synchronization" },
{ "title": "Reporting/Analytics" }
];

const moreFeatures = [
  { "title": "Online Registration" },
  { "title": "Ticketing" },
  { "title": "Social Media Promotion" },
  { "title": "POS" },
  { "title": "Conferences/Conventions" },
  { "title": "Discount/Coupon Management" },
  { "title": "Barcode / Ticket Scanning" },
  { "title": "Weddings/Parties" },
  { "title": "Form Builder" },
  { "title": "Confirmation/Reminders" },
  { "title": "Activity Registration" },
  { "title": "Event Registration" },
  { "title": "Group Registration" },
  { "title": "Onsite Registration" },
  { "title": "Refund Automation" },
  { "title": "Self Check-in" },
  { "title": "Attendee Segmentation" },
  { "title": "Guest List Search" },
  { "title": "Multi-Event Management" },
  { "title": "QR Codes" },
  { "title": "Exhibit/Vendor Management" }
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
