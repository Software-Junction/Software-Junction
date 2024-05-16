import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  { "title": "Billing & Invoicing" },
  { "title": "Business intelligence (BI)" },
  { "title": "Financial Management" },
  { "title": "Business Rules Management" },
  { "title": "Manufacturing" },
  { "title": "Accounts Receivable" },
  { "title": "Forecasting" },
  { "title": "Transportation Management" },
  { "title": "Audit Management" },
  { "title": "Compliance Management" },
  { "title": "Project Management" },
  { "title": "Accounting Management" },
  { "title": "Business Process Automation" },
  { "title": "Materials Management" },
  { "title": "Financial Accounting" },
  { "title": "Accounts payable" },
  { "title": "Audit Trail" },
  { "title": "Risk Management" },
  { "title": "Reporting" },
  { "title": "Analytics" },
];

const moreFeatures = [
  { "title": "Accounting Integration" },
  { "title": "Business process modeling (BPM)" },
  { "title": "Financial Planning" },
  { "title": "Material Management" },
  { "title": "ERP" },
  { "title": "Finance & Accounting Management System" },
  { "title": "Business Process Control" },
  { "title": "Audit Planning" },
  { "title": "Analytics & Reporting" },
  { "title": "MRP" },
  { "title": "Compliance Tracking" },
  { "title": "Material Requirement Planning" },
  { "title": "Financial Reporting" }
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
          }
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
