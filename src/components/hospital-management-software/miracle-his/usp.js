import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../miracle-his/mir.module.scss";

const uspData = [
  {
    "title": "Paperless Hospital Environment",
    "content": "By leveraging the latest technologies, Miracle HIS promotes a paperless working environment. This not only contributes to environmental sustainability but also streamlines operations, reducing the chances of errors caused by handwritten records."
  },
  {
    "title": "Internet-Based Accessibility",
    "content": "The software enables quick and secure access to patient data remotely. This feature enhances flexibility and convenience for healthcare professionals, allowing them to retrieve information from anywhere with an internet connection."
  },
  {
    "title": "Decision Support System",
    "content": "Miracle HIS serves as a powerful decision support system for medical professionals. It aids in generating diverse information based on demographic, gender, age group, etc. This supports the development of robust healthcare guidelines for the hospital."
  },
  {
    "title": "Efficient Accounts Management",
    "content": "The system ensures efficient and accurate accounts management, patient record maintenance, and resource distribution. Miracle HIS provides a holistic view of hospital growth by offering insights into various aspects of hospital operations."
  },
  {
    "title": "Enhanced Patient Care",
    "content": "The software contributes to enhanced patient care by facilitating quick access to patient records, appointment tracking, and a cost-effective treatment process. This enables healthcare providers to offer better services to a larger number of patients with fewer staff resources."
  },
  {
    "title": "Time-saving for Healthcare Professionals",
    "content": "Miracle HIS reduces the time healthcare professionals spend on non-clinical activities. By automating administrative tasks, doctors can focus more on clinical perspectives, ultimately improving the overall efficiency of healthcare delivery."
  },
  {
    "title": "Optimized Drug Usage Administration",
    "content": "Miracle HIS assists in better drug usage administration, ensuring a review of effectiveness. This feature leads to a reduction in harmful drug interactions and promotes more appropriate pharmaceutical operations."
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
            <h3 className="mb-3">USP of Miracle HIS</h3>
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
