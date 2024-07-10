import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../iolite/lite.module.scss'

const uspData = [
  {
    title: "Multilingual Support",
    content:
    "The software supports multiple languages, including Hindi, Gujarati, and English. This feature ensures that users from diverse linguistic backgrounds can easily use and navigate the system, making it accessible to a wider audience."
  },
  {
    title: "Streamlined Administrative Tasks",
    content:
    "The School Administrative module is a centralized platform that simplifies administrative tasks. It helps in managing day-to-day administrative activities efficiently, saving time and effort for school administrators."
  },
  {
    title: "Integrated HR Management",
    content:
    "The Human Resource (HR) Management module connects various HR-related tasks seamlessly. It links staff payroll with salary structures and attendance, making it easier for schools to manage their human resources efficiently and accurately."
  },
  {
    title: "Customizable Content Management System (CMS)",
    content:
    "Iolite School Management System includes a Content Management System (CMS) that is <span style=\"color:#f95738 ;\"><strong>100% customizable.</strong></span> This allows schools to manage and update their websites dynamically, ensuring that the information is always current and relevant."
  },
  {
    title: "Finance Management Automation",
    content:
    "The Finance Management module automates financial calculations, including the generation of fee receipts and payment alerts. This automation streamlines financial processes, making it convenient for both administrators and users."
  },
  {
    title: "Attendance Management",
    content:
    "The Attendance Management feature eliminates the manual effort involved in maintaining attendance records. It allows schools to keep digital records of student and staff attendance, reducing errors and ensuring accuracy."
  },
  {
    title: "Library Management",
    content:
    "Iolite School Management Software includes a feature for managing the school library. Librarians can use the software to keep track of all library items, including books that are issued, making library management more efficient and organized."
  },
  {
    title: "Proven Track Record",
    content:
    "<span style=\"color:#f95738 ;\"><strong>With over 20 Plus clients and 5,000 Plus users across India</strong></span>, Iolite School Management Software has a proven track record of successful implementation and user satisfaction. This track record demonstrates the software's reliability and effectiveness."
  },
  {
    title: "Industry-Specific Software Products",
    content:
    "Iolite offers industry-specific software products for both corporates and law firms. These products address specific needs such as Trademark Management, Patent Management, Industrial Design Management, Copyright Management, Litigation Management, Matter Management, and Domain Management."
  },
  {
    title: "Global Presence",
    content:
    "Having offices in the USA and India, Iolite showcases a global presence. This ensures that the software solutions are accessible to a diverse clientele, and the company can cater to the needs of clients on a global scale."
  },
];

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
            <h3 className="mb-3">USP of Iolite School Management Software</h3>
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
