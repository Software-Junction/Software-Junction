import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../go-gst-bill/go-gst-bill.module.scss";

const uspData = [
  {
    title: "Lifetime Free",
    content:
      "The GST billing software is offered for free for a lifetime, making it accessible to small businesses, startups, and freelancers without any ongoing costs.",
  },
  {
    title: "Trusted by 70,000+ SMEs",
    content:
      'The software has gained the trust of over <span style="color:#FC5185 ;"><strong>70,000+</strong></span> SMEs, indicating its reliability and popularity among businesses.',
  },
  {
    title: "Premium Membership Options",
    content:
      "A paid premium membership is available for users who require advanced features like one-click E-Waybill, E-Invoice, Return filing reports, etc. The premium membership comes with a <span style=\"color:#FC5185 ;\"><strong>  30-day free trial</strong></span>.",
  },
  {
    title: "Comprehensive Features",
    content:
      "The software boasts features such as Staff Account, E-Way Bill, E-Invoice, Sharing Invoice on WhatsApp, Document Duplication, Document Conversion, Multi-Currency Invoice, GST Return Filing Reports, and more.",
  },
  {
    title: "Customization Options",
    content:
      'While offering <span style="color:#FC5185 ;"><strong>350+</strong></span> options under settings to meet various business needs, the software is open to customizations, and users are encouraged to contact the support team for assistance.',
  },
  {
    title: "Easy Customer and Vendor Management",
    content:
      "Adding customers or vendors is simplified, requiring just one click and entry of GST numbers for automatic fetching of details.",
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
            <h3 className="mb-3">USP of Go GST Bill</h3>
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
