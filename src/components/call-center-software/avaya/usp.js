import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../avaya/avaya.module.scss";

const uspData = [
  {
    title: "Avaya Experience Platform",
    content:
      "Avaya offers a comprehensive platform designed to revolutionize customer experiences. It includes features like digital channels, AI virtual agents, workflow automation, and actionable insights. These tools empower teams to deliver seamless and meaningful customer relationships.",
  },
  {
    title: "Examples of Successful Implementations",
    content:
      "Avaya showcases several real-world success stories, such as Atento, Johns Hopkins Healthcare System, DIRECTV in Latin America, Clemson University, and G-Star Raw. These examples highlight Avaya's ability to boost customer satisfaction, enhance agent productivity, personalize services, ensure high availability of communications, and facilitate digital transformations.",
  },
  {
    title: "Diverse Range of Solutions",
    content:
      "Avaya offers a wide range of products and solutions tailored to various business needs, including Avaya Cloud Office, Avaya Spaces, Avaya Call Center Elite, Avaya Aura Platform, Avaya IP Office, and more. This diversity allows businesses to choose solutions that best fit their requirements.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
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
            <h3 className="mb-3">USP of Avaya</h3>
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
