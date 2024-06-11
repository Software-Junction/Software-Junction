import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../open-cart/open-cart.module.scss";

const uspData = [
  {
    title: "Free and Open Source",
    content:
      "OpenCart is committed to transparency and offers free downloads and updates. Users can benefit from the software without incurring monthly fees.",
  },
  {
    title: "Quick Setup with OpenCart Cloud",
    content:
      'Users can set up an OpenCart Cloud store in just <span style="color:#f95738 ;"><strong>5</strong></span> minutes. The cloud solution, hosted on Amazon, eliminates the need for users to purchase and configure hosting. It provides various plans to accommodate businesses of different sizes, and a <span style="color:#f95738 ;"><strong>7-day</strong></span> free trial allows users to experience the benefits.',
  },
  {
    title: "Powerful Store Management",
    content:
      "OpenCart provides robust store management capabilities, including built-in SEO tools. Users can easily manage products, customers, orders, taxes rules, coupon codes, and more, making it simple to run an eCommerce business.",
  },
  {
    title: "Extensive Extensions and Themes",
    content:
      'With over <span style="color:#f95738 ;"><strong>13,000</strong></span> modules and themes available in the OpenCart marketplace, users can easily expand their store\'s functionality. This vast selection includes themes for various sectors, service integrations, payment providers, shipping methods, social media, marketing, accounting, reporting, sales, and language packs.',
  },
  {
    title: "Trusted Support Options",
    content:
      'OpenCart offers two support avenues to meet diverse needs. Users can access free community support through the OpenCart forums, boasting over <span style="color:#f95738 ;"><strong>110,000</strong></span> registered members and <span style="color:#f95738 ;"><strong>550,000+</strong></span> posts. Alternatively, users seeking professional technical support can opt for dedicated support directly from the source.',
  },
  {
    title: "Global Presence and Recognition",
    content:
      'OpenCart is a widely adopted eCommerce platform, empowering over <span style="color:#f95738 ;"><strong>471,669</strong></span> entrepreneurs globally. Its significant achievements, including awards and recognition from entities like Forbes, PayPal, BBC, and more, highlight its credibility and success.',
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
            <h3 className="mb-3">USP of OpenCart</h3>
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
