import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Scalability for Ambitious Growth",
    "content": "Darwinbox is positioned as an ideal solution for highly ambitious scale-ups, emphasizing the need for HR to liberate and enable the workforce with a self-service model to support business expansion plans."
  },
  {
    "title": "Mobile-First HRMS",
    "content": "The platform offers a mobile-first HRMS (Human Resource Management System) that plays a crucial role in achieving a self-service model, providing flexibility and accessibility for the workforce."
  },
  {
    "title": "Customer Testimonials",
    "content": "Positive testimonials from notable clients, such as CHROs from More Retail, Adani Wilmar, and Ujjivan Bank, highlight the effectiveness of Darwinbox in aligning remote workforce with business goals, achieving an employee-first vision, and serving as a reliable partner."
  },
  {
    "title": "Global Presence",
    "content": "Darwinbox has a significant global presence, serving over <span style=\"color:#FC5185 ;\"><strong>850</strong></span> enterprises with more than <span style=\"color:#FC5185 ;\"><strong>2.2 million</strong></span> employees across <span style=\"color:#FC5185 ;\"><strong>116 countries,</strong></span> showcasing its ability to cater to diverse organizational needs on an international scale."
  },
  {
    "title": "Customer Success Stories",
    "content": "Darwinbox highlights success stories of clients like JSW, Kotak Life Insurance, and others, demonstrating its capability to transform HR service delivery, bring HR services to mobile platforms, and facilitate internal skill development."
  },
  {
    "title": "Innovations and Webinars",
    "content": "The platform engages with its audience through webinars, masterclasses, and discussions on topics such as AI in HR, information security, and privacy compliance, showcasing continuous innovation and thought leadership."
  },
  {
    "title": "ISO Certifications and Gartner Peer Insights Reviews",
    "content": "Darwinbox holds ISO certifications, indicating a commitment to quality standards. Additionally, the platform boasts a high rating of <span style=\"color:#FC5185 ;\"><strong>4.8 based on 362 reviews</strong></span> on Gartner Peer Insights as of <span style=\"color:#FC5185 ;\"><strong>December 5, 2023.</strong></span>"
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
            <h3 className="mb-3">USP of Darwinbox</h3>
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
