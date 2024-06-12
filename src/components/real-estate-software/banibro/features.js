import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Audit Trail" },
  { "title": "CRM" },
  { "title": "Manufacturing" },
  { "title": "Project Management" },
  { "title": "Marketing Automation" },
  { "title": "Warehouse Management" },
  { "title": "Budgeting" },
  { "title": "Accounts Receivable" },
  { "title": "Payroll Management" },
  { "title": "Asset Management" },
  { "title": "Inventory Management" },
  { "title": "Customer Management" },
  { "title": "Membership Management" },
  { "title": "Multicurrency payment processing" },
  { "title": "Accounts payable" },
  { "title": "Bank Reconciliation" },
  { "title": "Bill of materials (BoM)" },
  { "title": "Business intelligence (BI)" },
  { "title": "Business process modeling (BPM)" },
  { "title": "General Ledger" },
  { "title": "Invoicing" },
  { "title": "Product configurator" },
  { "title": "Manage Customers and Suppliers" },
  { "title": "Barcode Scanning" },
];

const moreFeatures = [
  { "title": "Point of Sale (POS)" },
  { "title": "Equipment Management" },
  { "title": "Social Media Integration" },
  { "title": "Balance Sheet" },
  { "title": "Accounting Integration" },
  { "title": "Bills of Material" },
  { "title": "Inventory Optimization" },
  { "title": "Multi-Currency" },
  { "title": "Multi-Location" },
  { "title": "Supplier Management" },
  { "title": "Appointment Management" },
  { "title": "Live Chat" },
  { "title": "Asset Lifecycle Management" },
  { "title": "Asset Tracking" },
  { "title": "Bookkeeping" },
  { "title": "Sales Reports" },
  { "title": "Account Management" },
  { "title": "Maintenance Management" },
  { "title": "Budget Management" },
  { "title": "Multi-currency support" },
  { "title": "Marketing Management" },
  { "title": "Product data management" },
  { "title": "Profitability Analysis" },
  { "title": "GPS tracking" },
  { "title": "Alerts Notifications" },
  { "title": "Activity Tracking" },
  { "title": "Invoice Management" },
  { "title": "Access Controls/Permissions" },
  { "title": "Maintenance Scheduling" },
  { "title": "Marketing Automation Integration" },
  { "title": "Costing" },
  { "title": "Payroll" },
  { "title": "Project billing" },
  { "title": "Member Portal" },
  { "title": "Ad Hoc Reports" },
  { "title": "Inventory Valuation" },
  { "title": "Campaign Management" },
  { "title": "Equipment Tracking" },
  { "title": "Plant Management" },
  { "title": "Multi-Company" },
  { "title": "Maintenance Tracking" },
  { "title": "Barcoding/RFID" },
  { "title": "Logistics" },
  { "title": "Workflow Configuration" },
  { "title": "Logistics Management" },
  { "title": "Amortization Schedule" },
  { "title": "Real time data" },
  { "title": "Email Marketing" },
  { "title": "Drill Down Reports" },
  { "title": "Data Analysis" },
  { "title": "Appointment Scheduling" },
  { "title": "Sales Management" },
  { "title": "Supply Chain Management" },
  { "title": "Project Accounting" },
  { "title": "Project Management" },
  { "title": "Marketing Reports" },
  { "title": "Production Cost Tracking" },
  { "title": "Corrective and Preventive Actions (CAPA)" },
  { "title": "Asset Planning" },
  { "title": "Data Protection" },
  { "title": "Barcoding" },
  { "title": "Multi-Country" },
  { "title": "Business Process Control" },
  { "title": "Barcoding / RFID" },
  { "title": "GPS tracking" },
  { "title": "Costing" },
  { "title": "Operations Management" },
  { "title": "Product Lifecycle Management" },
  { "title": "Access control" },
  { "title": "Barcoding/RFID" },
  { "title": "Business intelligence (BI)" },
  { "title": "Approval Process Control" },
  { "title": "Bonus Management" },
  { "title": "Marketing Management" },
  { "title": "Project billing" },
  { "title": "Audit Trail Logs" },
  { "title": "Application Management" },
  { "title": "Annual Filings" },
  { "title": "Billing & Invoicing" },
  { "title": "Workflow Configuration" },
  { "title": "Data Analysis" },
  { "title": "Business Process Control" },
  { "title": "Accounting Management" },
  { "title": "Alerts/Notifications" },
  { "title": "Appointment Management" },
  { "title": "Audit Management" },
  { "title": "Subcontracting Management" },
  { "title": "Lot Tracking" },
  { "title": "Accounting and finance management" },
  { "title": "Asset Lifecycle Management" },
  { "title": "Manufacturing Inventory Management" },
  { "title": "Inventory Valuation" },
  { "title": "Audit Planning" },
  { "title": "General Ledger Entry" },
  { "title": "Multi-Company" },
  { "title": "Sales Reports" },
  { "title": "Budgeting & Forecasting" },
  { "title": "Maintenance Scheduling" },
  { "title": "Employee Database" },
  { "title": "Business intelligence (BI)" },
  { "title": "Inventory Management" },
  { "title": "Asset Planning" },
  { "title": "Costing" },
  { "title": "Manufacturing Inventory Management" },
  { "title": "Warehouse Management" }
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
