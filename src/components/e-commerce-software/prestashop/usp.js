import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../prestashop/prestashop.module.scss";

const uspData = [
  {
    title: "Flexibility and Customization",
    content:
      "Stand out from competitors with a vast array of modules and themes that allow businesses to tailor their online stores according to their brand identity, converting visitors into loyal customers.",
  },
  {
    title: "Open Source Community Support",
    content:
      'Boasting a community of over <span style="color:#FC5185 ;"><strong>1 million</strong></span> members, including experts and partners, PrestaShop offers a collaborative environment where users can find solutions, share insights, and accelerate the growth of their ecommerce ventures.',
  },
  {
    title: "Dedicated Support and Resources",
    content:
      "With a dedicated support team and a wide range of resources, including the PrestaShop Academy for e-learning, businesses using PrestaShop receive the assistance they need to navigate their ecommerce journey successfully.",
  },
  {
    title: "Global Network of Experts",
    content:
      'With over <span style="color:#FC5185 ;"><strong>250</strong></span> experts and <span style="color:#FC5185 ;"><strong>150</strong></span> partners, PrestaShop connects businesses with a global network of professionals who can provide additional assistance and expertise, ensuring the success of ecommerce endeavors.',
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
            <h3 className="mb-3">USP of PrestaShop</h3>
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
