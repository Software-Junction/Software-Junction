import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../strategic-erp/strategic-erp.module.scss";

const uspData = [
  {
    "title": "End-to-End Process Automation",
    "content": "StrategicERP offers a comprehensive software solution that automates and manages processes from start to end in the Real Estate, Construction, and Infrastructure industries. This includes project lifecycle management and tailored ERP solutions."
  },
  {
    "title": "Developed with Artificial Intelligence (AI)",
    "content": "The software leverages the power of Artificial Intelligence for planning daily business activities, setting reminders, and providing crucial information for meetings. This AI integration enhances user-friendliness and responsiveness, contributing to efficient decision-making."
  },
  {
    "title": "Absolute Customization and Unmatched Service",
    "content": "Recognizing the uniqueness of each business, StrategicERP offers solutions that are highly customizable to meet specific needs. The company emphasizes personalized service, from consultation to successful implementation, aiming to cater to all client requirements."
  },
  {
    "title": "Digital Media Integration",
    "content": "The software facilitates complete integration with digital media, recognizing the importance of digital presence in today's business landscape. This integration allows businesses to leverage digital media to its maximum capacity."
  },
  {
    "title": "Business Process Automation",
    "content": "StrategicERP incorporates Business Process Automation, a revolutionary technology that saves time, reduces labor, and minimizes human error by automating routine tasks."
  },
  {
    "title": "Recognized Awards and Accolades",
    "content": "StrategicERP has received awards and accolades <span style=\"color:#f95738 ;\"><strong> since 2005 </strong></span>, highlighting its excellence in various business verticals. The emphasis is on customer satisfaction and gratitude, driving continuous improvement and software upgrades."
  },
  {
    "title": "Wide Industry Coverage",
    "content": "The software caters not only to Real Estate and Construction but also extends its solutions to Infrastructure, Manufacturing, and other industries, showcasing versatility and applicability across diverse business domains."
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
            <h3 className="mb-3">USP of Strategic ERP</h3>
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
