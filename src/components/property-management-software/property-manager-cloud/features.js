import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Customer Support" },
  { title: "Commercial Properties" },
  { title: "Document Management" },
  { title: "Payment Processing" },
  { title: "Multi Property Support" },
  { title: "Owner Portal" },
  { title: "Tenant Database" },
  { title: "Asset & Property Tracker" },
  { title: "Expense Management" },
  { title: "Activity Tracking" },
  { title: "Online Payment" },
  { title: "Contact Management" },
  { title: "Vendor Management" },
  { title: "Rent Tracking" },
  { title: "Residential Properties" },
  { title: "Portfolio Management" },
  { title: "Customer Management" },
  { title: "Property Management" },
  { title: "Lease and Maintenance Management" },
  { title: "Credit Check" },
  { title: "Electronic Signature" },
  { title: "Tenant Portal" },
  { title: "Accounting" },
  { title: "Work order management" },
];

const moreFeatures = [
  { title: "Facility Management" },
  { title: "Maintenance Management" },
  { title: "Lease Management" },
  { title: "Expense Reporting" },
  { title: "Partner Management" },
  { title: "Contact Database" },
  { title: "Online invoicing" },
  { title: "Vacation Rental" },
  { title: "Customizable invoices" },
  { title: "Access Controls/Permissions" },
  { title: "Owner Statements" },
  { title: "Rental Management" },
  { title: "Facility Scheduling" },
  { title: "Lease Information" },
  { title: "Owner Management" },
  { title: "Single Property" },
  { title: "Built-In Accounting" },
  { title: "Data Import / Export" },
  { title: "Vacancy Management" },
  { title: "Notes Management" },
  { title: "Online payments" },
  { title: "Multi-Property" },
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
