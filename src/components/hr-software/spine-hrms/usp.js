import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../spine-hrms/spine.module.scss";

const uspData = [
  {
    "title": "Industry Specialization",
    "content": "Highlight the <span style=\"color:#f95738 ;\"><strong>20 years</strong></span> of experience in the associated domain, emphasizing the company's deep understanding and commitment to meeting industry requirements."
  },
  {
    "title": "Integrated Solution",
    "content": "Emphasize the flexibility of Spine HRMS by mentioning its ability to seamlessly integrate with any ERP system. Highlight how it streamlines HR processes across all departments within a business."
  },
  {
    "title": "Select Deployment Options",
    "content": "Communicate the flexibility provided by Spine HRMS in terms of deployment options, offering choices such as OPEX, CAPEX, Server Hosting, and Hybrid license. Stress the adaptability to meet specific client resource availability and preferences."
  },
  {
    "title": "Client-Centric Approach",
    "content": "Mention the client testimonials provided, focusing on the family-like treatment of clients. Highlight the commitment to keeping HR professionals efficient and effective in their roles."
  },
  {
    "title": "Global Presence",
    "content": "Mention the partner presence both in India and overseas, indicating a global reach and credibility."
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
            <h3 className="mb-3">USP of Spine HRMS</h3>
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
