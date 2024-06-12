import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Inventory Management" },
  { title: "Asset Management" },
  { title: "Customer Management" },
  { title: "Marketing Automation" },
  { title: "Appointment Management" },
  { title: "Document Management" },
  { title: "Audit Trail" },
  { title: "Project Management" },
  { title: "Reminders" },
  { title: "Expense Management" },
  { title: "Event Management" },
  { title: "Task Management" },
  { title: "Vendor Management" },
  { title: "Customer Support" },
  { title: "Fee Management" },
  { title: "Event Calendar" },
  { title: "Property Management" },
  { title: "CRM" },
  { title: "Sales Tracking" },
  { title: "Survey Management" },
  { title: "Lease and Maintenance Management" },
  { title: "Financial Management" },
  { title: "Multi Location" },
  { title: "Accounting" },
];

const moreFeatures = [
  { title: "Client Tracking" },
  { title: "Expense Reporting" },
  { title: "Multi-Location" },
  { title: "Room Scheduling" },
  { title: "Employee Management" },
  { title: "Social Marketing" },
  { title: "Asset Tracking" },
  { title: "Group Bookings" },
  { title: "Booking Notes" },
  { title: "Client Management" },
  { title: "Facility Management" },
  { title: "Online Booking" },
  { title: "Lead Capture" },
  { title: "Performance Metrics" },
  { title: "Contact Database" },
  { title: "Equipment Management" },
  { title: "Mobile Access" },
  { title: "Email Management" },
  { title: "Contact Management" },
  { title: "Lease Information" },
  { title: "Multi-Property" },
  { title: "Lead Management" },
  { title: "Booking Management" },
  { title: "Rate Management" },
  { title: "Job Management" },
  { title: "Client database" },
  { title: "Document Indexing" },
  { title: "Lease Management" },
  { title: "Online Payment" },
  { title: "Automatic Funds Distribution" },
  { title: "Rental Management" },
  { title: "Alerts/Notifications" },
  { title: "Guest List Management" },
  { title: "Proposal Generation" },
  { title: "Tenant Database" },
  { title: "Calendar Management" },
  { title: "Maintenance Tracking" },
  { title: "Commercial Leases" },
  { title: "Payment Processing" },
  { title: "Inventory control" },
  { title: "Document Templates" },
  { title: "Appointment Scheduling" },
  { title: "Central Reservation System" },
  { title: "Property Inspections" },
  { title: "Profitability Analysis" },
  { title: "Customer Management" },
  { title: "Document Creation" },
  { title: "Vendor Management" },
  { title: "Contact Import/Export" },
  { title: "Survey Management" },
  { title: "Task Management" },
  { title: "Lease and Maintenance Management" },
  { title: "Role-Based Permissions" },
  { title: "Amortization Schedule" },
  { title: "Billing & Invoicing" },
  { title: "Meter Tracking" },
  { title: "Lead Scoring" },
  { title: "Customer DataBase" },
  { title: "Appointment Management" },
  { title: "Quotes / Estimates" },
  { title: "Sales Tracking" },
  { title: "Maintenance Management" },
  { title: "Booking Management" },
  { title: "Asset Management" },
  { title: "Tenant Portal" },
  { title: "Social Sharing" },
  { title: "Auto Escalation" },
  { title: "Dashboard" },
  { title: "Expense Management" },
  { title: "Project Management" },
  { title: "Activity Tracking" },
  { title: "Client Statements" },
  { title: "Landlord Database" },
  { title: "Online invoicing" },
  { title: "Credit Card Payment Processing" },
  { title: "Online Payment Processing" },
  { title: "Referral Tracking" },
  { title: "Alerts Notifications" },
  { title: "Owner Management" },
  { title: "Booking Management" },
  { title: "Third Party Booking" },
  { title: "Document Management" },
  { title: "Portfolio Management" },
  { title: "Calendar Management" },
  { title: "Activity / News Feed" },
  { title: "Rules-Based Workflow" },
  { title: "Payment Tracking" },
  { title: "Real-time Scheduling" },
  { title: "Expense Reporting" },
  { title: "Document Management" },
  { title: "Document Creation" },
  { title: "Email Marketing" },
  { title: "Partial Payments" },
  { title: "Contact Import/Export" },
  { title: "Online Registration" },
  { title: "Marketing Management" },
  { title: "Accounting Management" },
  { title: "Document Templates" },
  { title: "Email Management" },
  { title: "Fee / Commission Management" },
  { title: "Strategic Planning" },
  { title: "Document Management" },
  { title: "Client Statements" },
  { title: "Landlord Database" },
  { title: "Online invoicing" },
  { title: "Credit Card Payment Processing" },
  { title: "Online Payment Processing" },
  { title: "Referral Tracking" },
  { title: "Alerts Notifications" },
  { title: "Owner Management" },
  { title: "Booking Management" },
  { title: "Third Party Booking" },
  { title: "Document Management" },
  { title: "Portfolio Management" },
  { title: "Calendar Management" },
  { title: "Activity / News Feed" },
  { title: "Rules-Based Workflow" },
  { title: "Payment Tracking" },
  { title: "Marketing Management" },
  { title: "Accounting Management" },
  { title: "Document Templates" },
  { title: "Email Management" },
  { title: "Fee / Commission Management" },
  { title: "Strategic Planning" },
  { title: "Real-time Scheduling" },
  { title: "Expense Reporting" },
  { title: "Document Management" },
  { title: "Document Creation" },
  { title: "Email Marketing" },
  { title: "Partial Payments" },
  { title: "Contact Import/Export" },
  { title: "Online Registration" },
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

  const filteredFeatures = featuresData.filter((feature) =>
    feature.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

          {filteredFeatures.length > 0 ? (
          filteredFeatures.map((feature, index) => (
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
        ):(
          <div className="box shadow border rounded-4 p-4 bg-light text-center">
                <h5>No records found</h5>
              </div>
        )}

          {isShowMore && 
          <>
          {/* {moreFeatures.map((featureM, index) => (
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
          ))} */}
          </>
          }
          {/* <Col lg={12}>
            <div className={styles["feature-btn"]}>
              <Button className="mt-4" onClick={toggleReadMoreLess}>
                {isShowMore ? "Show Less \u2191" : "Show More \u2193"}
              </Button>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Features;
