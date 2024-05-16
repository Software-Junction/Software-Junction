import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Tailored Operational Approach",
    content:
      "The emphasis is on avoiding generic or clichéd solutions. Instead, the software is designed to offer bespoke solutions tailored to the unique needs of each client. A ratification process is in place, ensuring that every aspect of the solution aligns with and optimizes the client's business operations.",
  },
  {
    title: "Tech-driven Educational Excellence",
    content:
      "	The software is purpose-built to deliver the highest standards in educational practices, utilizing cutting-edge technology.	A smart and time-saving cloud computing system is integrated into the software, streamlining organizational processes for educational institutions.",
  },
  {
    title: "Safety First",
    content:
      "The software <span style=\"color:#FC5185 ;\"><strong> guarantees a 100% secured environment</strong></span>, prioritizing the long-term safety of students, teachers, and school administrators. Robust data protection measures are implemented to safeguard sensitive information within the system.",
  },
  {
    title: "Feature-Rich Platform",
    content:
      "The platform boasts hundreds of features covering various aspects of school management, ensuring a comprehensive solution for administrators, teachers, and students. Insights derived from these features contribute to informed decision-making and efficient school operations.",
  },
  {
    title: "Seamless Communication Channels",
    content:
      "The software facilitates effortless communication among school stakeholders through various channels, including chat, announcements, and class walls.Smooth operation and interaction are essential for fostering a strong sense of community within the school.",
  },
  {
    title: "Diverse Functionalities Covering All Bases",
    content:
    "The software covers a wide range of functionalities, including admissions, timetable management, attendance tracking, assignments, reports, and more.Specialized tools like transportation management and setup training sessions enhance the overall functionality of the platform."
    },
  {
    title: "Global Presence and Expertise",
    content:
    "With its base in Alexandria, Egypt, the software operates with a global presence, catering to diverse educational landscapes.The customer engagement team leverages global expertise to provide effective support and solutions."
    },
  {
    title: "Simple Informatics Business Model",
    content:
    "The software operates on a clear and simple business model, ensuring that clients receive solutions tailored to their unique needs.The focus is on client satisfaction, with the goal of providing effective and efficient solutions for educational institutions."
    },
];

const renderHTML = (rawHTML) => {
  return React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });
};


const Ischoolusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of iSchool</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["isc-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Ischoolusp;
