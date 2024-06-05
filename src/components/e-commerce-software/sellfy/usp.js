import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sellfy/sellfy.module.scss";

const uspData = [
  {
    title: "All-in-One Solution",
    content:
      "Our platform provides an all-encompassing solution for creators and online businesses, allowing them to sell both merchandise and digital products seamlessly from one place. This eliminates the need for multiple tools or platforms.",
  },
  {
    title: "User-Friendly Interface",
    content:
      "Designed for creators who despise complexity, our platform ensures that setting up an online store is a breeze. With a straightforward sign-up process, easy product addition, and store customization options, you can go live in just five minutes.",
  },
  {
    title: "Built-in Marketing Features",
    content:
      "Accelerate your sales and business growth effortlessly with our built-in marketing features. No need for additional tools – everything you need to boost your online presence and sales is right at your fingertips.",
  },
  {
    title: "Flexible Selling Options",
    content:
      "Reach your audience wherever they are. Whether through social media, your own website, or a custom storefront, our platform enables hassle-free selling anywhere. You're not limited to one channel; you can engage with your customers on various platforms.",
  },
  {
    title: "Print on Demand Made Easy",
    content:
      "Launch your print on demand merchandise store within minutes. Design, create, and sell directly from your storefront. No need for third-party integrations – it's all included.",
  },
  {
    title: "Seamless Digital Product Sales",
    content:
      "Say goodbye to technical headaches when selling digital goods. From file hosting to delivery, our platform takes care of everything, allowing creators to focus on their craft.",
  },
  {
    title: "Website Integration Made Simple",
    content:
      'Easily enhance your existing website with our platform. Just a simple copy-paste, and you can add a "buy now" button, shopping cart, and more. Integration is quick and hassle-free.',
  },
  {
    title: "24/7 Support",
    content:
      'Need help? We\'ve got you covered. Our excellent support team is available <span style="color:#FC5185 ;"><strong> 24/7</strong></span> to assist you whenever you need it, ensuring a smooth experience for creators at any time of the day.',
  },
  {
    title: "Thriving Community",
    content:
      'Join a community of over <span style="color:#FC5185 ;"><strong>32,000</strong></span> creators who have successfully turned their passion into income using our platform. Benefit from shared experiences, insights, and support from like-minded individuals.',
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
            <h3 className="mb-3">USP of Sellfy</h3>
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
