import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../keka/keka.module.scss";

const uspData = [
  {
    "title": "People Management",
    "content": "Keka serves as a complete people enabler, encompassing various HR processes. It facilitates the automation of tasks ranging from payroll management to the creation of an engaged company culture. This holistic approach ensures that all aspects of managing personnel are covered within a single platform."
  },
  {
    "title": "Recognition and Awards",
    "content": "The software has been recognized and awarded as the Best HR and Payroll Software by the World HRD Congress. This accolade emphasizes Keka's excellence and effectiveness in providing solutions for human resources and payroll management."
  },
  {
    "title": "Performance and Culture Enhancement",
    "content": "The software contributes to building a culture of high-performance teams. This is achieved through features like contextual feedback and alignment with organizational goals. By fostering a positive work culture, Keka aims to contribute to the overall scalability and success of businesses."
  },
  {
    "title": "Remote Hiring and Onboarding",
    "content": "Acknowledging the changing nature of work, Keka facilitates the hiring and onboarding of talent remotely. This is crucial in times where remote work is prevalent. The integrated platform ensures that essential HR functions related to recruitment and onboarding can be seamlessly conducted regardless of physical location."
  },
  {
    "title": "Industry-Focused Solutions",
    "content": "Keka offers industry-specific Human Capital Management (HCM) software tailored to the unique needs of different sectors. This includes technology and services, pharma and manufacturing, banks and financial services, and retail. Industry-focused solutions ensure that the software is aligned with the specific requirements of diverse businesses."
  },
  {
    "title": "Scalability",
    "content": "Keka is favored by companies of varying sizes, ranging from <span style=\"color:#FC5185 ;\"><strong>20 to 20,000 employees.</strong></span> This indicates the software's scalability, catering to the needs of small businesses as well as large enterprises. The ability to scale ensures that Keka can grow alongside the evolving requirements of its user base."
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
            <h3 className="mb-3">USP of Keka</h3>
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
