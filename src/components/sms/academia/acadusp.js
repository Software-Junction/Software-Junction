import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Academia SMS is positioned as a versatile system",
    "content": "serving as a K12 Student Information System, a complete School Management System, and a resource planner. This three-fold advantage indicates that the software is designed to address various aspects of educational institutions, ensuring a holistic solution."
  },
  {
    "title": "Process Automation",
    "content": "The software boasts a substantial reduction<span style=\"color:#f95738 ;\"><strong> (10 times)</strong></span> in human intervention across institutional operations. This includes key areas like admissions, attendance tracking, examination processes, and student management. The emphasis is on automating routine tasks to enhance efficiency and reduce manual effort."
  },
  {
    "title": "Enhanced Parent Experience",
    "content": "Academia SMS focuses on improving the experience for parents. This is achieved through features such as unhindered communication channels, real-time student performance reports, a dedicated parent portal, and a mobile app. The goal is to facilitate seamless and transparent communication between parents and the school."
  },
  {
    "title": "Integration and Interoperability",
    "content": "The system highlights ease of integration and interoperability with various applications. This includes Learning Management Systems (LMS), accounting software, payment gateways, KOHA, and even communication tools like WhatsApp. The emphasis is on creating a unified experience by connecting different software seamlessly."
  },
  {
    "title": "Configurability",
    "content": "Academia SMS is described as highly dynamic and configurable. Users have the flexibility to tailor the system to meet their specific needs. This involves adding custom fields on the academia screen, defining workflows, and creating document templates. The emphasis is on adaptability to accommodate diverse institutional requirements."
  },
  {
    "title": "Interconnected Management",
    "content": "Academia SMS provides multi-center capability, enabling the management of either a single campus or a group of institutions from one central system. It includes a complete decision support system with multiple report generation capabilities, promoting efficient and interconnected management."
  },
  {
    "title": "Global Presence",
    "content": "Academia SMS is not limited to a specific region but has a global presence. It serves educational institutions in various countries, including Botswana, Ghana, India, Indonesia, the USA, UK, UAE, and more. This global reach indicates the software's adaptability to diverse educational contexts."
  }
  
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Acadusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Academia</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["aca-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Acadusp;
