import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Comprehensive Integration",
    content:
    "VClassrooming stands out as an integrated software solution that seamlessly combines Learning Management System (LMS) and Enterprise Resource Planning (ERP). This holistic approach ensures that all aspects of campus management, from teaching and learning to administrative processes, are unified under a single, efficient platform."
    },
  {
    title: "Flexibility in Learning",
    content:
    "VClassrooming promotes learning anytime, anywhere, and at the learner's own pace. The Learning Management System encourages students to engage with educational content beyond the confines of the classroom, fostering better learning outcomes and higher student engagement."
    },
  {
    title: "Discussion-Oriented Approach",
    content:
    "The LMS component encourages discussion-oriented learning, promoting active participation and collaborative engagement among students. This feature enhances the overall learning experience and facilitates meaningful interactions among the educational community."
    },
  {
    title: "Affordability and Scalability",
    content:
    "The software offers unlimited user access without compromising affordability. With no limits on the number of student, teacher, and parent logins, VClassrooming provides a scalable solution that caters to institutions of all sizes without additional financial burden."
    },
  {
    title: "Security and Privacy",
    content:
    "VClassrooming prioritizes the security of sensitive information with a secured <span style=\"color:#f95738 ;\"><strong> 128-bit encryption system.</strong></span> This commitment to data protection ensures a safe and trusted environment for all users, instilling confidence in both educational institutions and their stakeholders."
    },
  {
    title: "Extensive Reporting and Customization",
    content:
    "The software provides powerful and robust tools for reporting and campus management. Its customization capabilities empower educational institutions to tailor the system according to their unique needs, ensuring flexibility and adaptability."
    },
  
];

const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Vclassusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of VClassrooming</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["vcl-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Vclassusp;
