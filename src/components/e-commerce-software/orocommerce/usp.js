import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../orocommerce/orocommerce.module.scss";

const uspData = [
  {
    title: "B2B eCommerce Platform - OroCommerce",
    content:
      'OroCommerce is positioned as the #<span style="color:#FC5185 ;"><strong>1</strong></span> digital commerce platform for B2B businesses. It provides a future-proof digital presence, allowing businesses to digitize catalogs, enable online ordering, and offer flexible payment and shipping options.',
  },
  {
    title: "Marketplace Management with OroCommerce Marketplace",
    content:
      "OroCommerce Marketplace is a scalable platform for managing marketplaces of any complexity. It allows businesses to operate <span style=\"color:#FC5185 ;\"><strong> B2C</strong></span>, <span style=\"color:#FC5185 ;\"><strong>B2B</strong></span>, multi-brand, goods, services, or bookings marketplaces with less customization and faster time-to-market.",
  },
  {
    title: "Multichannel CRM for B2B Businesses - OroCRM",
    content:
      "OroCRM is highlighted as the most flexible multichannel customer relationship management solution for <span style=\"color:#FC5185 ;\"><strong> B2B, B2C, or B2X </strong></span> businesses. It centralizes customer data, provides a<span style=\"color:#FC5185 ;\"><strong> 360-degree</strong></span> customer view, and offers flexible B2B features out-of-the-box.",
  },
  {
    title: "Global Reach and Customer Base",
    content:
      'Oro\'s products are used by companies worldwide, with over <span style="color:#FC5185 ;"><strong>40,000</strong></span> total active installs in <span style="color:#FC5185 ;"><strong>100+</strong></span> countries. The customer base includes well-known companies such as Animal Supply, Saltworks, Partsbase, Dunlop, Braskem, Azelis, Trupar, and more.',
  },
  {
    title: "Digital Transformation for Manufacturing and Distribution",
    content:
      "Oro's products contribute to digital transformation in manufacturing and distribution by accelerating sales, improving customer experience, increasing operational efficiency, and ensuring digital agility.",
  },
  {
    title: "Testimonials and Success Stories",
    content:
      "The provided success stories and testimonials from various customers, such as Samuel Hubbard, Cdiscount Pro, Aldo, Wastequip, Petra, Saltworks, Testrut, TruPar.com, France Air, BME France, and Azelis, highlight the positive impact of Oro's solutions on diverse businesses.",
  },
  {
    title: "Leadership Team with eCommerce Experience",
    content:
      'Oro\'s leadership team consists of individuals with over <span style="color:#FC5185 ;"><strong>50</strong></span> years of combined eCommerce experience, including the co-founders and former leaders of Magento.',
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
            <h3 className="mb-3">USP of OroCommerce</h3>
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
