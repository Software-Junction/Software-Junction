import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../simplifyem/simplifyem.module.scss";

const uspData = [
  {
    "title": "Integration and Automation",
    "content": "Integrates with Trans Union credit/criminal history site for tenant screening. Automates repetitive tasks, saving time for property managers and landlords."
  },
  {
    "title": "Responsive Customer Support",
    "content": "US-based customer support that answers calls promptly, ensuring quick resolution of any issues. Users appreciate the knowledgeable and enthusiastic support staff."
  },
  {
    "title": "Financial Benefits",
    "content": "Testimonials highlight financial benefits, such as saving thousands of dollars in taxes for users managing multiple properties. Emphasizes how the product helps in the financial management of properties."
  },
  {
    "title": "Proven Industry Leadership",
    "content": "Established in  <span style=\"color:#FC5185 ;\"><strong>2006</strong></span>, SimplifyEm is positioned as the industry leader in online property management software. Over <span style=\"color:#FC5185 ;\"><strong>$42 billion</strong></span> in property assets managed by the software, showcasing its widespread adoption and trust among property managers."
  },
  {
    "title": "Credibility and Endorsements",
    "content": "Partnerships with major brands in real estate enhance the credibility of SimplifyEm. Displaying the Authorize.Net Merchant verification adds an extra layer of trust and security for users."
  }
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
            <h3 className="mb-3">USP of SimplifyEm</h3>
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
