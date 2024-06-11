import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../arka-inventory/arka-inventory.module.scss";

const uspData = [
  {
    title: "Built on Salesforce",
    content:
      "Arka Inventory stands out by being built on the Salesforce platform, which is a widely used and trusted customer relationship management (CRM) system. This integration likely offers seamless collaboration and data sharing capabilities for businesses already using Salesforce."
  },
  {
    title: "Trusted by Businesses Worldwide",
    content:
      "The testimonial section highlights that Arka is trusted by businesses worldwide, both large and small. This serves as social proof, indicating that the software has a track record of success across a diverse range of businesses."
  },
  {
    title: "Operational Efficiency and Customer Success",
    content:
      "The software is portrayed as a tool that not only improves operational efficiency but also drives customer success. This emphasis on customer success suggests that Arka is not just a tool but a partner in helping businesses achieve their goals."
  },
  {
    title: "Integration with QuickBooks Online and Other Platforms",
    content:
      "Arka Inventory offers integration with popular accounting software like QuickBooks Online, showcasing flexibility and compatibility with other tools that businesses may already be using."
  }
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML }
  });
};

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Arka Inventory</h3>
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
