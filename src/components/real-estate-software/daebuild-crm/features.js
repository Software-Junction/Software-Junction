import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const featuresData = [
  {"title":"Lead Management"},
  {"title":"Sales Management"},
  {"title":"Payment Processing"},
  {"title":"Lead Segmentation"},
  {"title":"Mobile Access"},
  {"title":"Lead Notifications"},
  {"title":"Alerts Notifications"},
  {"title":"Mobile App"},
  {"title":"Lead Nurturing"},
  {"title":"Email Integration"},
  {"title":"CRM & Sales Dashboards"},
  {"title":"Client Portal"},
  {"title":"Lead Generation"},
  {"title":"Quotes/Estimates"},
  {"title":"Payment Tracking"},
  {"title":"Sales Tracking"},
  {"title":"CRM Analytics"},
  {"title":"Billing & Invoicing"},
  {"title":"Tax Management"},
  {"title":"Reporting & statistics"},
  {"title":"Access Controls/Permissions"},
  {"title":"Sales Pipeline Tracking"},
  {"title":"Lead Database Integration"},
  {"title":"Report Export"},
];

const moreFeatures = [
  {"title":"Third Party Integration"},
  {"title":"Email Marketing"},
  {"title":"Commercial Properties"},
  {"title":"Document Management"},
  {"title":"Quote Management"},
  {"title":"Analytics"},
  {"title":"Owner Portal"},
  {"title":"Lead Capture"},
  {"title":"Reporting/Analytics"},
  {"title":"Lead Distribution"},
  {"title":"CRM & Sales Reports"},
  {"title":"Sales pipeline management"}

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
