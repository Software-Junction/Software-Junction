import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Easy and Effective Clinic Management",
    "content": "Described as 'refreshingly simple' and 'remarkably effective.' Positioned as the 'best all-in-one' clinic management platform for ambitious and growing clinics."
  },
  {
    "title": "Global Trust and Reach",
    "content": "Used across <span style=\"color:#FC5185 ;\"><strong>6 continents,</strong></span> highlighting a global presence. Founded in <span style=\"color:#FC5185 ;\"><strong>November 2012,</strong></span> emphasizing years of experience in the industry. Trusted from Sydney to Manila, Ho Chi Minh to Shanghai, and beyond."
  },
  {
    "title": "Stunning Prescriptions",
    "content": "Emphasizes the importance of the 'Perfect Prescription' and offers next-generation prescription technology. Claims the ability to design any prescription layout with vital charts, lab trends, or graphics."
  },
  {
    "title": "Super Easy EMR Customization",
    "content": "Revolutionary technology uses clinical intelligence to digitize paper forms and consents. Offers a personalized EMR with no bloat, noise, or clutter. Automated <span style=\"color:#FC5185 ;\"><strong>1-page</strong></span> medical summary for each patient."
  },
  {
    "title": "Visual Visit Comparison",
    "content": "Sets up visualizations with border-line markers for quick trend identification. Features a 'Compare Visit' tool for analyzing patient progress across multiple visits."
  },
  {
    "title": "Smart Imaging Tools",
    "content": "Cloud-based smart imaging tool with features like auto-filtering based on gender and annotation capabilities. Ability to compare up to <span style=\"color:#FC5185 ;\"><strong>4 images</strong></span> at a time and create slideshows for each patient."
  },
  {
    "title": "Smart Virtual Assistants",
    "content": "Ensures no missed intake forms or consents with smart virtual assistants. Automates paperwork distribution and follow-up."
  },
  {
    "title": "Complete Integration with APIs",
    "content": "Fully integrated with various third-party platforms and services through APIs, including Google Maps, Instagram, PayPal, and more."
  },
  {
    "title": "Comprehensive Support and Training",
    "content": "Offers <span style=\"color:#FC5185 ;\"><strong>1-on-1</strong></span> trainings and unlimited support to ensure the effective use of the platform."
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
            <h3 className="mb-3">USP of Clinicea</h3>
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
