import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../creliohealth/crel.module.scss";

const uspData = [
  {
    "title": "Patient Engagement Solution",
    "content": "CrelioHealth provides a complete patient engagement software designed to enhance the overall patient experience. By offering an all-in-one solution, the platform aims to facilitate a seamless digital journey for patients, ultimately leading to improved patient retention rates."
  },
  {
    "title": "Seamless Website Integration",
    "content": "CrelioHealth allows healthcare providers to convert their websites into online stores effortlessly. This integration is quick and doesn't require substantial infrastructure investments. By making the website a central hub for patient engagement, providers can effectively attract and retain customers."
  },
  {
    "title": "Personalized Promotions and Targeted Packages",
    "content": "CrelioHealth's patient relationship management software enables healthcare providers to tailor promotions. This includes creating personalized offers, discounts, and test packages based on factors like patient intent, age, and specific diseases. This customization aims to improve patient engagement and conversion rates."
  },
  {
    "title": "Social Media Integration for Online Presence",
    "content": "The platform offers social media integration to enhance the online presence of healthcare providers. By leveraging social promotions, providers can reach a wider audience and engage with patients through various online channels."
  },
  {
    "title": "Effortless Integration with EMR Systems",
    "content": "CrelioHealth's patient scheduling software seamlessly integrates with Electronic Medical Record (EMR) systems. This integration ensures that administrative staff has real-time access to accurate patient data and medical records, reducing manual errors and improving efficiency."
  },
  {
    "title": "Digital Report Delivery on WhatsApp",
    "content": "CrelioHealth offers a convenient feature for delivering digital reports directly to patients through secure channels like WhatsApp. This enhances the patient experience by providing easy access to important medical information."
  },
  {
    "title": "Customizable Patient Communication",
    "content": "Healthcare providers can personalize their brand messaging through customizable email, SMS, and WhatsApp communications. This flexibility allows them to strengthen their brand identity and connect with patients on a more personal level."
  },
  {
    "title": "Privacy and HIPAA Compliance",
    "content": "CrelioHealth prioritizes patient privacy and security. All patient records and transactions are stored and encrypted end-to-end in the patient management system. The platform is also HIPAA-compliant, ensuring that automated notifications and messages sent to patients are secure, timely, and error-free."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of CrelioHealth</h3>
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
