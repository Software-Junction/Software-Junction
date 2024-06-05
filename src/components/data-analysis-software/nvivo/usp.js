import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../nvivo/nvivo.module.scss";

const uspData = [
  {
    "title": "Over 30 years of expertise in the field",
    "content": "<span style=\"color:#FC5185 ;\"><strong>NVivo 14</strong></span> boasts a rich history of continuous development and improvement, backed by decades of experience catering to the needs of researchers worldwide."
  },
  {
    "title": "AI-powered autocoding for rapid theme identification",
    "content": "<span style=\"color:#FC5185 ;\"><strong>NVivo 14</strong></span> utilizes artificial intelligence to automate the process of identifying and coding themes within research data."
  },
  {
    "title": "Seamless integration with NVivo Transcription for automated transcriptions",
    "content": "<span style=\"color:#FC5185 ;\"><strong>NVivo 14</strong></span> seamlessly integrates with NVivo Transcription, offering researchers an automated solution for transcribing qualitative interviews and focus groups."
  },
  {
    "title": "Advanced visualization tools for exploring patterns and connections",
    "content": "<span style=\"color:#FC5185 ;\"><strong>NVivo 14</strong></span> offers a range of powerful visualization tools, including word frequency charts, word clouds, and comparison diagrams."
  },
  {
    "title": "Seamless integration with Citavi for efficient literature reviews",
    "content": "<span style=\"color:#FC5185 ;\"><strong>NVivo 14</strong></span> seamlessly integrates with Citavi, a comprehensive reference management and note-taking tool."
  },
  {
    "title": "Enhances team research collaboration and boosts productivity",
    "content": "<span style=\"color:#FC5185 ;\"><strong>NVivo 14</strong></span> facilitates seamless collaboration among research teams, enabling them to work together in real-time and share insights effortlessly. By fostering collaboration and streamlining communication,<span style=\"color:#FC5185 ;\"><strong> NVivo 14</strong></span> enhances productivity, allowing teams to achieve research goals more efficiently."
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
            <h3 className="mb-3">USP of NVivo</h3>
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
