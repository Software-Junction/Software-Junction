import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../karexpert/kare.module.scss";

const uspData = [
  {
    "title": "Healthcare Solution",
    "content": "KareXpert's EMR/EHR Software offers a complete healthcare solution that includes Electronic Medical Records (EMR), Electronic Health Records (EHR), Virtual Care, Laboratory Information Management System (LIMS), Radiology Information System/Picture Archiving and Communication System (RIS/PACS), Pharmacy Management, Connected Ambulance, and more. This comprehensive suite of services ensures that healthcare providers have all the tools they need within a unified platform."
  },
  {
    "title": "Efficient Workflow Automation",
    "content": "KareXpert's EMR/EHR Software incorporates hyper-coordinated workflows, enabling a seamless transition to digital healthcare. Automation features include progress reports, medical record department management, medicinal and clinical order management, diet plan management, and clearance status monitoring. This reduces paperwork, streamlines operations, and ensures timely and accurate patient care."
  },
  {
    "title": "Specialized Templates for Different Specialties",
    "content": "The software includes built-in templates tailored to different medical specialties. This specialization empowers healthcare teams to process patient data efficiently, ensuring that the software is adaptive to the diverse needs of various medical practitioners."
  },
  {
    "title": "Cost-Effective Cloud-First Approach",
    "content": "KareXpert emphasizes a Cloud-first/mobile-first approach, which can significantly reduce operational costs in healthcare facilities. By digitizing medical records, the software minimizes manual errors, reduces paper trails, and ensures that doctors have instant access to critical patient information."
  },
  {
    "title": "Global Reach and Scalability",
    "content": "KareXpert's reach extends globally, with a presence in India, Southeast Asia, the Middle East, Africa, Europe, the US, and North America. The software is designed to scale and adapt to different healthcare environments, making it suitable for diverse regions and healthcare settings."
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
            <h3 className="mb-3">USP of KareXpert's EMR/EHR Software</h3>
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
