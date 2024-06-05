import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../logic/logic.module.scss";

const uspData = [
  {
    "title": "Industry-Specific Solutions",
    "content": "The software caters to a wide range of industries, including Apparel & Footwear, FMCG, Pharma & Healthcare, Lifestyle & Fashion, Electrical & Electronics, Food & Beverages, Wellness & Salon, and Hardware. This industry-specific focus ensures that the software meets the unique needs of each sector."
  },
  {
    "title": "Flexible Retailing Formats Support",
    "content": "LOGIC ERP supports various retailing formats, including Company-owned-Company Operated (COCO), Company-owned-Franchise Operated (COFO), Shop-in-Shop (SIS), Large Format Stores (LFS), Franchisee-owned-and-Franchisee Operated (FOFO), and Franchise-owned-Company Operated (FOCO). This flexibility accommodates different business models."
  },
  {
    "title": "Complex Inventory Management",
    "content": "The software efficiently handles complex inventory mixes, allowing businesses to manage multiple operating units, retail outlets, warehouses, and supply points seamlessly."
  },
  {
    "title": "Dynamic Pricing and Loyalty Programs",
    "content": "LOGIC ERP provides dynamic pricing options, rewards, and customer loyalty programs. This ensures businesses can implement flexible and responsive pricing strategies while fostering customer loyalty."
  },
  {
    "title": "Omni-Channel Retail and E-Commerce Management",
    "content": "The software supports Omni-Channel retailing, enabling businesses to integrate online and offline sales channels seamlessly. It also includes robust E-Commerce management capabilities for a holistic approach to retail."
  },
  {
    "title": "Customer Support",
    "content": "The emphasis on a strong relationship with customers and the availability of a support team through live chat or email during business hours highlights the commitment to customer satisfaction."
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
            <h3 className="mb-3">USP of Logic ERP</h3>
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
