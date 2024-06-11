import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ecogreen/eco.module.scss";

const uspData = [
  {
    "title": "Comprehensive Customer Relationship Management (CRM)",
    "content": "<strong>USP :</strong> \"Customer is King - CRM/Customer Loyalty\"\n<strong>Benefit :</strong> Enhance customer retention through personalized discounts, loyalty programs, and medicine reminders, fostering long-term customer relationships."
  },
  {
    "title": "Revenue Boost through Comprehensive Store Management",
    "content": "<strong>USP :</strong> \"<span style=\"color:#f95738 ;\"><strong>2X</strong></span> Revenue Generation\"\n<br/><strong>Benefit :</strong> Efficiently manage your pharmacy store, allowing you to focus on revenue generation strategies and business growth."
  },
  {
    "title": "Home Delivery Integration with Dunzo",
    "content": "<strong>USP :</strong> \"Home Delivery\"\n<br/> <strong>Benefit :</strong> Provide added convenience to customers by scheduling home deliveries through Dunzo delivery partners."
  },
  {
    "title": "DIY Demo for Hands-on Experience",
    "content": "<strong>USP :</strong> \"DIY Demo - Ecogreen Express\"\n<br/> <strong>Benefit :</strong> Experience the software firsthand with guided DIY demo videos covering essential modules."
  },
  {
    "title": "Online Purchase with Easy Installation",
    "content": " <strong>USP :</strong> \"Pay. Install. Bill\"\n<br/> <strong>Benefit :</strong> Purchase the ERP software online, and enjoy easy installation for quick implementation."
  },
  {
    "title": "Tailored Plans with Add-Ons for Enhanced Functionality",
    "content": "<strong>USP :</strong> \"Plan Details\" and \"Basic + Add-On\"\n<br/> <strong>Benefit :</strong> Choose from tailored plans, including additional features like Google Drive Backup, to suit the specific needs of your pharmacy business."
  },
  {
    "title": "Trusted by 20,000+ Pharma Retailers in India",
    "content": " <strong>USP :</strong> \"<span style=\"color:#f95738 ;\"><strong>Trusted by 20,000+</strong></span> pharma retailers, wholesalers, and marketing companies across India\"\n<br/> <strong>Benefit :</strong> Join a vast community of satisfied users, gaining credibility and trust in the Indian pharmacy market."
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
            <h3 className="mb-3">USP of Ecogreen Express</h3>
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
