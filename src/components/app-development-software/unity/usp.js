import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Cross-Platform Deployment",
    content:
      'Unity creators can deploy their projects to <span style="color:#FC5185 ;"><strong>20+</strong></span> platforms, allowing for extensive reach and accessibility across various devices and systems.',
  },
  {
    title: "Massive Downloads and Popularity",
    content:
      'With a staggering <span style="color:#FC5185 ;"><strong>3.6 billion</strong></span> downloads per month of applications made with Unity, it showcases the widespread adoption and popularity of Unity-created content.',
  },
  {
    title: "Game Development Dominance",
    content:
      '<span style="color:#FC5185 ;"><strong>82</strong></span> out of the top <span style="color:#FC5185 ;"><strong>100</strong></span> games use Unity, highlighting its dominance in the gaming industry and its trusted role in helping games grow.',
  },
  {
    title: "End-to-End Tools and Services",
    content:
      "Unity provides end-to-end tools and services for creation, launch, and ongoing support, making it a comprehensive solution for game developers and other content creators.",
  },
  {
    title: "Versatility in Film and Animation",
    content:
      'Unity offers a complete toolchain for <span style="color:#FC5185 ;"><strong>3D</strong></span> creation, simulation, and rendering, making it an ideal choice for advancing film or animation projects of any size or type.',
  },
  {
    title: "Enterprise Solutions",
    content:
      'Unity provides creation tools and enterprise support for transforming CAD and <span style="color:#FC5185 ;"><strong>3D</strong></span> data into immersive apps and experiences, catering to the needs of the industrial sector.',
  },
  {
    title: "Unity AI Integration",
    content:
      "The mention of Unity Muse emphasizes the integration of AI in game development, showcasing how Unity is at the forefront of AI technology to transform the creation process.",
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

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Unity</h3>
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
