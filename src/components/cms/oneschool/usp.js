import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../oneschool/one.module.scss'

const uspData = [
  {
    title: "Self-Directed Learning (SDL)",
    content:
      "The software supports a self-directed learning approach, emphasizing student initiative and responsibility for their learning.",
  },
  {
    title: "Learning to Learn Framework",
    content:
      "The software incorporates a framework designed for the OneSchool network, focusing on assignments, lessons, and study to promote self-directed learning and collaboration among teachers and students.",
  },
  {
    title: "Learning Environments - Learning Centres",
    content:
      "The software facilitates the concept of Learning Centres, offering a flexible and collaborative space equipped with various learning zones and resources.",
  },
  {
    title: "Digital Literacy",
    content:
      "The software recognizes the importance of digital literacy, providing a technology-rich learning environment with tools like video conferencing, student laptops, online classrooms, and educational programs.",
  },
  {
    title: "Global Network",
    content:
      "The software supports a global network of schools and campuses, fostering collaboration among teachers and students across different regions.",
  },
  {
    title: "Teacher Training Program",
    content:
      "There is an in-house teacher academy providing a comprehensive teacher training program, emphasizing technology and teaching innovation.",
  },
  {
    title: "Quality Teachers and Small Class Sizes",
    content:
      "The software focuses on recruiting and retaining quality teachers, offering competitive remuneration, good student discipline, proven academic performance, and small class sizes.",
  },
  {
    title: "Parent and Community Engagement",
    content:
      "The software helps in building strong relationships with parents and the community, ensuring support and engagement in campus life and students' learning.",
  },
];

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
            <h3 className="mb-3">USP of OneSchool</h3>
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
