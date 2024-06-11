import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../hedgehog-lab/hedgehog-lab.module.scss";

const uspData = [
  {
    title: "AI Team Talk with Under Armour",
    content:
      "The company is partnering with Under Armour to explore the potential of AI in creating an exceptionally inspirational team talk. The goal is to leverage AI technology to enhance motivational communication in a team setting.",
  },
  {
    title: "Custom App for AJ Bell",
    content:
      "Due to an increased number of first-time investors, AJ Bell collaborated with the consultancy to develop a custom app. The app aims to simplify the investment process, addressing the needs of a growing user base.",
  },
  {
    title: "Whitepaper on Flutter",
    content:
      "The company has released a comprehensive guide on using Flutter for business success. The guide focuses on unlocking business potential through Flutter, a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
  {
    title: "Recognition with BIMA Award",
    content:
      "The company has received a BIMA Award for User Experience Research (UXR) work done for Dodl by AJ Bell. This recognition highlights the excellence in user experience design and research.",
  },
  {
    title: "Sponsorship of DjangoCon Africa",
    content:
      "The company is a proud sponsor of DjangoCon Africa, a conference aiming to educate and inspire the global Django community. This sponsorship aligns with the company's commitment to supporting and participating in tech-related events.",
  },
  {
    title: "Service Offerings",
    content:
      "The company provides a range of services including Mobile Apps, Web Apps, Consulting, Product Strategy, Digital Transformation, UX Research & Design, AI, Data Engineering, Cloud & DevOps, Enterprise Software Development, and Scaling. These services cover the entire spectrum of technology-related challenges, from initial consulting to development and scaling.",
  },
  {
    title: "Project Showcase",
    content:
      "The consultancy has worked with various industries, showcasing projects in professional services, retail, travel & transport, financial services, healthcare & lifestyle, logistics, energy, and more. Each project addresses specific challenges within the respective industries, demonstrating the company's versatility.",
  },
  {
    title: "Industries Worked With",
    content:
      "The company has experience in digital transformation across diverse industries, including Financial Services, Energy, Logistics, Healthcare & Lifestyle, Government Public Sector, Entertainment & Media, Retail, Travel & Transport, and Professional Services. This highlights the broad applicability of their tech solutions.",
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
            <h3 className="mb-3">USP of hedgehog lab</h3>
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
