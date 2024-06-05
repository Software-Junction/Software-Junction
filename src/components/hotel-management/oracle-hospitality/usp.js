import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../oracle-hospitality/ora.module.scss";

const uspData = [
  {
    "title": "Scale and Reach",
    "content": "With over <span style=\"color:#FC5185 ;\"><strong>40,000</strong></span> active sites managing <span style=\"color:#FC5185 ;\"><strong>4.8 million</strong></span> hotel rooms and integrating with <span style=\"color:#FC5185 ;\"><strong>4,000 vendors,</strong></span> Oracle Hospitality provides a scalable solution suitable for a wide range of hospitality establishments, ensuring global fiscal and legal compliance in <span style=\"color:#FC5185 ;\"><strong>200 countries.</strong></span>"
  },
  {
    "title": "AI and Automation",
    "content": "The software harnesses the power of AI and automation to help hospitality businesses work smarter, not harder. This includes predictive, intelligent customer service solutions, enhancing efficiency and guest satisfaction."
  },
  {
    "title": "Tailored Solutions by Sector",
    "content": "Oracle Hospitality caters to specific sectors within the hospitality industry, such as hotels and resorts, casino and gaming, hotel food and beverage, and cruise. Each sector-specific solution is designed to address the unique needs and challenges of that segment."
  },
  {
    "title": "Customer Loyalty and Marketing",
    "content": "The software enables personalized marketing campaigns to attract and retain guests, showcasing an understanding of their preferences. Loyalty and marketing solutions help build exceptional guest relationships and drive repeat business."
  },
  {
    "title": "Continuous Innovation",
    "content": "Oracle Hospitality stays at the forefront of industry trends and innovations, as evident from initiatives like the Hospitality APIs Innovation OPEN Forum and strategic collaborations with brands like Wyndham."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Oracle Hospitality</h3>
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
