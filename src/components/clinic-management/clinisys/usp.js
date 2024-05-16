import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Global Impact",
    "content": "As the leading clinical lab systems provider, Clinisys serves over <span style=\"color:#FC5185 ;\"><strong>3,500</strong></span> customers worldwide. Their platform facilitates billions of lab tests each year, contributing significantly to healthcare improvement, life sciences advancements, and robust public health surveillance on a global scale."
  },
  {
    "title": "Expertise and Efficiency",
    "content": "With <span style=\"color:#FC5185 ;\"><strong>40 years</strong></span> of experience in the laboratory field and a team of over <span style=\"color:#FC5185 ;\"><strong>1,450</strong></span> lab professionals, Clinisys brings a wealth of expertise to the table. The solutions they provide are tailored to specific industries, supporting lab managers and professionals in optimizing their workflows for enhanced efficiency."
  },
  {
    "title": "Innovation for Tomorrow",
    "content": "Clinisys has defined a modern laboratory platform that incorporates efficient workflows, accessible data, and innovative tools. This approach empowers their customers to deliver testing and diagnostic services at scale, ensuring that laboratories are equipped for the evolving needs of the healthcare and scientific communities."
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
            <h3 className="mb-3">USP of Clinisys</h3>
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
