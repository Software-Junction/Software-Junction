import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../genipulse-hms/geni.module.scss";

const uspData = [
  {
    "title": "Integrated HMS for Seamless Operations",
    "content": "MocDoc's Integrated Hospital Management System (HMS) serves as a centralized platform that brings together various departments within a healthcare facility. This integration facilitates smooth communication, data sharing, and collaboration among different units, leading to improved overall efficiency and patient care."
  },
  {
    "title": "Accurate Reporting for Informed Decision-Making",
    "content": "MocDoc ensures that all generated reports are accurate and meticulously recorded by the system. This commitment to precision enables healthcare organizations to make informed decisions based on reliable data, contributing to better patient outcomes and operational excellence."
  },
  {
    "title": "Quality Control Enhancement",
    "content": "Leveraging technically advanced features, MocDoc aims to enhance the quality of services provided by healthcare organizations. These features may include tools for monitoring and improving clinical processes, ensuring adherence to quality standards, and ultimately raising the level of healthcare delivery."
  },
  {
    "title": "Advanced Technology Integration",
    "content": "MocDoc's Hospital Information Management System is built on cutting-edge and automated technology. This design allows healthcare organizations to leverage the latest advancements, ensuring that they operate efficiently, stay competitive, and adapt to evolving industry standards."
  },
  {
    "title": "Global Reach and Customization",
    "content": "MocDoc positions itself as a global solution adaptable to hospitals worldwide. The software's flexibility allows for easy customization to meet the specific needs and requirements of diverse healthcare facilities, making it a versatile and scalable solution."
  },
  {
    "title": "Seamless Integration with Existing Systems",
    "content": "MocDoc HMS provides seamless integration with various systems crucial to healthcare operations. This includes Laboratory Information Systems (LIS), Picture Archiving and Communication Systems (PACS), and Electronic Medical Records (EMR), fostering a cohesive and interconnected healthcare ecosystem."
  },
  {
    "title": "Specialized EMR Features",
    "content": "The Visual EMR system in MocDoc offers specialty-wise Electronic Medical Records and Visual Case Sheet options. This feature allows for the creation of follow-up visits while retaining previous data, auto-filling commonly used case sheet information, saving time, and reducing the reliance on paper documentation."
  },
  {
    "title": "Expense Control and Invoice Generation",
    "content": "The system provides detailed control over expenses through features like FSN Analysis. Additionally, MocDoc allows for the generation of invoices for various purposes such as franchising and outsourcing labs. This ensures financial transparency and helps in monitoring and managing costs effectively."
  },
  {
    "title": "Lab Order Management Automation",
    "content": "MocDoc streamlines lab processes with features such as the ability to place orders for samples directly from the application, barcode printing, sample data recording, and integration with lab machines. This automation enhances efficiency, accuracy, and overall automation in the laboratory."
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
            <h3 className="mb-3">USP of GeniPulse Hospital Management Software</h3>
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
