import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../mobincube/mobincube.module.scss";

const uspData = [
  {
    title: "No Coding Required",
    content:
      "Mobincube emphasizes the fact that users can create mobile applications without any coding skills. This is a significant advantage for individuals who may not have a technical background.",
  },
  {
    title: "Free to Use",
    content:
      "The platform offers a free sign-up, allowing users to create and publish their mobile applications without any initial cost. This could attract individuals or small businesses with budget constraints.",
  },
  {
    title: "Multiplatform Compatibility",
    content:
      "Mobincube supports native applications, making them compatible across multiple platforms. This can be appealing for users who want their apps to be accessible on various devices and operating systems.",
  },
  {
    title: "Impressive User Stats",
    content:
      "Highlighting the significant numbers, such as over <span style=\"color:#f95738 ;\"><strong> $2 million </strong></span>earned by users, <span style=\"color:#f95738 ;\"><strong>132,420</strong></span> published applications, and <span style=\"color:#f95738 ;\"><strong>171,453,657</strong></span> application downloads, can showcase the platform's popularity and success.",
  },
  {
    title: "Educational Resources",
    content:
      "Mentioning Mobincube Education and its advanced tools like Codoozer, Kustodio, and DoyoStories indicates that the platform not only provides a service but also supports users in learning and enhancing their app development skills.",
  },
  {
    title: "Monetization Opportunities",
    content:
      'The statement "You can make some money, too!" implies that Mobincube offers monetization options for users, making it not just a creation tool but also a potential source of income for app creators.',
  },
  {
    title: "Global Reach",
    content:
      "The availability of the platform in multiple languages (Deutsch, English, Español, Français, Italiano, Polski, Русский) indicates a global approach, making it accessible to a diverse user base.",
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
            <h3 className="mb-3">USP of Mobincube</h3>
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
