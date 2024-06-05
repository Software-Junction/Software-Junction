import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../shopnix/shopnix.module.scss";

const uspData = [
  {
    title: "Professional Domain and Email IDs",
    content:
      "Users get a professional domain like mystore.com along with matching email IDs. This not only enhances the brand image but also establishes credibility when communicating with customers.",
  },
  {
    title: "Social Media Integration",
    content:
      "Integration with Facebook Store allows merchants to leverage their existing network and sell directly on the world's largest social media platform.",
  },
  {
    title: "SEO Optimization",
    content:
      "Shopnix automatically optimizes stores for search engines with built-in SEO tools, ensuring visibility and ranking in search results.",
  },
  {
    title: "Built-in Marketing Tools",
    content:
      "The platform provides built-in tools and automation for marketing, helping merchants attract more customers to their stores.",
  },
  {
    title: "Diverse Payment Options",
    content:
      "Shopnix supports various payment methods, including COD, bank transfer, credit cards, debit cards, wallets, and net banking, providing flexibility for customers.",
  },
  {
    title: "Beautiful Store Designs",
    content:
      "Merchants can choose from handcrafted themes and customize them further to create an appealing and unique online store.",
  },
  {
    title: "Made in India",
    content:
      "Highlighting its origin, Shopnix is positioned as a platform made in India, catering specifically to merchants across the country.",
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
            <h3 className="mb-3">USP of Shopnix</h3>
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
