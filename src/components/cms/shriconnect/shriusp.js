import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Data Security Prowess",
    content:
      '<span style="color:#f95738 ;"><strong>100% commitment to data security</strong></span>, safeguarding sensitive information with regular backups and advanced security features.Prioritizing non-negotiable data protection, ensuring the safety of the vast volume of school and student data.',
  },
  {
    title: "Comprehensive Module Offerings",
    content:
      '<span style="color:#f95738 ;"><strong>Over 40 modules</strong></span> cover every aspect of school management, from admission and fees to curriculum planning and library management.<span style="color:#f95738 ;"><strong>A 360° approach</strong></span> to modern school management, including dynamic calendar management, online assessment, and student analytics.',
  },
  {
    title: "Recognized Excellence",
    content:
      "Awarded 'The Innovative School ERP Solution' at The World Education Summit, highlighting commitment to innovation in education.Trusted by legacy institutions with a track record of successful implementation in <span style=\"color:#f95738 ;\"><strong>100+ schools and serving over 200,000 students.</strong></span>",
  },
  {
    title: "Future-Ready Education Ecosystem",
    content:
      "ShriConnect empowers the rise of a modern education ecosystem, aligning institutions with digital advancements and future requirements.Custom price plans offer flexibility, allowing schools to choose features that suit their unique needs.",
  },
];

const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Shriusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of ShriConnect</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["shri-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Shriusp;
