import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Smart Communication Hub",
    "content": "The platform prioritizes transparent and effective communication through its Smart Notification system, ensuring seamless interaction among parents, students, teachers, and school faculty."
  },
  {
    "title": "Strategic Admissions and Growth Analytics",
    "content": "Schoolknot recognizes the importance of school growth, beginning with a robust Admission Management system that incorporates analytics, facilitating strategic decision-making for the institution."
  },
  {
    "title": "Financial Management Excellence",
    "content": "The platform excels in financial management, offering features such as smart fee reminders, online and offline fee collection, detailed collection reports, and comprehensive expense management."
  },
  {
    "title": "Efficient Multi-Branch Management",
    "content": "Ideal for franchises or institutions with multiple branches, Schoolknot streamlines management tasks, allowing schools to oversee everything in one unified platform."
  },
  {
    "title": "Advanced Library Management",
    "content": "The Library Management System enables students to check book availability, receive due reminders, and more through the convenience of the parent mobile app."
  },
  {
    "title": "Attendance Made Easy",
    "content": "Beyond traditional attendance marking, Schoolknot simplifies absenteeism management, allowing easy viewing and editing of attendance records from PCs or mobile devices."
  },
  {
    "title": "Holistic School Branding",
    "content": "In addition to the mobile application, Schoolknot supports schools in building their brand online, enhancing visibility and engagement in the digital realm."
  },
  {
    "title": "Data Security Assurance",
    "content": "Schoolknot prioritizes the security of user data through a robust SSL certified portal and trusted payment gateway integration, ensuring zero percent loss of school data and financial information."
  }
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Knotusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of SchoolKnot</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["knt-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Knotusp;
