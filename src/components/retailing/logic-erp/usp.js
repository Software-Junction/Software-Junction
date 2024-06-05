import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../logic-erp/logic.module.scss";

const uspData = [
  {
    "title": "Versatility Across Industries",
    "content": "Tailored solutions for a diverse range of industries including Retail, Distribution, Apparel & Footwear, Textile, Pharma & Healthcare, FMCG, Lifestyle & Fashion, Electrical & Electronics, Auto-Parts, and more."
  },
  {
    "title": "Flexibility and Configurability",
    "content": "Flexible and configurable billing, e-invoice, GST, inventory, and invoice software to adapt to the unique needs of different businesses."
  },
  {
    "title": "Industry-Specific Features",
    "content": "Specific modules catering to various industries such as Apparel & Footwear, FMCG, Pharma & Healthcare, Lifestyle & Fashion, Electrical & Electronics, and others, showcasing an understanding of industry-specific requirements."
  },
  {
    "title": "Retail Formats Support",
    "content": "Accommodates various retail formats including Company-owned-Company Operated (COCO), Company-owned-Franchise Operated (COFO), Shop-in-Shop (SIS), Large Format Stores (LFS), Franchisee-owned-and-Franchisee Operated (FOFO), Franchise-owned-Company Operated (FOCO)."
  },
  {
    "title": "Omni-Channel Retail and E-Commerce",
    "content": "Supports Omni-Channel Retail, E-Commerce Management, and B2B/Online Sale Order Management, reflecting a commitment to modern retail practices."
  },
  {
    "title": "Up-to-Date Compliance",
    "content": "Indicates GST readiness and compliance, ensuring businesses can seamlessly manage GST returns without hassles."
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
            <h3 className="mb-3">USP of LOGIC ERP</h3>
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
