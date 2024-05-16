import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Employee-Centric Approach",
    "content": "The software is designed with a focus on improving the overall experience of employees throughout their entire lifecycle within the organization.This includes the hiring process, onboarding, day-to-day work activities, performance management, and support through to retirement.The goal is to create a sense of community where individuals feel valued and heard, fostering a positive workplace culture."
  },
  {
    "title": "AI-Embedded Infrastructure",
    "content": "Oracle Fusion Cloud HCM incorporates artificial intelligence into its infrastructure.This AI integration is intended to streamline various HR processes, making them more efficient and less time-consuming.The mention of \"generative AI assistance\" implies that the AI capabilities go beyond automation to provide proactive support and insights to users."
  },
  {
    "title": "Global Workforce Management",
    "content": "The software is equipped to handle the complexities of managing a global workforce.It allows organizations to plan, manage, and optimize their people processes on a global scale, using a centralized and common data source.This feature enables better decision-making, personalization of employee experiences, and the ability to scale operations internationally."
  },
  {
    "title": "Modular Adoption",
    "content": "The software is designed to be adopted in stages, particularly suitable for mid-enterprise organizations.This modular approach allows organizations to implement the solutions gradually as they grow, preventing disruption and providing flexibility in adapting to evolving needs."
  },
  {
    "title": "Recognition as a Leader",
    "content": "Gartner has consistently recognized Oracle as a leader in cloud HCM for eight consecutive years.This recognition is based on Gartner's Magic Quadrant, where Oracle is positioned furthest to the right in terms of \"Completeness of Vision,\" indicating a strong strategic direction and innovation."
  },
  {
    "title": "Oracle ME Employee Experience Platform",
    "content": "Oracle ME is a comprehensive platform that unifies various aspects of employee experience.It includes features such as employee outreach, guided workflows, learning opportunities, peer-to-peer recognition, continuous engagement tools, and interactive workforce directories.These features contribute to a holistic and personalized employee experience, enhancing communication and collaboration within the organization."
  },
  {
    "title": "Proven Success Stories",
    "content": "The content provides specific examples of organizations like JP Morgan Chase, Adventist Health, and others that have successfully implemented and benefited from Oracle Cloud HCM.These success stories serve as real-world evidence of the software's effectiveness and its positive impact on diverse businesses."
  },
  {
    "title": "Focus on Security",
    "content": "While not explicitly mentioned in the content, being a cloud-based solution from a major enterprise like Oracle implies a strong emphasis on security.Security practices are crucial in handling sensitive HR data, ensuring compliance with data protection regulations, and building trust among users."
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
            <h3 className="mb-3">USP of Oracle Fusion Cloud HCM</h3>
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
