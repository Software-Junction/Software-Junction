import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Centralized Efficiency",
    "content": "Zimyo offers a centralized platform with over <span style=\"color:#FC5185 ;\"><strong>40 modules.</strong></span> This consolidation of HR functions streamlines processes, making it easier for businesses to manage their workforce efficiently. Interactive dashboards provide a holistic view of workforce data. This comprehensive approach not only enhances decision-making but also reduces operational costs for businesses."
  },
  {
    "title": "Data Security Assurance",
    "content": "Zimyo is committed to the highest standards of data security. Vulnerability Assessment and Penetration Testing (VAPT), ISO certification, and AICPA SOC compliance demonstrate this commitment. Rigorous audits are conducted to ensure adherence to regulatory standards such as GDPR and HIPAA, providing clients with confidence in the security and privacy of their data."
  },
  {
    "title": "AI-Driven Efficiency",
    "content": "Zimyo's HCM leverages AI to automate repetitive tasks, boosting overall operational efficiency. This includes automating routine HR processes and providing insights into workforce trends through data analysis. The integration of AI-driven technology enhances decision-making capabilities, contributing to more informed and strategic HR practices."
  },
  {
    "title": "Global Recognition",
    "content": "Zimyo boasts a substantial customer base, with over <span style=\"color:#FC5185 ;\"><strong>2,000</strong></span> clients and more than <span style=\"color:#FC5185 ;\"><strong>5 million</strong></span> users globally."
  },
  {
    "title": "Resourceful Support",
    "content": "Zimyo provides a wealth of resources to support HR professionals. Blogs, guides, calculators, and templates offer valuable insights and tools for effective HR management. The commitment to customer support, regular webinars, and customer stories further enrich the user experience, fostering continuous learning and improvement."
  } 
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
            <h3 className="mb-3">USP of Zimyo</h3>
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
