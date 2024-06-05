import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../acme/acme.module.scss'

const uspData = [
  {
    "title": "Comprehensive Pharmacy Management",
    "content": "The software handles various aspects, including sales/counter operations, stock and inventory management, barcode labeling, CRM (Customer Relationship Management), accounting, and sales/purchase returns."
  },
  {
    "title": "FDA Compliance",
    "content": "Acme's Insight ensures compliance with the regulations of the Food & Drug Authority of India (FDA), helping retailers save time and avoid legal issues."
  },
  {
    "title": "Graphs & Charts for Insights",
    "content": "The inclusion of graphs and charts allows retailers to gain valuable insights into their business performance."
  },
  {
    "title": "Automatic Year-Ending",
    "content": "The software facilitates automatic year-ending processes, streamlining operations for retailers."
  },
  {
    "title": "Mobile Order Booking",
    "content": "Retailers can benefit from the convenience of mobile order booking, improving efficiency and accessibility."
  },
  {
    "title": "Transaction Audit Trail",
    "content": "A transparent transaction audit trail feature ensures accountability and traceability of all transactions."
  },
  {
    "title": "Multi-Company Support",
    "content": "The software enables smooth switching across multiple companies, accommodating the needs of diverse business setups."
  },
  {
    "title": "Export to Tally",
    "content": "Retailers can export accounting data to Tally, a popular accounting software, for seamless financial management."
  },
  {
    "title": "Devnagri Bill Printing",
    "content": "The option for bill printing in Devnagri caters to the linguistic preferences of users."
  },
  {
    "title": "Wide Industry Application",
    "content": "The software caters to various retail sectors, including pharmaceuticals, grocery, super shopee, bazar, automobile spare parts, agriculture, garments, consumer electricals, footwear, and paint shops."
  },
  
  
  
  
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
            <h3 className="mb-3">USP of Acme Insight software</h3>
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
