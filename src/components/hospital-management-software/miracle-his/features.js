import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Bed Management" },
  { "title": "Billing System" },
  { "title": "Electronic medical records" },
  { "title": "System Security & Software Management" },
  { "title": "Pharmacy Information System (Drugs, Opticals)" },
  { "title": "Procedure Management" },
  { "title": "Doctor Schedule & Appointments" },
  { "title": "Radiology & Imaging Information System" },
  { "title": "Billing & Revenue Cycle Management" },
  { "title": "Inventory control" },
  { "title": "Pharmacy with Inventory" },
  { "title": "Purchase" },
  { "title": "Blood Bank Management System" },
  { "title": "Client Management & Credit Control" },
  { "title": "Doctor Consultation & Electronic Medical Record" },
  { "title": "Out-Patient Management" },
  { "title": "Diagnostic Management" },
  { "title": "System Administration Functions" },
  { "title": "Modality (Diagnostic) Schedule & Appointments" },
  { "title": "Lab Information System" },
  { "title": "Marketing Control System" },
  { "title": "Hospital Support Function System" },
  { "title": "Accident & Emergency Care" },
  { "title": "Day Care Management System" },
  { "title": "Accounting Management" },
  { "title": "Inventory Management & Consumption Tracking" },
  { "title": "Revenue Management" },
  { "title": "Referral Management" },
  { "title": "In-patient Management System" },
  { "title": "Procedure Management" }
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

          {filteredFeatures.map((feature, index) => (
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
