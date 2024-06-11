import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../uniware/uniware.module.scss";

const uspData = [
  {
    title: "Forever Free",
    content:
      "Ecwid distinguishes itself by offering a free forever plan, eliminating the need for trials. Users can set up their online store for free and continue using it indefinitely without any cost.",
  },
  {
    title: "Versatile Selling Locations",
    content:
      "Ecwid enables businesses to sell seamlessly across various channels, including websites, social media platforms, popular marketplaces like Amazon, and even in-person. This versatility allows businesses to reach a wider audience and maximize their sales potential.",
  },
  {
    title: "Trusted by 1.6 Million Small Businesses",
    content:
      'The platform boasts a substantial user base, with <span style="color:#f95738 ;"><strong>1.6 million</strong></span> small businesses trusting Ecwid for their e-commerce needs. This not only reflects its reliability but also suggests a thriving community of users.',
  },
  {
    title: "Fast Implementation",
    content:
      'Ranked as the №1 fastest implementation e-commerce platform in <span style="color:#f95738 ;"><strong>2023</strong></span>, Ecwid emphasizes efficiency. Businesses can swiftly set up their online store and start selling without unnecessary delays, providing a quick and hassle-free experience.',
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
            <h3 className="mb-3">USP of Ecwid</h3>
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
