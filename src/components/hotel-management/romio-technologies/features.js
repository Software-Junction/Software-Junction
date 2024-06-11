import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Transport / Fleet management" },
  { "title": "Maintenance Staff Management" },
  { "title": "Financial Management" },
  { "title": "Inventory Management" },
  { "title": "Quotation & Estimates" },
  { "title": "Customer Management" },
  { "title": "Warehouse Management" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "House keeping" },
  { "title": "Sales Quotes" },
  { "title": "POS invoicing" },
  { "title": "Payroll Management" },
  { "title": "Time & Attendance Management" },
  { "title": "Production Management" },
  { "title": "CRM" },
  { "title": "Orders Management" },
  { "title": "Sales Tracking" },
  { "title": "Front Office management" },
  { "title": "Budgeting" },
  { "title": "Manufacturing" },
  { "title": "Payment Handling" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "HR & Payroll" },
  { "title": "Accounting" },
  { "title": "Cloud Computing" }
  
];

const moreFeatures = [
  { "title": "Reservation & Booking" },
    { "title": "Quality Management" },
    { "title": "Bank Reconciliation" },
    { "title": "Accounts Receivable" },
    { "title": "Track & Secure Payments" },
    { "title": "Print Reciepts" },
    { "title": "Cab Services" },
    { "title": "Order Tracking" },
    { "title": "Sales and Distribution" },
    { "title": "Invoice" },
    { "title": "Delivery Management" },
    { "title": "Returns" },
    { "title": "Business intelligence (BI)" },
    { "title": "Inventory control" },
    { "title": "Table Management" },
    { "title": "Multiple Payment Types" },
    { "title": "Credit Card Payment Processing" },
    { "title": "Data Imports/Exports" },
    { "title": "Stock Management" },
    { "title": "Accounts payable" },
    { "title": "Customer DataBase" },
    { "title": "Online Payment" },
    { "title": "Loyalty Management" },
    { "title": "Food and Beverage Costing" },
    { "title": "Notification via SMS and Email" },
    { "title": "Gift Vouchers" },
    { "title": "Refunds and Store Credits" },
    { "title": "Transaction Processing" },
    { "title": "Credit Card & Gift Card Processing" },
    { "title": "General Ledger" },
    { "title": "Purchase" },
    { "title": "Bill of materials (BoM)" },
    { "title": "Guest Management" },
    { "title": "Supply Chain Management" },
    { "title": "Billing & Invoicing" },
    { "title": "Enterprise Asset Management" },
    { "title": "Purchasing" },
    { "title": "Discount Management" },
    { "title": "Touch Screen" },
    { "title": "Back Office" },
    { "title": "Wait List Management" },
    { "title": "Billing Management" },
    { "title": "Loyalty Program Support" },
    { "title": "Ordering Automation" },
    { "title": "Labor Cost Calculator" },
    { "title": "Kitchen Management" },
    { "title": "Sales Analysis" },
    { "title": "Tax Management" },
    { "title": "Menu Management" },
    { "title": "Promotions Management" },
    { "title": "Catering Management" },
    { "title": "Visitor" },
    { "title": "Nutrition & Ingredient Labels" },
    { "title": "Sales Management" },
    { "title": "Waitstaff Management" },
    { "title": "Formula Management" },
    { "title": "Reporting" },
    { "title": "24/7 Support" },
    { "title": "Employee Password Authentication" },
    { "title": "Multiple Staff Canteen" },
    { "title": "Reservations Management" },
    { "title": "Sales History" },
    { "title": "GST" },
    { "title": "Sales Analysis" },
    { "title": "Food Costing" },
    { "title": "Central Database" },
    { "title": "Touch Screen" },
    { "title": "Multiple POS Terminal" },
    { "title": "Recipe Management" },
    { "title": "Discount system" },
    { "title": "Single Property" },
    { "title": "Dashboard" },
    { "title": "Food Safety" },
    { "title": "Sales Management" },
    { "title": "Discount Management" },
    { "title": "Accounting Management" },
    { "title": "Menu Management" },
    { "title": "Employee Management" },
    { "title": "Biometric Attendance Management" },
    { "title": "Guest Experience" },
    { "title": "Customer Account Profiles" },
    { "title": "Retail Management" },
    { "title": "Proxy Card Reader" },
    { "title": "Guest List Management" },
    { "title": "Guest Experience" },
    { "title": "Order Tracking" },
    { "title": "Employee Timesheet Management" },
    { "title": "Gift Card Management" },
    { "title": "Sales Management" },
    { "title": "Point of Sale (POS)" },
    { "title": "Visitor" },
    { "title": "Promotions Management" },
    { "title": "Single / Group Reservations" },
    { "title": "Wait List" }
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
