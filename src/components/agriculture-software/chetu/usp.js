import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../chetu/chetu.module.scss";

const uspData = [
  {
    title: "AgTech Solutions",
    content:
      "Chetu offers a wide range of agriculture software solutions covering various aspects such as land management, farm management, livestock management, seed-to-sale systems, precision agriculture, agriculture drones, and more.",
  },
  {
    title: "Advanced Technologies",
    content:
      "The company utilizes advanced technologies such as Artificial Intelligence (AI), machine learning, GIS/GPS, and IoT to provide innovative solutions for optimizing agricultural operations.",
  },
  {
    title: "Customization",
    content:
      "Chetu highlights its ability to provide tailored solutions, including custom software development for specific needs such as land mapping, <span style=\"color:#FC5185 ;\"><strong>3D field design</strong></span>, smart controllers, and sensors.",
  },
  {
    title: "Regulatory Compliance",
    content:
      "Chetu claims to ensure compliance with regulatory standards set by organizations such as the U.S. Department of Agriculture (USDA), Food and Drug Administration (FDA), and others, particularly in the context of food safety and environmental regulations.",
  },
  {
    title: "Global Presence",
    content:
      "With contact information for both the United States and the United Kingdom, Chetu signals its global reach and availability for businesses internationally.",
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
            <h3 className="mb-3">USP of Chetu</h3>
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
