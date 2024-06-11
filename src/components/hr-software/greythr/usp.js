import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../greythr/grey.module.scss";

const uspData = [
  {
    "title": "Customer Trust and Base",
    "content": "Serving over <span style=\"color:#f95738 ;\"><strong>20,000</strong></span> companies in <span style=\"color:#f95738 ;\"><strong>250+</strong></span> cities indicates a strong customer base, showcasing that businesses across diverse industries and locations trust greytHR for their HR and payroll needs."
  },
  {
    "title": "Statutory Compliance Assurance",
    "content": "greytHR places a strong emphasis on ensuring <span style=\"color:#f95738 ;\"><strong>100%</strong></span> statutory compliance. This is crucial for businesses to adhere to local and national regulations, reducing the risk of legal issues related to HR and payroll."
  },
  {
    "title": "Proactive Customer Support",
    "content": "greytHR offers proactive customer support, with a quick response time of under <span style=\"color:#f95738 ;\"><strong>2 hours</strong></span> and a resolution time of under <span style=\"color:#f95738 ;\"><strong>6 hours</strong></span> for the majority of queries. This support is crucial for minimizing downtime and ensuring smooth HR operations."
  },
  {
    "title": "Growing Knowledge Framework",
    "content": "Beyond the software, greytHR provides a knowledge framework through resources like the greytHR Academy, greytribe Community, Resource Library, Webinars, and Podcasts. This adds value by offering continuous learning opportunities for users."
  },
  {
    "title": "Global Reach",
    "content": "The platform's presence in <span style=\"color:#f95738 ;\"><strong>22+ countries</strong></span> indicates that greytHR is designed to cater to a global audience, understanding and adapting to the diverse needs of businesses worldwide."
  },
  {
    "title": "Continuous Improvement Focus",
    "content": "The mention of live product training, multilingual support, and access to unlimited career growth opportunities demonstrates a commitment to continuous improvement, ensuring that users stay updated and supported throughout their journey with greytHR."
  },
  {
    "title": "Ease of Use for Startups",
    "content": "A testimonial describing greytHR as a \"Good HR software for startups\" suggests that the platform is user-friendly and well-suited for businesses in their early stages, providing essential HR functionalities without unnecessary complexity."
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
            <h3 className="mb-3">USP of greytHR</h3>
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
