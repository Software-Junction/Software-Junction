import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../microgenn/mic.module.scss";

const uspData = [
  {
    "title": "Front Office System",
    "content": "Microgenn's Hotel Management Software provides a robust front office system, meeting the primary requirement for every property. This ensures efficient and organized management of essential tasks."
  },
  {
    "title": "Proven Track Record",
    "content": "With <span style=\"color:#f95738 ;\"><strong>20</strong></span> years of experience in the industry, Microgenn boasts a proven track record, having won <span style=\"color:#f95738 ;\"><strong>24</strong></span> awards and served <span style=\"color:#f95738 ;\"><strong>550</strong></span> happy clients with <span style=\"color:#f95738 ;\"><strong>3150</strong></span> users. This history of success reflects the software's reliability and effectiveness."
  },
  {
    "title": "Diverse Interfaces and Products",
    "content": "Microgenn's Hotel Management Software offers a wide range of interfaces <span style=\"color:#f95738 ;\"><strong>(18)</strong></span> and products <span style=\"color:#f95738 ;\"><strong>(36),</strong></span> showcasing its versatility and adaptability to various hotel business needs. This diversity ensures that the software can cater to different types and sizes of establishments."
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
            <h3 className="mb-3">USP of Microgenn</h3>
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
