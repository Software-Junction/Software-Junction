import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "GST Compliant",
    content:
      "Hassle-free GST compliance with invoices, financial reports, tax calculations, and return filing.",
  },
  {
    title: "Easy Implementation",
    content:
      "Download and start billing within minutes, with<span style=\"color:#FC5185 ;\"><strong>  800+</strong></span> local centers and<span style=\"color:#FC5185 ;\"><strong> 250+</strong></span> customer care executives for support.",
  },
  {
    title: "Customizable",
    content:
      "Tailor Marg ERP to your unique business needs with<span style=\"color:#FC5185 ;\"><strong> 2500+</strong></span> software configurations.",
  },
  {
    title: "Free E-Invoicing",
    content:
      "Easily generate error-free e-invoices with zero downtime, complying with the latest regulations.",
  },
  {
    title: "Auto Cloud Backup",
    content:
      "Securely store and access your data from anywhere with automatic cloud backups on Google Drive/One Drive.",
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

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Marg Mandi Software</h3>
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
