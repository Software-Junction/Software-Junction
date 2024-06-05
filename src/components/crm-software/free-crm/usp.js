import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../free-crm/free.module.scss'

const uspData = [
  {
    "title": "Free Forever",
    "content": "Cogmento offers a powerful cloud-based CRM software for free, allowing businesses to manage every aspect efficiently."
  },
  {
    "title": "Integration Capabilities",
    "content": "Seamlessly integrate with popular platforms like Zapier, WhatsApp Business, Facebook, Twitter, Google, and QuickBooks for enhanced functionality."
  },
  {
    "title": "Hosted on Amazon AWS",
    "content": "Enjoy secure and fast data hosting worldwide through Amazon AWS, ensuring the safety of your information."
  },
  {
    "title": "Marketing Campaigns",
    "content": "Develop targeted marketing campaigns based on customer profiles and history, utilizing email, print, SMS, and calling features to enhance lead generation."
  },
  {
    "title": "Task & Event Tracking",
    "content": "Track tasks, issues, and sales to gain complete visibility into your team's activities, improving organization and responsiveness."
  },
  {
    "title": "CRM Lead Forms",
    "content": "Create customizable forms, questionnaires, and surveys to gather customer feedback and input data efficiently."
  },
  {
    "title": "Import & Export",
    "content": "Easily import and export data, supporting various file formats, making data migration and management hassle-free."
  },
  {
    "title": "Mobile iOS & Android Apps",
    "content": "Access Free CRM on phones and tablets with dedicated iOS and Android apps, ensuring convenience and flexibility."
  },
  {
    "title": "Group Calendar",
    "content": "Manage schedules, tasks, and activities with a group calendar, facilitating better coordination and organization."
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
            <h3 className="mb-3">USP of Free CRM</h3>
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
