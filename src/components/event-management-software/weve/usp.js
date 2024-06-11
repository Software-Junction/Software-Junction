import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../weve/weve.module.scss";

const uspData = [
  {
    "title": "Virtual Event Platform",
    "content": "Weve is positioned as the leading virtual event platform, indicating that it specializes in providing online spaces for events and gatherings."
  },
  {
    "title": "Fun Virtual Events",
    "content": "The emphasis on making virtual events fun suggests that Weve goes beyond basic functionality. It likely integrates entertaining and engaging elements into its platform, making the virtual experience enjoyable for participants."
  },
  {
    "title": "Virtual, In-Person, and Hybrid Experiences",
    "content": "Weve offers flexibility by supporting various event formats, including fully virtual, traditional in-person, and hybrid events that combine both physical and virtual elements. This adaptability caters to diverse event needs."
  },
  {
    "title": "Collaboration with The Go Game",
    "content": "The partnership with The Go Game implies a collaboration with a company known for creating interactive and dynamic team-building experiences. This partnership likely enhances Weve's offerings with unique and engaging content."
  },
  {
    "title": "Seamless Transitions",
    "content": "Weve can reportedly adjust in-person events to virtual or hybrid with as little as <span style=\"color:#f95738 ;\"><strong>24</strong></span> hours notice. This highlights the platform's adaptability and responsiveness to unexpected changes, making it a reliable choice for dynamic event planning."
  },
  {
    "title": "Over 20 Years of Experience",
    "content": "The mention of over <span style=\"color:#f95738 ;\"><strong>20</strong></span> years of experience suggests that Weve has a long and successful track record in the industry. This longevity can be seen as a testament to its reliability and expertise."
  },
  {
    "title": "Satisfied Customers",
    "content": "The list of well-known customers, including Adobe, Disney, Nike, SpaceX, eBay, Dropbox, LinkedIn, Sequoia, and Netflix, serves as social proof of Weve's credibility and appeal to reputable organizations."
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
            <h3 className="mb-3">USP of Weve</h3>
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
