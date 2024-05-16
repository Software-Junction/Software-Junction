import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Diverse Industry Support",
    "content": "Wondersoft POS caters to a wide range of industries, including apparel, electrical and electronics, salon and spa, food and beverage, lifestyle and fashion, supermarkets, grocery, pharmacy, and specialty retail."
  },
  {
    "title": "Comprehensive Functionality",
    "content": "The POS software offers more than just sales functionalities. It supports alterations, manages defective stock, handles returns, oversees customer relations, and much more."
  },
  {
    "title": "Industry-Specific Features",
    "content": "Tailored solutions for each industry, such as tracking serial numbers for electronics, managing discount budgets, and handling sitting packages for the salon and spa industry."
  },
  {
    "title": "Conditional Promotions and Loss Prevention",
    "content": "For lifestyle and fashion businesses, the software provides features like conditional promotions and loss prevention, addressing specific needs beyond basic POS functionalities."
  },
  {
    "title": "Business Control and Compliance",
    "content": "Supermarket and grocery businesses can achieve full control and industry-standard compliance with Wondersoft's POS software."
  },
  {
    "title": "Cutting-Edge Pharmacy Billing",
    "content": "The pharmacy billing software is cutting-edge, streamlining sales, batch tracking, expiration alerts, and more."
  },
  {
    "title": "Standalone and Cloud-Based Options",
    "content": "Wondersoft provides flexible options with both standalone (Shopaid.Net) and cloud-based (eShopaid) POS applications, catering to different business sizes and structures."
  },
  {
    "title": "Esteemed Clientele",
    "content": "Wondersoft boasts an impressive list of esteemed clientele, including recognized brands like Dell, Reebok, Samsung, and more."
  },
  {
    "title": "Add-On Solutions",
    "content": "Additional solutions like Smart Boss, Promo Engine, Retail POS ERP Integration, MyShopz, and E-Invoice enhance the capabilities of the POS software."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Wondersoft</h3>
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
