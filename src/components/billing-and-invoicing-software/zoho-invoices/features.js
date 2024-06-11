import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Customer Management" },
  { title: "Multiuser Login & Role-based access control" },
  { title: "Expense Management" },
  { title: "Payment Gateway Integration" },
  { title: "Expense Tracking" },
  { title: "Time Tracking" },
  { title: "Invoice" },
  { title: "Payment Handling" },
  { title: "Project Management" },
  { title: "Quotation & Estimates" },
  { title: "Recurring invoice" },
  { title: "Multi-Location" },
  { title: "Billing & Invoicing" },
  { title: "Payment Processing" },
  { title: "Dashboard" },
  { title: "Client Portal" },
  { title: "Multi-Currency" },
  { title: "Mobile App" },
  { title: "Contact Management" },
  { title: "Data Security" },
  { title: "Self Service Portal" },
  { title: "Timesheet Management" },
  { title: "Time & Expense Tracking" },
  { title: "Banking Integration" },
];

const moreFeatures = [
  { title: "Debit Card Support" },
  { title: "Receipt Printing" },
  { title: "Credit Card Management" },
  { title: "Client Management" },
  { title: "Member Portal" },
  { title: "Mobile Access" },
  { title: "Hourly billing" },
  { title: "Billable & Non-Billable Hours" },
  { title: "Invoice Processing" },
  { title: "Invoices & Billing" },
  { title: "Customizable invoices" },
  { title: "Invoice history" },
  { title: "Invoice Management" },
  { title: "Online payments" },
  { title: "PCI Compliance" },
  { title: "Project billing" },
  { title: "Online invoicing" },
  { title: "Customer Portal" },
  { title: "Dunning Management" },
  { title: "ACH Payment Processing" },
  { title: "Reporting/Analytics" },
  { title: "Billing Portal" },
  { title: "Mobile Payments" },
  { title: "GST Compliance" },
  { title: "Recurring Invoicing" },
  { title: "Real Time Currency Quotes" },
  { title: "Import/Export & Print" },
  { title: "Credit Notes" },
  { title: "Online Invoice Payment" },
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
