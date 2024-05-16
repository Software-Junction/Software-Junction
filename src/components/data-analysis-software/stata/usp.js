import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Advanced Analytical Capabilities",
    "content": "With a broad suite of statistical features, including Bayesian model averaging, causal mediation analysis, and group sequential designs, Stata provides the tools needed to tackle complex data analysis challenges effectively."
  },
  {
    "title": "Publication-Quality Graphics",
    "content": "Stata enables users to create visually stunning and publication-ready graphics, ensuring that your findings are effectively communicated and understood."
  },
  {
    "title": "Python Integration (PyStata)",
    "content": "Seamlessly integrate Stata with Python to leverage additional libraries and tools, expanding the scope of your analyses and enhancing productivity."
  },
  {
    "title": "Reproducible Research",
    "content": "Stata ensures truly reproducible research by providing a platform where analyses can be easily replicated and shared, fostering transparency and accountability in scientific endeavors."
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
            <h3 className="mb-3">USP of Stata</h3>
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
