import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../cc-avenue/cc-avenue.module.scss";

const uspData = [
  {
    title: "Comprehensive Payment Solutions",
    content:
      "CCAvenue offers a wide range of payment solutions, including a built-in payment gateway, invoice payments, B2Biz payments, subscriptions, and contactless payments. This comprehensive suite caters to various business needs, ensuring flexibility and convenience for both sellers and buyers.",
  },
  {
    title: "Global Payment Capability",
    content:
      'CCAvenue allows businesses to collect payments in <span style="color:#FC5185 ;"><strong>27</strong></span> different currencies, providing a global reach. This feature enables sellers to accept payments from customers worldwide, making it a versatile solution for businesses with international transactions.',
  },
  {
    title: "Security Assurance",
    content:
      "CCAvenue emphasizes the highest level of PCI compliance, ensuring robust data security standards. This commitment to security provides both sellers and buyers with confidence in conducting transactions on the platform.",
  },
  {
    title: "Innovative Marketing and Analytical Tools",
    content:
      'CCAvenue offers marketing tools to enhance promotional efforts and analytical tools for real-time business insights. This allows businesses to create and manage offers effectively while gaining a <span style="color:#FC5185 ;"><strong>360°</strong></span> view of their performance in the competitive online industry.',
  },
  {
    title: "Transaction Enhancing Features",
    content:
      "Unique features such as selling on social networks through CCAvenue S.N.I.P., collecting payments through emails/SMS with Invoice Payment System (I.P.S.), and secure telephone payments with CCAvenue PhonePay enhance the overall transaction experience for businesses and customers.",
  },
  {
    title: "24/7 Super Support",
    content:
      'CCAvenue boasts a dedicated team of experts available <span style="color:#FC5185 ;"><strong>24/7/365</strong></span> to provide support through various channels, including email, chat, and telephone. The personalized and responsive support ensures that businesses receive assistance tailored to their specific needs.',
  },
  {
    title: "Certifications and Trust",
    content:
      "CCAvenue holds certifications such as <span style=\"color:#FC5185 ;\"><strong>BSI - ISO/IEC 27001:2013</strong></span>, PCI-DSS, and is GeoTrust Secured. These certifications, along with partnerships with major card networks like MasterCard, VISA, American Express, RuPay, and JCB, establish trust and reliability in the platform.",
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
            <h3 className="mb-3">USP of CCAvenue</h3>
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
