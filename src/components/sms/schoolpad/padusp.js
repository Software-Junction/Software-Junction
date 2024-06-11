import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Parental Involvement",
    "content": "SchoolPad recognizes the importance of involving parents in the educational journey. The software facilitates better communication between parents and teachers, creating a transparent and collaborative environment that supports the student's overall development."
  },
  {
    "title": "Proven Track Record",
    "content": "With over <span style=\"color:#f95738 ;\"><strong>8000 educators</strong></span> using SchoolPad daily, the software has a proven track record of reliability and trust within the education community. This user base demonstrates its widespread acceptance and adoption by educational institutions."
  },
  {
    "title": "Data Management and Progress Tracking",
    "content": "The software enables educators to efficiently organize and manage student data. It provides tools for tracking and monitoring student progress, ensuring that educators can make data-driven decisions to enhance the learning experience."
  },
  {
    "title": "Powerful Features",
    "content": "SchoolPad's School Management Software offers a suite of powerful features. These include managing pre-admission inquiries, student data, attendance, examinations, result generation, report cards, online fee transactions, and customization of documents and certificates."
  },
  {
    "title": "Quantifiable Results",
    "content": "The software boasts impressive numbers, including<span style=\"color:#f95738 ;\"><strong> 5,00,000+</strong></span> updates shared with parents, <span style=\"color:#f95738 ;\"><strong>1,11,000+</strong></span> parent-teacher conversations, <span style=\"color:#f95738 ;\"><strong>1,50,000+</strong></span> managed student profiles, <span style=\"color:#f95738 ;\"><strong>1,00,000+</strong></span> report cards generated, and <span style=\"color:#f95738 ;\"><strong>45,000+</strong></span> online fee transactions. These statistics showcase the software's impact and efficiency."
  },
  {
    "title": "Wide Adoption",
    "content": "Over <span style=\"color:#f95738 ;\"><strong>300 schools</strong></span> choosing SchoolPad's School Management Software reflects its widespread adoption within the education sector. This suggests that schools across different regions and educational levels find value in the software."
  },
  {
    "title": "Customization",
    "content": "The ability to manage and print custom documents and certificates highlights the software's flexibility. Schools can tailor the system to meet their specific needs, accommodating different administrative processes and requirements."
  }
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Padusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of SchoolPad</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["pad-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Padusp;
