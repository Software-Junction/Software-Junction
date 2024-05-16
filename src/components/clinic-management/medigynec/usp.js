import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Time and Cost Efficiency",
    "content": "The application is designed to save time and cut costs for gynecologists by efficiently managing workflows, including administrative operations and clinical management."
  },
  {
    "title": "Preloaded Templates",
    "content": "The application comes with preloaded templates and a mature feature list, allowing healthcare professionals to spend more time with patients and less on paperwork."
  },
  {
    "title": "Specialized Modules for Women's Health",
    "content": "The solution provides advanced modules that address complex women's reproductive health, covering a range of healthcare needs from chronic to acute clinical conditions and preventative care to pregnancies."
  },
  {
    "title": "Electronic Gestational Age Assignment",
    "content": "The system offers instant access and a comprehensive linear view of patient healthcare records, with electronic gestational age assignment that summarizes Last Menstrual Period (LMP) dates, ultrasound estimates, and clinical exams."
  },
  {
    "title": "Structured Approach to Clinical Intelligence",
    "content": "The software provides a structured approach to actionable clinical intelligence, chart/record requests, and clinical audits, enhancing overall efficiency and patient care outcomes."
  },
  {
    "title": "Actionable Reports and Analytics",
    "content": "Users can generate actionable reports on patients to evaluate outcomes for various procedures such as Hormone Replacement Therapy (HRT), pap smears, and upcoming deliveries."
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
            <h3 className="mb-3">USP of MedigyneC Gynecology Hospital Management System</h3>
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
