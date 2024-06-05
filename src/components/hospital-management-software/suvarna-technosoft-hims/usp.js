import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../suvarna-technosoft-hims/suv.module.scss";

const uspData = [
  {
    "title": "Comprehensive Healthcare Solutions",
    "content": "Suvarna offers a range of healthcare solutions, including Hospital Information Management System (HIMS), Laboratory Information Management System (LIMS), Electronic Medical Record (EMR), Radiology Information System (RIS), Digital Campus Management System, Business Intelligence & MIS, and Document Management System."
  },
  {
    "title": "Reliability through Testing",
    "content": "Suvarna emphasizes the reliability of its products, which undergo multi-level testing. This ensures consistent and desired outcomes for clients, promoting trust in the software's performance."
  },
  {
    "title": "Proven Track Record",
    "content": "Suvarna takes pride in the fact that its products and solutions are being used and accepted by over <span style=\"color:#FC5185;\"><strong>500</strong></span> healthcare organizations of all sizes. The mention of <span style=\"color:#FC5185;\"><strong>23</strong></span> years of excellence further reinforces the company's proven track record."
  },
  {
    "title": "Client Base and Reach",
    "content": "Highlighting a client base of <span style=\"color:#FC5185;\"><strong>15,000+</strong></span> physicians, <span style=\"color:#FC5185;\"><strong>36,000+</strong></span> healthcare professionals, and <span style=\"color:#FC5185;\"><strong>4,000+</strong></span> healthcare organizations, Suvarna showcases the widespread acceptance and usage of its products."
  },
  {
    "title": "Large Patient Database",
    "content": "The software has managed over <span style=\"color:#FC5185;\"><strong>60 million</strong></span> patient records, indicating the scalability and capability of Suvarna's solutions to handle a vast amount of healthcare data."
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
            <h3 className="mb-3">USP of Suvarna Technosoft's Hospital Information Management System</h3>
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
