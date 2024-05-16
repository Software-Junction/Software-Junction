import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Accessibility",
    content:
      'Shopify caters to a diverse range of users, from individual entrepreneurs to large brands, making it accessible for everyone. The platform supports businesses in <span style="color:#FC5185 ;"><strong>170+</strong></span> countries, emphasizing its global reach.',
  },
  {
    title: "Ease of Use",
    content:
      "The online store builder features a drag-and-drop interface, enabling users to bring their vision to life without the need for coding expertise. Customizable templates designed by world-class designers facilitate the creation of a unique brand identity.",
  },
  {
    title: "App Ecosystem",
    content:
      "Shopify's App Store provides a wide range of apps developed by trusted professionals, allowing users to enhance their online store's features and functionality.",
  },
  {
    title: "Multichannel Selling",
    content:
      "Shopify enables businesses to sell products online, in person, and globally through various sales channels, emphasizing a multichannel approach to reach a broad customer base.",
  },
  {
    title: "Point of Sale (POS) System",
    content:
      "The flexible POS system caters to retail stores, allowing customers to shop seamlessly from online to the checkout line.",
  },
  {
    title: "Built-in Marketing Tools",
    content:
      "A full suite of marketing tools, including SEO, social media integration, and content marketing, helps users connect with customers both online and in person.",
  },
  {
    title: "Centralized Business Operations",
    content:
      "Streamlined back-office operations, including inventory management and real-time business insights, provide a centralized platform for managing the business effectively.",
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
            <h3 className="mb-3">USP of Shopify</h3>
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
