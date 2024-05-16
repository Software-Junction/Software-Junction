import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title": "Data Visualization"},
  {"title": "Dashboard"},
  {"title": "Data Management"},
  {"title": "Ad hoc Reports"},
  {"title": "Ad hoc Analysis"},
  {"title": "Data Mining"},
  {"title": "Key Performance Indicators"},
  {"title": "Visualization / Presentation"},
  {"title": "Performance Metrics"},
  {"title": "Trend / Problem Indicators"},
  {"title": "Performance Management"},
  {"title": "Budgeting & Forecasting"},
  {"title": "Scorecarding"},
  {"title": "Semantic and Text Analytics"},
  {"title": "Ad hoc Query"},
  {"title": "Strategic Planning"},
  {"title": "Profitability Analysis"},
  {"title": "Templates"},
  {"title": "Online Analytical Processing (OLAP)"},
  {"title": "Regression Analysis"},
  {"title": "Extract, transform and load (ETL)"},
  {"title": "Benchmarking"},
  {"title": "High Volume Processing"},
  {"title": "Sentiment Analysis"},
  {"title": "Predictive Analytics"}
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
