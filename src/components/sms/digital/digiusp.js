import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "School Management Solution",
    "content": "DIGITAL SCHOOL WEB SOLUTION stands out as a comprehensive and integrated school management software addressing a wide range of modern school administration challenges."
  },
  {
    "title": "Customizable Online Presence",
    "content": "The software provides schools with a free school website, giving them a global presence and showcasing their existence to the world, thus enhancing their visibility and reputation."
  },
  {
    "title": "Mobile App for Seamless Communication",
    "content": "Schools using DIGITAL SCHOOL SOFTWARE benefit from a customized mobile app facilitating effective communication between the school and parents or other stakeholders."
  },
  {
    "title": "E-Library with Extensive Study Materials",
    "content": "A notable feature is the extensive e-library, offering a vast collection of e-books aligned with the curriculum, enriching the learning experience for students."
  },
  {
    "title": "Accurate Result Generation",
    "content": "The software ensures error-free result checking every term and automated annual result generation, providing reliable and efficient academic performance tracking."
  },
  {
    "title": "Free Computer-Based Testing (CBT)",
    "content": "The inclusion of a free mobile-compatible Computer-Based Testing (CBT) system helps students perform better in external exams, contributing to their academic success."
  },
  {
    "title": "Science Simulation for Practical Learning",
    "content": "DIGITAL SCHOOL SOFTWARE enhances the learning experience in science subjects by offering simulated practicals, making abstract concepts more tangible for students."
  },
  {
    "title": "Free Bulk SMS and Email Services",
    "content": "Schools benefit from integrated communication tools, including free bulk SMS and email services, facilitating efficient communication with students, parents, and staff."
  },
  {
    "title": "JAMB CBT Testing Integration",
    "content": "The software integrates JAMB CBT testing, catering to the needs of schools preparing students for standardized examinations."
  },
  {
    "title": "Cost-Effective Implementation",
    "content": "One of the standout features is the cost-free implementation, covering design, development, deployment, staff training, computer lab setup, and ongoing support, making it an attractive and affordable solution for schools."
  }
];
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Digiusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Digital School Web Solution</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["dig-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Digiusp;
