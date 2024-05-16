import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { title: "Database Security Audit" },
  { title: "Customer DataBase" },
  { title: "Large Database Maintenance" },
  { title: "Data Structuring" },
  { title: "Data Security" },
  { title: "Data Integration" },
  { title: "Data warehousing" },
  { title: "Data Source Connectors" },
  { title: "Database Customization" },
  { title: "Data Retrieval" },
  { title: "Real Time Monitoring" },
  { title: "Database Servers" },
  { title: "Data Management" },
  { title: "Data Capture" },
  { title: "Data Analysis Tools" },
  { title: "Data Analysis" },
  { title: "Data Integrity" },
  { title: "Backup and Recovery" },
  { title: "Data Migration" },
  { title: "Data Visualization" },
  { title: "Data Mining" },
  { title: "Data Synchronization" },
  { title: "Data Entry Verification" },
  { title: "Online Analytical Processing (OLAP)" },
];

const moreFeatures = [
  { title: "NOSQL" },
  { title: "Database Conversion" },
  { title: "Backup Log" },
  { title: "Data Replication" },
  { title: "Backup Scheduling" },
  { title: "Data Modeling" },
  { title: "Monitoring" },
  { title: "Data Deduplication" },
  { title: "AI / Machine Learning" },
  { title: "Backup" },
  { title: "Data Quality Control" },
  { title: "Data Capture and Transfer" },
  { title: "Data Cleansing" },
  { title: "Data Matching" },
  { title: "Data Blends" },
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
