import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Innovative Technological Leadership",
    "content": "Demonstrating Amrita's commitment to technological advancement, AHIS showcases the institution's leadership in research and development. Its innovative features underscore the synergy necessary to thrive in the ever-evolving healthcare environment."
  },
  {
    "title": "Certification and Regulatory Compliance",
    "content": "AHIS has received certification from the Certification Commission for Health Information Technology (CCHIT®), complying with the <span style=\"color:#FC5185 ;\"><strong>2011/2012</strong></span> criteria. This certification attests to its adherence to the Stage <span style=\"color:#FC5185 ;\"><strong>1</strong></span> meaningful use measures required for funding under the American Recovery and Reinvestment Act (ARRA)."
  },
  {
    "title": "Development Methodology",
    "content": "AHIS is developed using Extreme Programming Methodologies, supported by a robust community of domain experts. This approach ensures efficient development practices and continuous improvement in line with industry standards."
  },
  {
    "title": "Support for Research and Development",
    "content": "Beyond its role in daily patient care management, AHIS provides a robust foundation for research and development within healthcare organizations. This capability positions it as a catalyst for advancing medical science."
  },
  {
    "title": "Alignment with Amrita's Vision",
    "content": "AHIS aligns seamlessly with Amrita Vishwa Vidyapeetham's vision of integrating science and spirituality. This unique approach sets it apart from conventional healthcare information systems, emphasizing a holistic perspective."
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
            <h3 className="mb-3">USP of Amrita Hospital Information System</h3>
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
