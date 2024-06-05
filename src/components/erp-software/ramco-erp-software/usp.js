import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ramco-erp-software/ram.module.scss";

const uspData = [
  {
    "title": "Power of One",
    "content": "The ERP software is built using One Codebase, ensuring seamless integration of all components and enhancing operational efficiency."
  },
  {
    "title": "In-Memory Optimization",
    "content": "The ERP software is equipped with Ramco Optimizer, optimizing processes, planning resources, and minimizing costs."
  },
  {
    "title": "Context-Aware",
    "content": "Ramco ERP software is intelligent and intuitive, proactively presenting relevant information to users based on their role and security privileges."
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
            <h3 className="mb-3">USP of Ramco ERP Software</h3>
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
