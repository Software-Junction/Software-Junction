import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../3dcart/3dcart.module.scss";

const uspData = [
  {
    title: "All-in-One Solution",
    content:
      "3dcart offers an all-in-one eCommerce software with features that cover every aspect of building and managing an online store. From real-time shipping to various payment options, it provides a holistic solution for internet marketers.",
  },
  {
    title: "Proven Experience",
    content:
      'With <span style="color:#FC5185 ;"><strong>20</strong></span> years of business experience, 3dcart has established itself as a reliable and experienced player in the eCommerce industry.',
  },
  {
    title: "Recognition and Awards",
    content:
      'Awarded as the <span style="color:#FC5185 ;"><strong>2018</strong></span> Best Shopping Cart, 3dcart has been recognized for its excellence in providing eCommerce solutions.',
  },
  {
    title: "Top SEO Platform",
    content:
      "Positioned as a top SEO platform, 3dcart emphasizes the importance of search engine optimization to boost online store visibility and improve rankings.",
  },
  {
    title: "Customizability",
    content:
      "The platform offers a high level of customizability with a wide selection of free and premium themes. Users have the flexibility to customize themes according to their preferences, either through CSS or professional web design packages.",
  },
  {
    title: "Synchronization and Adaptability",
    content:
      "3dcart enables users to sync their products across various online platforms such as eBay, Amazon, Google Shopping, and Facebook. It is adaptable to different types of businesses, whether dealing with ebooks, unique crafts, or mass-produced inventory.",
  },
  {
    title: "Security",
    content:
      "The platform prioritizes security with PCI Certified hosting, SSL technology, and anti-fraud measures, instilling confidence in both the business owner and customers.",
  },
  {
    title: "Transparent Business Model",
    content:
      "3dcart prides itself on transparency, emphasizing no contracts, hidden caveats, surprise fees, or confusing terms. It offers a full-featured and reliable online store with live support.",
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
            <h3 className="mb-3">USP of 3dcart</h3>
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
