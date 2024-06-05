import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../pact-erp/pac.module.scss";

const uspData = [
  {
    "title": "GST Software",
    "content": "It simplifies GST filing, e-invoicing, and e-way billing, making compliance easier for businesses."
  },
  {
    "title": "Trusted by Over 12000+ Businesses",
    "content": "PACT has a track record of serving businesses of all sizes and across diverse industry verticals since its foundation in <span style=\"color:#FC5185 ;\"><strong>1998</strong></span>."
  },
  {
    "title": "Seamless Integrations with 3rd Party Applications",
    "content": "It ensures easy and seamless integration with legacy systems and other applications, minimizing integration challenges."
  },
  {
    "title": "Modular ERP Software",
    "content": "PACT RevenU offers <span style=\"color:#FC5185 ;\"><strong>15</strong></span> modules covering every business function, allowing businesses to customize their ERP solution according to specific needs."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of PACT ERP</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
              >
                <h5>{item.title}</h5>
                <br />
                {/* <p dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                {renderHTML(item.content)}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Usp;
