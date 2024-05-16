import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Time-Saving Features",
    "content": "The software emphasizes time efficiency with simplified appointment booking, rescheduling, and cancellation through an integrated calendar. Automated reminders reduce no-shows, and the calendar sync feature enhances the overall scheduling experience."
  },
  {
    "title": "Multi-Clinic Management",
    "content": "Lybrate enables doctors to manage multiple clinics, visiting consultants, and users with distinct roles and privileges. This feature allows practitioners to focus on enhancing their practice while Lybrate takes care of administrative tasks."
  },
  {
    "title": "Data Security",
    "content": "The software ensures the security of patient data by using Amazon Cloud servers for storage, employing encryption techniques, and providing control over access to financial information. This reassures doctors about the confidentiality of sensitive information."
  },
  {
    "title": "Patient Communication",
    "content": "Lybrate facilitates easy communication with patients through configurable reminders, birthday SMS, and clinic announcements. It even supports SMS communication in various regional languages, catering to a diverse patient demographic."
  },
  {
    "title": "Smart Patient Connect",
    "content": "Lybrate enhances patient-doctor connectivity by allowing the upload and sharing of data on the platform. Patients can view their documents, and doctors can seamlessly communicate with patients, fostering a collaborative healthcare approach."
  },
  {
    "title": "Intelligent Reporting",
    "content": "The software simplifies reporting with an easy-to-use dashboard and a smart reporting system. This feature aids in analysis, saving time for doctors and improving decision-making."
  },
  {
    "title": "Customized Invoicing",
    "content": "Lybrate streamlines billing processes with customized invoicing, eliminating the challenges associated with paper records. This adds a level of professionalism and efficiency to the financial aspects of clinic management."
  },
  {
    "title": "Social Media Integration",
    "content": "Lybrate allows doctors to synchronize their social media platforms, enabling single-click posting and centralized management of social media activities. This feature helps doctors stay active and engaged on various platforms effortlessly."
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
            <h3 className="mb-3">USP of Lybrate</h3>
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
