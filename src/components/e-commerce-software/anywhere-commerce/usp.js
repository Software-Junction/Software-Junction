import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../anywhere-commerce/anywhere-commerce.module.scss";

const uspData = [
  {
    title: "Faster EMV Set-up with mPOS Industry Experts",
    content:
      "AnywhereCommerce specializes in expediting the setup of EMV (Europay, Mastercard, and Visa) technology on mobile point-of-sale (mPOS) systems. EMV ensures secure and globally accepted transactions, and AnywhereCommerce's expertise streamlines the implementation process, saving time for businesses.",
  },
  {
    title: "Mobile Payment Acceptance Your Way",
    content:
      "AnywhereCommerce offers a versatile range of certified and compliant devices for mobile payment acceptance. Whether businesses prefer swipe, dip, or tap methods, AnywhereCommerce provides secure options, allowing customization based on individual preferences and industry standards.",
  },
  {
    title: "AnyPay™ Developer Tool",
    content:
      "AnyPay™ stands out as a powerful developer tool, enabling seamless payment integration for applications across any platform and in any programming language. This flexibility ensures that businesses can payment-enable their software without constraints, fostering innovation and adaptability.",
  },
  {
    title: "Custom Solutions for Complex Projects",
    content:
      "AnywhereCommerce goes beyond off-the-shelf solutions, offering custom services for designing, developing, integrating, and deploying complex payment projects. This tailored approach ensures that businesses receive solutions that precisely meet their unique requirements and challenges.",
  },
  {
    title: "Connectivity with Multiple Devices Through a Singular Code Base",
    content:
      "The AnyPay™ ecosystem facilitates connectivity across a variety of devices through a unified code base. This means that businesses can achieve seamless interoperability and consistency in their payment systems, enhancing efficiency and reducing compatibility issues.",
  },
  {
    title: "Pioneers of Mobile Payments",
    content:
      'AnywhereCommerce boasts a significant track record, having sold over <span style="color:#FC5185 ;"><strong>20 million</strong></span> card readers since its establishment in <span style=\"color:#FC5185 ;\"><strong> 2006 </strong></span>. This long-standing presence establishes them as pioneers in the field, demonstrating a history of reliability, innovation, and continuous improvement in mobile payment solutions.',
  },
  {
    title: "Tailored Solutions for Diverse Clients",
    content:
      "AnywhereCommerce caters to a diverse clientele, including enterprises, MSPs/Acquirers, and Developers/ISVs. By offering solutions customized to the specific needs of each client type, AnywhereCommerce ensures that businesses of all sizes and functions can benefit from their mobile payment expertise.",
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
            <h3 className="mb-3">USP of AnywhereCommerce</h3>
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
