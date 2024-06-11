import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../uprow-pos/uprow.module.scss";

const uspData = [
  {
    "title": "Comprehensive Integration",
    "content": "Uprow POS seamlessly integrates all aspects of your retail business, including sales, purchase, barcoding, accounting, and customer management, providing a unified solution for all your needs."
  },
  {
    "title": "Industry-Specific Solutions",
    "content": "Tailored for diverse businesses, Uprow POS caters to various industries such as Fashion & Apparel, Shoe Stores, Home and Lifestyle, Grocery Stores, Bakery Shops, Toys, Health & Beauty, Jewelry, and more."
  },
  {
    "title": "Automation and Invoicing",
    "content": "Uprow POS automates tedious tasks, reducing manual efforts. Create, customize, and send invoices effortlessly, ensuring timely payments and stress-free accounting."
  },
  {
    "title": "Recognition and Awards",
    "content": "Trusted by industry experts, Uprow POS has been recognized with prestigious awards, including the Emerging Product of the Year <span style=\"color:#f95738 ;\"><strong>2020</strong></span> by Tiecon Chandigarh, and acknowledgment from Startup Punjab, Govt of Punjab, as an innovative startup idea of the year."
  },
  {
    "title": "Analytics and Reporting",
    "content": "Gain valuable insights into your business performance with real-time analytics. Track overdue invoices, cash flows, P&L, balance sheets, and more, empowering you to make data-driven decisions."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Uprow POS</h3>
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
