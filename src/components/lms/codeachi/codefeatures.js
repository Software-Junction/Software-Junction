import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Patron Management" },
  { "title": "Kiosk Integration" },
  { "title": "Reserve Shelf Management" },
  { "title": "Fee Collection" },
  { "title": "Search Functionality" },
  { "title": "Circulation Management" },
  { "title": "Barcode Scanning" },
  { "title": "Law Libraries" },
  { "title": "Self Check-in / Check-Out" },
  { "title": "Email Marketing" },
  { "title": "Catalog Management" },
  { "title": "Acquisition Management" },
  { "title": "Public Libraries" },
  { "title": "Serials Management" },
  { "title": "School Libraries" },
  { "title": "Private Libraries" },
  { "title": "OPAC" },
  { "title": "Barcoding / RFID" },
  { "title": "Knowledge Management" },
  { "title": "Barcode Scanning" },
  { "title": "Self Check-in/Check-out" },
  { "title": "Barcoding/RFID" },
  { "title": "Church Libraries" },
  { "title": "Unicode Compliance" },
  { "title": "Inventory Management" }
];


const Codefeatures = ({ styles }) => {
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

          {isShowMore && 
          <>
          {/* {moreFeatures.map((featureM, index) => (
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
          ))} */}
          </>
          }
          {/* <Col lg={12}>
            <div className={styles["cod-feature-btn"]}>
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

export default Codefeatures;
