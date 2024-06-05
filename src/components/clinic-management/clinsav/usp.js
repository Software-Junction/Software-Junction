import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../clinsav/clinsav.module.scss";

const uspData = [
  {
    "title": "Ultimate Security and Control",
    "content": "Keep your patient data on your device only, ensuring maximum security. Limited view access for staff, ensuring confidentiality. Secure in-built financial access, providing control over clinic spends and earnings."
  },
  {
    "title": "Seamless Patient Management",
    "content": "Easily digitize patient information with in-built or custom diagnosis groupings. Real-time synchronization of patient and appointment data with staff. Instant access to full patient history for efficient case paper management."
  },
  {
    "title": "Flexible Appointment Tracking",
    "content": "Track daily appointments effortlessly with a one-click monthly view. Send SMS appointment reminders to patients for better attendance. Manage appointments online or offline, providing flexibility anytime, anywhere."
  },
  {
    "title": "Effortless Case Paper Handling",
    "content": "Enjoy flexibility in typing, recording, or capturing case papers. Single view of visits and payments summary for quick reference. Customize case papers to meet the specific needs of your clinical practice."
  },
  {
    "title": "Innovative Staff Collaboration",
    "content": "Real-time synchronization with staff for efficient clinic management. InterCom feature to communicate seamlessly with staff within the app. Smart-assist and voice-assist features for optimized user experience."
  },
  {
    "title": "Multi-Clinic Digitization",
    "content": "Digitize multiple clinics with a one-time setup for clinic times and letterheads. Stay assured with fully automated data backups on your Google Drive. Future-ready features for ongoing advancements in healthcare technology."
  },
  {
    "title": "Exclusive Benefits for Early Adopters",
    "content": "Join <span style=\"color:#FC5185 ;\"><strong>'The Golden 200'</strong></span> club for exclusive updates and special benefits. Early adopters receive priority access to new features and improvements."
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
            <h3 className="mb-3">USP of ClinSav</h3>
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
