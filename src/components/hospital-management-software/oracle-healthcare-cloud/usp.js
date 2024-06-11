import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../oracle-healthcare-cloud/ora.module.scss";

const uspData = [
  {
    "title": "Healthcare Cloud Infrastructure",
    "content": "OCI is designed to run every healthcare workload, from legacy systems to modern, data-science-driven and machine-learning-enabled services. It facilitates collaboration and insights across various systems, data, and application siloes in the healthcare sector."
  },
  {
    "title": "Multicloud Adoption Acceleration",
    "content": "According to a report by <span style=\"color:#f95738 ;\"><strong>451</strong></span> Research, the COVID-19 pandemic accelerated cloud infrastructure and multicloud adoption. OCI enables innovation and cost optimization in healthcare through its cloud services."
  },
  {
    "title": "AI Vision and Drones for Inventory Management",
    "content": "IT professionals can apply AI services to inventory management, automating business workflows in healthcare settings. This showcases Oracle's commitment to leveraging emerging technologies for operational efficiency."
  },
  {
    "title": "Patient-Focused Healthcare Experience",
    "content": "OCI helps organizations capture and analyze data holistically from disparate sources, aiming to provide a predictive, preventive, personalized, and participative patient experience. Focus on improving patient outcomes and delivering quality care in a competitive healthcare landscape."
  },
  {
    "title": "Rapid Application Development and Prototyping",
    "content": "Enables the rapid building and prototyping of new minimum viable product applications using Oracle's Application Express (Apex). Easily integrates with datasets, data models, and analyses for adapting to changing research, outcomes, and environmental conditions."
  },
  {
    "title": "Data Science Platform on OCI",
    "content": "Organizations can ingest and consolidate data across the enterprise and third-party integrations. Leverages autonomous systems, allowing the development of critical data science models and algorithms for gaining valuable insights."
  },
  {
    "title": "Cloud Migration for Healthcare Applications",
    "content": "OCI supports the seamless migration of healthcare applications like Epic and Cerner to the cloud without rearchitecting, ensuring control and visibility. Oracle Cloud VMware Solution facilitates running Electronic Health Record (EHR) applications in the cloud."
  },
  {
    "title": "Security and Compliance",
    "content": "OCI undergoes regular independent third-party audits, ensuring compliance with industry standards such as ISO <span style=\"color:#f95738 ;\"><strong>27000</strong></span> series, SOC, HDS, HIPAA, and HITRUST. Emphasis on data security and patient privacy in healthcare operations."
  },
  {
    "title": "Customer Success Stories",
    "content": "Highlighting successful implementations in healthcare, such as Adventist Health, Hospital Order of San Juan de Dios, Manchester University NHS Foundation Trust, National Pharmacies, and Prosperdtx."
  },
  {
    "title": "Free Tier and Oracle Cloud Lift Services",
    "content": "Offers a Free Tier for building, testing, and deploying applications on Oracle Cloud. Oracle Cloud Lift Services provide guidance from cloud engineers for planning, architecting, prototyping, and managing cloud migrations."
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
            <h3 className="mb-3">USP of Oracle Healthcare Cloud</h3>
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
