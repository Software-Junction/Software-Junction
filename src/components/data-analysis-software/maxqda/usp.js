import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../maxqda/max.module.scss";

const uspData = [
  {
    "title": "Mixed Methods Capabilities",
    "content": "MAXQDA stands out for its unparalleled support for mixed methods research. It seamlessly integrates qualitative and quantitative analysis methods, providing researchers with a comprehensive toolkit for data analysis."
  },
  {
    "title": "Efficient Team Collaboration",
    "content": "MAXQDA facilitates teamwork with features like TeamCloud, which simplifies file management and communication among team members. Whether working individually or collaboratively, MAXQDA ensures smooth coordination and productivity."
  },
  {
    "title": "Cross-Platform Compatibility",
    "content": "MAXQDA offers flexibility with its compatibility across both Windows and macOS operating systems. This ensures consistency and ease of use, allowing researchers to seamlessly transition between different devices and environments."
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
            <h3 className="mb-3">USP of MAXQDA</h3>
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
