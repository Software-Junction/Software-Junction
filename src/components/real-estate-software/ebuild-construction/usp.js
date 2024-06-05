import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ebuild-construction/ebuild-construction.module.scss";

const uspData = [
  {
    "title": "Meticulous Planning",
    "content": "eBuild Construction emphasizes careful and detailed planning before commencing any construction project. This involves a comprehensive assessment of financial considerations and efficiency issues. The goal is to address potential challenges and optimize the construction process from the outset."
  },
  {
    "title": "Cohesive Design-Build Collaboration",
    "content": "The company collaborates with long-standing architects and engineers to create a seamless and integrated building package. This ensures that the design and construction phases work together harmoniously, resulting in a well-coordinated and efficient construction process."
  },
  {
    "title": "Trusted Subcontractors and Material Suppliers",
    "content": "eBuild Construction boasts a crew of trusted subcontractors and material suppliers. This team is carefully selected, and the company values the relationships it has built with these partners. The collaboration aims to deliver high-quality projects consistently."
  },
  {
    "title": "Diverse Project Portfolio",
    "content": "eBuild Construction has a diverse portfolio of projects, including new homes, renovations, additions, and more. This showcases the company's versatility and ability to handle projects of varying sizes and complexities."
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
            <h3 className="mb-3">USP of eBuild Construction</h3>
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
