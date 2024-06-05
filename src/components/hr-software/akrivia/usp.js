import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../akrivia/ak.module.scss";

const uspData = [
  {
    "title": "Comprehensive Solution",
    "content": "Akrivia HCM provides a holistic solution covering the entire employee lifecycle, incorporating <span style=\"color:#FC5185 ;\"><strong>20+ modules and 100+ features.</strong></span> This includes functionalities for recruitment, time and attendance tracking, leave management, core HR optimization, employee engagement, performance management, learning management, and payroll and expenses processing."
  },
  {
    "title": "User-Friendly Experience",
    "content": "Akrivia HCM focuses on delivering a user-friendly experience with a consumer-grade UX. The platform is designed to be intuitive, easy to navigate, and engaging, aiming to ensure that employees find the software enjoyable and efficient to use."
  },
  {
    "title": "Configurability and DIY Setup",
    "content": "The platform allows users to configure and set up processes on their own. This reduces dependence on support teams and empowers users to customize the platform according to their specific organizational needs. The DIY (Do It Yourself) approach enhances flexibility and adaptability."
  },
  {
    "title": "Seamless Integrations",
    "content": "Akrivia HCM offers seamless integrations with third-party systems such as ERP (Enterprise Resource Planning) and compensation tools. This ensures that users can have a unified experience without disruptions caused by incompatible systems."
  },
  {
    "title": "Data Security",
    "content": "The platform prioritizes data security by implementing encryption in multiple layers. This robust security measure helps safeguard organizational data, ensuring confidentiality and integrity. Adherence to industry standards like<span style=\"color:#FC5185 ;\"><strong> ISO-27001-2013, ISO-27701-2019,</strong></span> GDPR, and AICPA certifications further underscores the commitment to data security."
  },
  {
    "title": "Consultative Approach",
    "content": "Akrivia HCM follows a consultative approach, providing guidance and industry best practices to users. This approach aims to streamline existing HR processes, offering valuable insights to optimize workflows and improve operational efficiency."
  },
  {
    "title": "Multi-Country Payroll",
    "content": "Akrivia HCM facilitates payroll processing across <span style=\"color:#FC5185 ;\"><strong>15 countries</strong></span> in multiple currencies. This feature is designed to simplify the complexities of payroll calculations and currency conversions, ensuring accuracy and compliance."
  },
  {
    "title": "AI-Enabled Chatbot",
    "content": "The inclusion of an AI-enabled chatbot enhances user interactions by providing intelligent assistance. Users can leverage the chatbot to perform actions and seek information, contributing to a smoother user experience."
  },
  {
    "title": "Certifications",
    "content": "Akrivia HCM holds various certifications, including <span style=\"color:#FC5185 ;\"><strong>ISO-27001-2013, ISO-27701-2019,</strong></span> GDPR, and AICPA certifications. These certifications validate the platform's commitment to maintaining high standards of security, privacy, and compliance with industry regulations."
  } 
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Akrivia HCM</h3>
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
