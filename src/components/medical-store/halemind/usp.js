import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Tailored Solutions",
    "content": "Halemind offers tailored products for different healthcare entities, including private practices, hospitals, pharmacies, and labs. This ensures that the software meets the specific needs of each type of healthcare provider."
  },
  {
    "title": "Innovative Technology",
    "content": "Described as ingenious and leading-edge, Halemind provides a secure and advanced EHR/HMS. The emphasis on connected health care platforms suggests that it leverages innovative technology to streamline healthcare operations."
  },
  {
    "title": "Efficient Practice Management",
    "content": "Halemind aims to simplify and scale healthcare practices by offering features such as smart calendars, easy-to-consume data visualization, and evidence-based care. This can lead to more efficient practice management, allowing healthcare providers to focus on patient care."
  },
  {
    "title": "Patient Empowerment",
    "content": "The software enables patients to track their progress, from lab reports to prescription slips. This emphasis on patient empowerment can enhance patient engagement and contribute to better healthcare outcomes."
  },
  {
    "title": "Administrator Bliss",
    "content": "The all-in-one dashboard for hospital management, including connected records, billing, digital prescriptions, and patient portal, suggests a seamless and centralized system for administrators. This can lead to improved efficiency and organization in healthcare facilities."
  },
  {
    "title": "Comprehensive Feature Set",
    "content": "The list of key features, including appointments scheduling, visual case sheets, patient registration, and smart analytics, suggests a comprehensive feature set that covers various aspects of healthcare management."
  },
  {
    "title": "Long-Term User Satisfaction",
    "content": "Testimonials from healthcare professionals like Dr. Madhavi and Dr. Sandeep Selvinus indicate long-term user satisfaction, implying that Halemind has consistently met their needs over the years."
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
            <h3 className="mb-3">USP of Halemind</h3>
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
