import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../cloudtalk/cloudtalk.module.scss";

const uspData = [
  {
    title: "Global Coverage",
    content:
      "CloudTalk offers extensive international number coverage, ensuring that businesses can connect with customers anywhere in the world.",
  },
  {
    title: "Time Saving",
    content:
      "With CloudTalk's efficient setup process, businesses can establish their entire phone system within just a few hours, saving valuable time and resources.",
  },
  {
    title: "AI-Powered Conversational Intelligence",
    content:
      "CloudTalk future-proofs businesses by integrating artificial intelligence tools such as automatic call transcriptions, sentiment analytics, and intelligent searching, enabling teams to optimize performance and increase calling efficiency.",
  },
  {
    title: "Data & Analytics",
    content:
      "CloudTalk collects, centralizes, and processes all calling data, offering built-in analytics that empower managers to make informed decisions and optimize performance.",
  },
  {
    title: "Industry-Specific Solutions",
    content:
      "CloudTalk caters to various industries such as e-commerce, IT, financial services, healthcare, and more, offering tailored solutions to meet specific business needs.",
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of CloudTalk</h3>
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
