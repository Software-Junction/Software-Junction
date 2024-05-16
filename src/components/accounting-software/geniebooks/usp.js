import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
    {
      "title": "Easier way to run operations",
    },
    {
      "title": "Rapid Deployment",
    },
    {
      "title": "Best-in-class Digital Experience",
    },
    {
      "title": "Designed for mid-market companies",
    },
    {
      "title": "GSTN Acceptances and Certifications",
    },
    {
      "title": "SaaS to avoid any major upfront expense",
    },
    
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of GenieBooks</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {/* {renderHTML(item.content)} */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
