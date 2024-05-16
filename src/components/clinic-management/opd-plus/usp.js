import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Streamlined Operations",
    "content": "<strong>USP:</strong> Integration of front desk with all hospital departments for efficient communication and streamlined billing activities.<br/> <strong>Highlight:</strong> Centralized hub for communication and billing, reducing response time and ensuring smooth operations."
  },
  {
    "title": "Automated Appointment System",
    "content": "<strong>USP:</strong> Streamlined patient appointments with automatic reminders, follow-up scheduling, and queue management.<br/><strong> Highlight:</strong> Enhance patient experience with hassle-free appointment scheduling and reduce no-shows with automated reminders."
  },
  {
    "title": "Digital Prescription and Medical Record Access",
    "content": "<strong>USP:</strong> Automatic generation of digital prescriptions and quick access to previous medical records for efficient healthcare delivery.<br/> <strong>Highlight:</strong> Empower doctors with a digital prescription system and instant access to patient medical history for informed decision-making."
  },
  {
    "title": "User-Friendly Interface",
    "content": "<strong>USP:</strong> Intuitive and user-friendly interface for easy navigation and quick adoption.<br/> <strong>Highlight:</strong> Enhance user experience for both staff and administrators, ensuring smooth operation and reduced learning curves."
  },
  {
    "title": "Multi-User and Multi-Location Support",
    "content": "<strong>USP:</strong> Scalability with support for multiple users, doctors, and departments, catering to both individual practices and large healthcare organizations.<br/> <strong>Highlight:</strong> Adapt to the size and needs of the healthcare facility, making it suitable for clinics as well as large, multi-location hospitals."
  },
  {
    "title": "Real-Time Updates and Alerts",
    "content": "<strong>USP:</strong> Real-time updates for patient registrations and appointments, minimizing the risk of double booking.<br/> <strong>Highlight:</strong> Ensure accurate scheduling and eliminate the possibility of errors with immediate updates on patient bookings."
  },
  {
    "title": "Customization and Integration Options",
    "content": "<strong>USP:</strong> Flexibility for customization and integration with existing systems. <br/><strong>Highlight:</strong> Tailor the software to specific needs and integrate seamlessly with other systems, ensuring compatibility and adaptability."
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
            <h3 className="mb-3">USP of OPD PLUS Management Software</h3>
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
