import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../banibro/banibro.module.scss";

const uspData = [
  {
    "title": "Tailored Odoo ERP Solutions",
    "content": "Banibro Solutions understands the uniqueness of every business and is dedicated to providing customized Odoo ERP solutions to meet specific needs."
  },
  {
    "title": "Proven Track Record",
    "content": "With a remarkable <span style=\"color:#f95738 ;\"><strong>10-year</strong></span> track record of success in diverse industries, Banibro Solutions has experience and expertise in delivering effective ERP solutions."
  },
  {
    "title": "Swift ERP Implementation",
    "content": "Efficient setup for rapid deployment, resulting in reduced downtime and prompt outcomes."
  },
  {
    "title": "Tailored Customization Possibilities",
    "content": "Ability to adapt the ERP to harmonize with business requirements and mirror operational workflows."
  },
  {
    "title": "Devoted Odoo ERP Support",
    "content": "Continuous guidance provided by proficient specialists, ensuring effortless and progressive system upkeep."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Banibro Solutions</h3>
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
