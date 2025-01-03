import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Alerts & Notifications" },
  { "title": "Barcode Scanning" },
  { "title": "Barcode Generation" },
  { "title": "Barcoding" },
  { "title": "Barcoding / RFID" },
  { "title": "Catalog Management" },
  { "title": "Circulation Management" },
  { "title": "Custom Labels" },
  { "title": "Email Marketing" },
  { "title": "Fee Collection" },
  { "title": "Item Management" },
  { "title": "Kiosk Integration" },
  { "title": "Knowledge Management" },
  { "title": "Law Libraries" },
  { "title": "Mobile Apps" },
  { "title": "OPAC" },
  { "title": "Order Management" },
  { "title": "Patron Management" },
  { "title": "Periodicals Management" },
  { "title": "Private Libraries" },
  { "title": "Public Libraries" },
  { "title": "Receiving Labels" },
  { "title": "Reorder Management" },
  { "title": "Reportings/Analytics" },
  { "title": "Reserve Shelf Management" },
  { "title": "RFID" },
  { "title": "School Libraries" },
  { "title": "Search Functionality" },
  { "title": "Self Check-in / Check-Out" },
  { "title": "Serial Number Tracking" },
  { "title": "Serials Management" },
  { "title": "Supplier Management" },
  { "title": "Unicode Compliance" },
  { "title": "Inventory Management" },
  { "title": "Law Libraries" },
  { "title": "Church Libraries" },
  { "title": "Private Libraries" },
  { "title": "Acquisition Management" },
  { "title": "Asset Lifecycle Management" }
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
