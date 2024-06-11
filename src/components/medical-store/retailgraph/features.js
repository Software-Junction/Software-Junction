import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Sales promotions handling" },
  { "title": "Barcode Integration" },
  { "title": "Multiuser Login & Role-based access control" },
  { "title": "Email Integration" },
  { "title": "Customer Support" },
  { "title": "Financial Management" },
  { "title": "Payroll Management" },
  { "title": "Inventory Management" },
  { "title": "Supplier and Purchase Order Management" },
  { "title": "CRM" },
  { "title": "Customer Management" },
  { "title": "Invoice" },
  { "title": "Search Option" },
  { "title": "Security" },
  { "title": "Warehouse Management" },
  { "title": "Email Marketing / SMS Marketing" },
  { "title": "Reminders" },
  { "title": "Import/Export DataBase" },
  { "title": "Multi Location" },
  { "title": "Vendor Management" },
  { "title": "Catalog Management" },
  { "title": "Inventory control" },
  { "title": "Invoicing" },
  { "title": "Purchase Order" },
  { "title": "Notification via SMS and Email" },
  { "title": "Manage Customers and Suppliers" },
  { "title": "HR & Payroll" },
  { "title": "Financial Management" },
  { "title": "Accounting" },
  { "title": "Returns" },
  { "title": "Refunds and Store Credits" },
  { "title": "Supply Chain Collaboration" },
];

const moreFeatures = [
  { "title": "Multi-Channel Collection" },
  { "title": "POS Integration" },
  { "title": "Multi-Branch Connectivity" },
  { "title": "GST Compliance" },
  { "title": "Customer Purchase History" },
  { "title": "Financial Accounting" },
  { "title": "Hourly Employee Tracking" },
  { "title": "Billing Management" },
  { "title": "Loyalty Program" },
  { "title": "User Access Permissions" },
  { "title": "Billing & Invoicing" },
  { "title": "Customer Segmentation" },
  { "title": "Pricing Management" },
  { "title": "Restaurant POS" },
  { "title": "Inventory Tracking" },
  { "title": "Purchase Orders" },
  { "title": "Assessments" },
  { "title": "Invoice Management" },
  { "title": "Import Export Management" },
  { "title": "Discount system" },
  { "title": "POS" },
  { "title": "Search / Filter" },
  { "title": "Coupons" },
  { "title": "SMS Integration" },
  { "title": "GST Ready" },
  { "title": "Document Printing" },
  { "title": "Data Backup and Restore" },
  { "title": "Client Portal" },
  { "title": "Client Profiles" },
  { "title": "Customer Statements" },
  { "title": "Retail Management" },
  { "title": "Supply Chain Management" },
  { "title": "GST Tax Invoice" },
  { "title": "Dues Management" },
  { "title": "Retail POS" },
  { "title": "Multi-Company" },
  { "title": "Financial Reporting" },
  { "title": "Purchase Management" },
  { "title": "Sales Analyse Report" },
  { "title": "GST audit report" },
  { "title": "Distribution Management" },
  { "title": "Customer tracking" },
  { "title": "Sales Person Monitoring" },
  { "title": "Expiry and Near Expiry" },
  { "title": "Email Management" },
  { "title": "Budget Management" },
  { "title": "Manage Contacts" },
  { "title": "Easy Backup and Restore" },
  { "title": "MIS Reports" },
  { "title": "Dispatch Management" },
  { "title": "Import Export Management" },
  { "title": "Purchasing" },
  { "title": "Labor Management" },
  { "title": "Issue & Return Management" },
  { "title": "Floor Plans & Maps" },
  { "title": "Gift Shop POS" },
  { "title": "Multi-Branch" },
  { "title": "Expiration Date Management" },
  { "title": "For Retail" },
  { "title": "Customizable Billing" },
  { "title": "Customizable Catalogs" },
  { "title": "SMS Messaging" },
  { "title": "Discount / Coupon Management" }
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
