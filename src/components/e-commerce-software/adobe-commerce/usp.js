import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../adobe-commerce/adobe-commerce.module.scss";

const uspData = [
  {
    title: "Personalized Experiences",
    content:
      'Adobe Commerce emphasizes the creation of uniquely personalized <span style="color:#f95738 ;"><strong>B2B</strong></span> and <span style="color:#f95738 ;"><strong>B2C</strong></span> experiences. Utilizes Native AI to drive personalized content, promotions, recommendations, and site searches in real-time. AI-driven tools enhance customer interactions and boost conversions.',
  },
  {
    title: "Scalable and Composable Commerce",
    content:
      "Platform architecture designed for scalability, accommodating growth and changes in customer behavior. Composable commerce approach allows for the rapid deployment of composable services, enhancing innovation. Enables IT teams to build, integrate, and customize apps securely in a serverless PCI-compliant environment.",
  },
  {
    title: "Omnichannel Capabilities",
    content:
      "Offers omnichannel personalization through commerce data, ensuring a seamless experience across various channels. Facilitates increased reach to new markets, brands, or business models, empowering commerce teams to adapt to shifting opportunities.",
  },
  {
    title: "AI-Driven Tools for Productivity",
    content:
      "Boosts team productivity through AI-merchandising tools, aiding in faster decision-making and efficient management. Provides personalized site search, product recommendations, and browsing experiences.",
  },
  {
    title: "Marketplace for Customization",
    content:
      "Commerce Marketplace offers a wide array of free and premium apps and extensions for customization. Ranges from back-office integrations to customer experience solutions, catering to diverse business needs.",
  },
  {
    title: "Leader in Digital Commerce",
    content:
    "Recognized as a Leader in the<span style=\"color:#f95738 ;\"><strong> 2023</strong></span> Gartner® Magic Quadrant™ for Digital Commerce, reinforcing Adobe's industry leadership.Highlights the platform's strength, vision, and ability to execute in the digital commerce space."
      },
  {
    title: "Comprehensive Holiday Shopping Trends Analysis",
    content:
      "Demonstrates a commitment to ongoing insights into consumer shopping behaviors through the analysis of trillions of retail data points.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
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
            <h3 className="mb-3">USP of Adobe Commerce</h3>
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
