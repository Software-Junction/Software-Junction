import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Tailored for Unique E-commerce Business Needs",
    content:
      "The platform is customizable, reliable, scalable, and performance-driven. It is designed to cater to the specific requisites of online stores, ensuring a tailored solution.",
  },
  {
    title: "Global Presence and Branding",
    content:
      "Expert designers assist in creating customized and branded online stores that reflect the unique journey of each e-commerce business. Effortlessly create mobile apps and progressive apps for a comprehensive online presence.",
  },
  {
    title: "Efficient Integration and Short Time to Market",
    content:
      "Easy integration with different platforms like ERP, CRM, and the ability to rapidly adapt to changes with minimum risk. Migrate from existing platforms or create a new store in less time compared to legacy software.",
  },
  {
    title: "Multi-Tenant Hosting with AWS Infrastructure",
    content:
      "Shared resources with multi-tenant hosting for efficient database, application server, and infrastructure management. Powered by AWS, ensuring robust and reliable hosting solutions.",
  },
  {
    title: "Feature-Rich Platform",
    content:
      "Progressive web apps for an app-like experience. Seamless payment gateway, shipment integration, and ERP integration. Advanced SEO capabilities for enhanced online visibility. Presence on social media platforms like Facebook, Instagram, and Google Shopping.",
  },
  {
    title: "Client-Specific Solutions and Client Trust",
    content:
      "Client-specific solutions tailored to individual business needs. Trusted by leading brands such as Vperfumes, Elmart, Forever52, Timehouse, Beyond Fresh, and Al Ershad.",
  },
  {
    title: "Industry-Standard Security and Stability",
    content:
      "Strong password security and stable APIs with long-term support. Architecture and security measures that peacefully integrate with third-party applications.",
  },
  {
    title: "Wide Range of Integration Partners",
    content:
      "Integration with various payment gateways, logistic gateways, SMS gateways, and other partners for a comprehensive e-commerce solution.",
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

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of CommerceUp</h3>
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
