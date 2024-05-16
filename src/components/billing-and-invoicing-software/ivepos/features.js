import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Inventory control" },
  { title: "Customer DataBase" },
  { title: "Table Management" },
  { title: "Cloud Computing" },
  { title: "Notification via SMS and Email" },
  { title: "Order Tracking" },
  { title: "Track & Secure Payments" },
  { title: "CRM" },
  { title: "POS invoicing" },
  { title: "Warehouse Management" },
  { title: "Vendor Management" },
  { title: "Sales Tracking" },
  { title: "Commission management" },
  { title: "Print Reciepts" },
  { title: "Inventory Management & Consumption Tracking" },
  { title: "Online Payment" },
  { title: "Data Imports/Exports" },
  { title: "Stock Management" },
  { title: "Email Marketing / SMS Marketing" },
  { title: "Customer Management" },
  { title: "Inventory Management" },
  { title: "Purchase" },
  { title: "Multi Currency" },
  { title: "Payment Handling" },
];

const moreFeatures = [
  { title: "Sales Trend Analysis" },
  { title: "Reporting & statistics" },
  { title: "Online payments" },
  { title: "Sales Analysis" },
  { title: "Sales History" },
  { title: "GST" },
  { title: "Reporting/Analytics" },
  { title: "Mobile Payments" },
  { title: "Loyalty Program" },
  { title: "User Access Permissions" },
  { title: "Barcoding" },
  { title: "Recipe/Formula Costing" },
  { title: "Recipe/Formula Management" },
  { title: "For Cafeterias" },
  { title: "Menu Planning" },
  { title: "Dashboard" },
  { title: "Order Management" },
  { title: "Returns Management" },
  { title: "Billing Management" },
  { title: "Analytics" },
  { title: "Promotions Management" },
  { title: "Purchasing" },
  { title: "Product Management" },
  { title: "POS Transactions" },
  { title: "Receipt Printing" },
  { title: "Staff Management" },
  { title: "Accounting Management" },
  { title: "Quotes / Estimates" },
  { title: "Reporting" },
  { title: "Sales Management" },
  { title: "Cost Tracking" },
  { title: "24/7 Support" },
  { title: "Item Management" },
  { title: "Discount Management" },
  { title: "Rewards Management" },
  { title: "Food Costing" },
  { title: "Kitchen Management" },
  { title: "Menu Management" },
  { title: "Customer Account Profiles" },
  { title: "Loyalty Program Support" },
  { title: "Pricing Management" },
  { title: "Restaurant POS" },
  { title: "Retail Management" },
  { title: "Returns Tracking" },
  { title: "Touch Screen" },
  { title: "Reviews Management" },
  { title: "Communication Management" },
  { title: "Multi-Store Management" },
  { title: "Reorder Management" },
  { title: "Predictive Analytics" },
  { title: "For Sales" },
  { title: "Costing" },
  { title: "Recipe Management" },
  { title: "Built-In Accounting" },
  { title: "Customer Purchase History" },
  { title: "Barcoded Garments" },
  { title: "Delivery Tracking" },
  { title: "For Restaurants" },
  { title: "Online Ordering" },
  { title: "Grocery POS" },
  { title: "Check-in / Check-out" },
  { title: "Retail POS" },
  { title: "Gift Shop POS" },
  { title: "Customer Statements" },
  { title: "Barcode / Ticket Scanning" },
  { title: "Email / Online" },
  { title: "Statistical Analysis" },
  { title: "Barcode Scanning" },
  { title: "Invoices" },
  { title: "Multiple Payment Types" },
  { title: "Credit Card Payment Processing" },
  { title: "User Management" },
  { title: "Refunds and Store Credits" },
  { title: "Loyalty Management" },
  { title: "Transaction Processing" },
  { title: "Cash Management" },
  { title: "Returns" },
  { title: "Employee Management" },
  { title: "Point of Sale (POS)" },
  { title: "Channel Management" },
  { title: "Price / Margin Management" },
  { title: "Bar POS" },
  { title: "Customer Accounts" },
  { title: "Billing & Invoicing" },
  { title: "Payment Processing" },
  { title: "Deli / Restaurant Management" },
  { title: "Multi-Location" },
  { title: "Supplier Management" },
  { title: "Cash Drawer Management" },
  { title: "Tax Management" },
  { title: "Budgeting & Forecasting" },
  { title: "Single Store" },
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

          {isShowMore && (
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
          )}
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
