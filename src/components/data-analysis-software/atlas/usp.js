import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../atlas/atlas.module.scss";

const uspData = [
  {
    "title": "Power of Intentional AI Coding",
    "content": "Guide AI algorithms with specific research goals for tailored results, streamlining qualitative data analysis and reducing manual coding efforts significantly."
  },
  {
    "title": "Seamless Collaboration Across Teams",
    "content": "Real-time collaboration features facilitate effortless teamwork, allowing global or academic teams to share projects, collaborate on coding, and iterate analyses together for increased efficiency."
  },
  {
    "title": "Experience the Future of Qualitative Analysis Today",
    "content": "Combine AI-driven insights with user control, accelerating research progress and enabling researchers to push boundaries in qualitative analysis, ultimately making meaningful contributions to their fields."
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
            <h3 className="mb-3">USP of ATLAS.ti</h3>
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
