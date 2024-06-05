import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../uniware/uniware.module.scss";

const uspData = [
  {
    title: "Unified Supply Chain Management",
    content:
      "Unicommerce provides a cloud-based e-commerce solution that allows businesses to automate their supply chain processes. This ensures a unified view of operations from a single source of data.",
  },
  {
    title: "Trusted by Leading Brands",
    content:
      'With over <span style="color:#FC5185 ;"><strong>20,000</strong></span> businesses trusting Unicommerce, the platform has successfully helped companies maximize productivity and profitability. Testimonials from well-known brands like Honasa Consumer, Urban Company, Marico, and Edamama highlight the platform\'s positive impact on order management, inventory visibility, and business growth.',
  },
  {
    title: "Specialized E-commerce Enablement Solutions",
    content:
      "Unicommerce's platform offers new-age e-commerce enablement technological solutions designed for sellers, D2C brands, and retailers. The solution covers Warehouse Management, Order Management, Inventory Management, Omnichannel Retailing, and Vendor Panel Management.",
  },
  {
    title: "Extensive Integrations",
    content:
      'Unicommerce boasts <span style="color:#FC5185 ;"><strong>200+</strong></span> plug-and-play integrations, offering seamless connectivity across global marketplaces, carts, logistics providers, ERP, and POS systems. This allows businesses to automate their operations efficiently.',
  },
  {
    title: "Industry Recognition",
    content:
      "Unicommerce has received awards and recognition, positioning itself as the  <span style=\"color:#FC5185 ;\"><strong>#1 cloud-based</strong></span> e-commerce solution and technology enablement platform for businesses.",
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
            <h3 className="mb-3">USP of Uniware</h3>
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
