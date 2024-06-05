import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../workable/work.module.scss";

const uspData = [
  {
    "title": "Efficient and Comprehensive Recruiting",
    "content": "Workable enables one-click job posting to <span style=\"color:#FC5185 ;\"><strong>200+ sites,</strong></span> AI-powered sourcing, and employee referrals, streamlining the candidate sourcing and attraction process.The platform manages the entire hiring process, from sourcing to employee onboarding and management, offering a comprehensive solution."
  },
  {
    "title": "Time-Saving Automation",
    "content": "The software automates repetitive tasks, such as scheduling interviews and obtaining approvals, allowing companies to make the best hire in half the time."
  },
  {
    "title": "Custom Onboarding Experience",
    "content": "Workable helps in creating custom onboarding experiences, enabling new hires to e-sign documents and store all employee information in one place."
  },
  {
    "title": "Proven Success Stories",
    "content": "Highlighting success stories from companies like Navarro and Eurobank, showcasing tangible results such as a <span style=\"color:#FC5185 ;\"><strong>50%</strong></span> reduction in time to hire and a <span style=\"color:#FC5185 ;\"><strong>22%</strong></span> increase in application rates."
  },
  {
    "title": "Global Reach and Support",
    "content": "Workable connects with LinkedIn, Google, and <span style=\"color:#FC5185 ;\"><strong>70+</strong></span> other apps, making it a globally accessible platform.Fast and award-winning support with a quick response time of about <span style=\"color:#FC5185 ;\"><strong>25 seconds</strong></span> by phone or chat."
  },
  {
    "title": "Trusted Security and Compliance",
    "content": "ISO certification ensures data security, providing peace of mind for users.Workable helps companies ensure compliance with regulations in the hiring process."
  },
  {
    "title": "Expert Advice and Resources",
    "content": "Workable offers expert advice through thousands of hiring templates and tutorials, supporting users in making informed decisions."
  },
  {
    "title": "Free Trial for Exploration",
    "content": "Encouraging potential users to explore the full platform with a <span style=\"color:#FC5185 ;\"><strong>15-day free trial,</strong></span> emphasizing confidence in the product's capabilities."
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
            <h3 className="mb-3">USP of Workable</h3>
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
