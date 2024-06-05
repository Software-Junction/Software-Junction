import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Data Integration"},
  {"title": "Data Visualization"},
  {"title": "Database Security Audit"},
  {"title": "Data Migration"},
  {"title": "Data Capture and Transfer"},
  {"title": "Data Deduplication"},
  {"title": "Data Mining"},
  {"title": "Data Modeling"},
  {"title": "Data Capture"},
  {"title": "Data Entry Verification"},
  {"title": "Data Cleansing"},
  {"title": "Data Management"},
  {"title": "Data Source Connectors"},
  {"title": "Data Quality Control"},
  {"title": "Database Servers"},
  {"title": "Data Analysis"},
  {"title": "Data Blends"},
  {"title": "Data Synchronization"},
  {"title": "Data warehousing"},
  {"title": "Data Replication"},
  {"title": "Data Structuring"},
  {"title": "Data Retrieval"},
  {"title": "Data Integrity"},
  {"title": "Real Time Monitoring"},
  {"title": "Large Database Maintenance"},
  {"title": "Backup"},
  {"title": "Backup and Recovery"},
  {"title": "Backup Log"},
  {"title": "Backup Scheduling"},
  {"title": "Data Matching"},
  {"title": "AI / Machine Learning"},
  {"title": "NOSQL"},
  {"title": "Monitoring"},
  {"title": "Database Conversion"},
  {"title": "Customer DataBase"}
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
