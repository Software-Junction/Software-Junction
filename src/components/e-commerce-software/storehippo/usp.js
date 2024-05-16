import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Global Commerce Capabilities",
    content:
      'Target both local and international markets with a single ecommerce platform. <span style="color:#FC5185 ;"><strong>300+</strong></span> Enterprise-grade features for a comprehensive global business solution. Multi Currency payments and invoicing for seamless transactions worldwide. Multilingual ecommerce solutions to cater to diverse language preferences. Build brand or country-specific stores to tailor your approach.',
  },
  {
    title: "Hyperlocal E-commerce Strength",
    content:
      '<span style="color:#FC5185 ;"><strong>30+</strong></span> Logistics providers for efficient and varied delivery options. Inbuilt delivery boy management software for streamlined operations. Marketplace solutions to create and manage your brand marketplace. Faster deliveries with automatic order routing to the nearest dealers.',
  },
  {
    title: "Mobile-First Architecture",
    content:
      'Acknowledging the significance of mobile commerce with <span style="color:#FC5185 ;"><strong>73%</strong></span> of ecommerce occurring on mobile devices. Zero additional cost to build Android and iOS apps for broader market reach. Quick loading pages with Single Page Application (SPA) for a seamless buying experience. Progressive Web App (PWA) stores that function as hybrid apps across devices. Ensures a seamless user experience even in poor or no internet zones.',
  },
  {
    title: "Faster Performance",
    content:
      'Less than <span style="color:#FC5185 ;"><strong>50ms</strong></span> average response time, ensuring a fast and responsive platform. <span style="color:#FC5185 ;"><strong>500 million+</strong></span> API requests per month showcase scalability. <span style="color:#FC5185 ;"><strong>4x</strong></span> faster page switch time compared to traditional cart software. Unparalleled speed, catering to a few to billions of buyers.',
  },
  {
    title: "Security Measures",
    content:
      "Secure sites hosted on leading cloud infrastructure. PCI DSS compliant enterprise ecommerce platform, ensuring industry-standard security. Data encryption and credit card security protocols in place. Free SSL issuance within minutes for secure websites.",
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
            <h3 className="mb-3">USP of StoreHippo</h3>
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
