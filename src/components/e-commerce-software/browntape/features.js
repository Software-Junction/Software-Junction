import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Supplier Management" },
  { title: "Barcoding / RFID" },
  { title: "Dispatch Management" },
  { title: "Routing" },
  { title: "Import & Export Data" },
  { title: "Search / Filter" },
  { title: "Kitting" },
  { title: "Booking" },
  { title: "Inventory Optimization" },
  { title: "Multi-Currency" },
  { title: "Shipping Management" },
  { title: "Procurement Management" },
  { title: "Billing & Invoicing" },
  { title: "Parcel Shipping" },
  { title: "Shipment Tracking" },
  { title: "Seamless Integration" },
  { title: "Inventory Management" },
  { title: "Multi Location" },
  { title: "Warehouse Management" },
  { title: "Dispatching" },
  { title: "Order entry (OE)" },
  { title: "Purchase Order" },
  { title: "Order Tracking" },
  { title: "Barcode Scanning" },
];

const moreFeatures = [
  { title: "Barcoding" },
  { title: "Serialized Inventory Tracking" },
  { title: "Order tracking" },
  { title: "Customer Purchase History" },
  { title: "Computer Aided Dispatch" },
  { title: "Pricing Management" },
  { title: "Import / Export" },
  { title: "Serial Number Tracking" },
  { title: "Package Tracking" },
  { title: "For eCommerce" },
  { title: "Shipping Monitoring" },
  { title: "Batch Print Labels" },
  { title: "Scan Barcodes" },
  { title: "Manage Multi-item Orders" },
  { title: "Real Time Email Alerts" },
  { title: "Order Sync From Storefront" },
  { title: "Package returns" },
  { title: "Multi-channel" },
  { title: "Warehouse Shiping Management" },
  { title: "Item Management" },
  { title: "Website Integration" },
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
