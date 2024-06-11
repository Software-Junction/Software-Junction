import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sleek-bill-online/sleek-bill-online.module.scss";

const uspData = [
  {
    title: "Multi-User Accessibility",
    content:
      "The software allows multiple users to access and collaborate on invoices from any PC or tablet. This feature is especially beneficial for small businesses with teams working across various devices.",
  },
  {
    title: "GST Compliance",
    content:
      'The software is fully integrated with the Goods and Services Tax (GST) system in India. It supports GST invoices, quotes, delivery notes, purchase orders, bills, credit notes, GSTR <span style="color:#f95738 ;"><strong>1</strong></span>, and GSTR <span style="color:#f95738 ;"><strong>3B</strong></span>, ensuring accurate and compliant financial transactions.',
  },
  {
    title: "Personalized Templates",
    content:
      'Users can create impressive and personalized invoices quickly with optimized templates. The software allows for up to <span style="color:#f95738 ;"><strong>20</strong></span> products on a single page, enhancing the professional presentation of invoices.',
  },
  {
    title: "Comprehensive Document Support",
    content:
      "The software offers a range of documents and features designed specifically for Indian businesses, including proforma invoices, quotations, GST tax invoices, delivery notes, and more.",
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
            <h3 className="mb-3">USP of Sleek Bill Online</h3>
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
