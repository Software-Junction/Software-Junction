import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../shopaccino/shopaccino.module.scss";

const uspData = [
  {
    title: "User-Friendly All-in-One Solution",
    content:
      "Shopaccino emphasizes being a comprehensive, all-in-one ecommerce platform that allows users to manage their entire business without the need for developers. The platform offers tools for creating and managing the website, mobile app, marketing, orders, payments, inventory, shipping, and reports, all from a single dashboard.",
  },
  {
    title: "No Technical Expertise Required",
    content:
      "A standout feature is the claim that users don't need technical expertise or a developer to handle their ecommerce business through Shopaccino. This could be particularly appealing to small and medium-sized businesses with limited resources.",
  },
  {
    title: "30+ Free Responsive Themes",
    content:
      'The availability of over <span style="color:#f95738 ;"><strong>30</strong></span> free responsive themes for creating an ecommerce website suggests a focus on design flexibility, allowing businesses to customize their online presence.',
  },
  {
    title: "Marketing and Customer Engagement Tools",
    content:
      "Shopaccino places importance on marketing and customer engagement tools, including SEO-friendly features, discount coupons, reward points, and campaign tracking. Automated tools for customer engagement, such as auto SMS and emailers for abandoned orders, contribute to retaining customers.",
  },
  {
    title: "Freedom in Payment and Shipping",
    content:
      "The platform offers the freedom to use your own accounts for payment gateways and shipping agencies. Integration with major payment gateways and pre-integrated shipping agency APIs is highlighted.",
  },
  {
    title: "Cost-Effective for Startups",
    content:
      "A testimonial from a startup director emphasizes the cost-effectiveness of Shopaccino's plans in comparison to other options.",
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
            <h3 className="mb-3">USP of Shopaccino</h3>
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
