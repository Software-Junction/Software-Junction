import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Free Support for School Setup",
    "content": "We understand the challenges of transitioning to a digital platform. That's why Savischools offers free support to guide you through the setup process, ensuring a seamless transition for your institution."
  },
  {
    "title": "Free Migration of Student Records",
    "content": "Leave the data migration to us. Savischools offers a hassle-free process to migrate your student records, making the shift from traditional record-keeping methods to our digital platform smooth and efficient."
  },
  {
    "title": "Free Integration with Biometric System",
    "content": "Prioritize security and streamline attendance tracking with our biometric system integration, offered at no additional cost. Enhance the safety of your school environment with this seamless feature."
  },
  {
    "title": "K-12 ERP Integration",
    "content": "Experience a holistic approach to school management. Savischools integrates Campus, Teachers, Students, and Parents into one comprehensive ERP system, tailored specifically for K-12 schools."
  },
  {
    "title": "Online Portals for Parents and Students",
    "content": "Stay informed at all times. Our online portals for parents and students offer key features, including information on grades, assignments, attendance, behavior, schedules, courses, and payment processes."
  },
  {
    "title": "Secure Online Payments",
    "content": "Simplify financial transactions. Savischools offers a secure and safe online payment processing system, providing the easiest way to manage payments for your educational institution."
  }
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Saviusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Savischools</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["sav-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Saviusp;
