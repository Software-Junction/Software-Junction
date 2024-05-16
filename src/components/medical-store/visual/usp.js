import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Tailored Solution for Pharmaceutical Businesses",
    "content": "<span style=\"color:#FC5185 ;\"><strong>Retail 108</strong></span> Pharmacy Chemist Shop Medical Store Software is meticulously designed to cater to the specific needs of Pharmacy, Chemist Shops, and Medical Stores. <span style=\"color:#FC5185 ;\"><strong>With over 20,000</strong></span> satisfied users in India and abroad, it is a proven solution for the pharmaceutical retail sector."
  },
  {
    "title": "Master Database Management",
    "content": "Maintain a comprehensive database with product information, images, and barcodes. Region-wise supplier details and standard account masters streamline accounting processes."
  },
  {
    "title": "Barcoding for Accuracy",
    "content": "Implement item-wise or company-wise barcoding, ensuring accuracy in transactions. Batch and transaction-wise barcoding further enhance precision."
  },
  {
    "title": "Sales and Billing Optimization",
    "content": "Facilitate easy and fast sales billing through manual entry, barcoding, or mobile app orders. Substitute products, set pricing for specific customer types, and send bills via SMS or mobile app."
  },
  {
    "title": "Easy108 Mobile App",
    "content": "Engage customers with the <span style=\"color:#FC5185 ;\"><strong>Easy 108 mobile app,</strong></span> allowing them to view products, place orders, receive bills, and access payment history. For business owners, the app enables product and offer management, order processing, and real-time insights into sales and operations."
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
            <h3 className="mb-3">USP of Visual Chemist Store</h3>
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
