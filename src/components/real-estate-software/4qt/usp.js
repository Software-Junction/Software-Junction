import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Cloud and On-Campus Flexibility",
    content:
      "4QT provides the flexibility to choose between cloud-based or on-campus ERP solutions. Clients can opt for a deployment model that aligns with their preferences and business requirements.",
  },
  {
    title: "Extensive Industry Experience",
    content:
      "With over <span style=\"color:#f95738 ;\"><strong>15 years</strong></span> of web development experience, 4QT is a trusted and leading real estate ERP provider in India. The company has served <span style=\"color:#f95738 ;\"><strong>400+ clients</strong></span> and successfully managed <span style=\"color:#f95738 ;\"><strong>1500+ projects</strong></span> since its establishment in <span style=\"color:#f95738 ;\"><strong>2001</strong></span>.",
  },
  {
    title: "RealBOOST™ Technology",
    content:
      "RealBOOST™ is a cutting-edge technology integrated into the ERP software, aiding high-rise, villa, and plot developers in managing large-scale projects across India. This technology enhances lead management, CRM, billing, sales management, and various other project-related functionalities.",
  },
  {
    title: "Customer Satisfaction Guarantee",
    content:
      "4QT proudly guarantees <span style=\"color:#f95738 ;\"><strong>100%</strong></span> customer satisfaction. The emphasis on customer satisfaction reflects the company's commitment to delivering effective and reliable software solutions.",
  },
  {
    title: "Featured Products and Integrations",
    content:
      "4QT's ERP solutions integrate with popular real estate platforms such as Magicbricks, <span style=\"color:#f95738 ;\"><strong> 99Acres </strong></span>, and CommonFloor. The software offers features like lead management, marketing, CRM, sales management, and construction ERP, making it a one-stop solution for real estate professionals.",
  },
  {
    title: "Industry Recognition",
    content:
      "4QT has been featured in prominent magazines like Homes Magazine and Architect Magazine. The recognition in industry publications adds credibility and showcases the company's expertise and contribution to the real estate technology space.",
  },
  {
    title: "Privacy and Compliance Commitment",
    content:
      "4QT demonstrates a commitment to privacy and compliance through clearly defined privacy policies and terms of use. Clients can trust that their data is handled securely and in accordance with industry standards.",
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
            <h3 className="mb-3">USP of 4QT Real Estate ERP</h3>
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
