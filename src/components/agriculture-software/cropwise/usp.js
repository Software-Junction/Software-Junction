import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Data Potential Unleashed",
    content:
      "Cropwise emphasizes bringing the potential of farm data to life, allowing users to save time, act quickly, spend wisely, and ultimately achieve higher yields. The platform aims to reduce rework and simplify data management, providing an all-in-one decision-making journey.",
  },
  {
    title: "Digital Solutions Beyond Apps",
    content:
      "Cropwise goes beyond being a collection of apps, offering a holistic approach to crop optimization by leveraging agricultural technology. Users are encouraged to improve their operations, connect solutions to address agronomic challenges, and make informed decisions with ongoing support.",
  },
  {
    title: "Diverse Digital Solutions",
    content:
      "Cropwise provides a range of digital solutions across different stages of the farming cycle, including planning, preparation, planting, monitoring, crop protection, and harvesting.",
  },
  {
    title: "Connected and Easily Integrated",
    content:
      "Cropwise distinguishes itself by offering solutions that seamlessly talk to each other, promoting easy integration of field maps, users, passwords, machinery, and product lists. The platform aims to simplify connections in agriculture, providing a unified and efficient digital experience.",
  },
  {
    title: "Global Reach and Success Stories",
    content:
      "Cropwise is highlighted as a global platform supporting multiple crops, farm sizes, and operations. Success stories underscore the platform's ability to recognize individual user challenges and provide unique solutions.",
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
            <h3 className="mb-3">USP of Cropwise</h3>
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
