import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../orataro/ora.module.scss";

const uspData = [
  {
    "title": "Extensive Network",
    "content": "The platform is currently connected with <span style=\"color:#f95738 ;\"><strong>900 institutes.</strong></span> This signifies a wide network of educational institutions that are utilizing ORATARO for monitoring and improving their performance. The extensive network implies a level of trust and adoption within the education sector."
  },
  {
    "title": "Skilled Teaching Staff",
    "content": "ORATARO boasts a team of <span style=\"color:#f95738 ;\"><strong> 23,500 highly skilled teachers.</strong></span> This emphasizes the quality of education provided through the platform. The dedication of these teachers to each student suggests a personalized and attentive approach to teaching, which can contribute to better learning outcomes."
  },
  {
    "title": "Large Student Base",
    "content": "<span style=\"color:#f95738 ;\"><strong>With 650,000 enrolled students,</strong></span> ORATARO attracts a significant user base. The mention of \"smart study\" features indicates that the platform incorporates intelligent and effective learning methodologies. Live updates on class activities, circulars, and homework keep parents informed and engaged in their child's education."
  },
  {
    "title": "Advanced Digital Education Framework",
    "content": "ORATARO positions itself as an advanced framework for digital education systems. This suggests that the platform is built on modern technologies and methodologies, ensuring it stays abreast of the latest trends and innovations in educational technology."
  },
  {
    "title": "Global Team of Specialists",
    "content": "ORATARO is supported by a group of passionate IT and education specialists based worldwide. This global team suggests a diverse range of expertise and perspectives. The combination of IT specialists and education professionals indicates a concerted effort to bring together technological innovation and educational best practices."
  },
  {
    "title": "Variety of Products",
    "content": "ORATARO offers a range of products, including ORATARO Classroom, ORATARO ERP, ORATARO LMS, and ORATARO Live Class. Each product likely serves a specific purpose within the education ecosystem. For example, ORATARO Classroom may focus on in-class interactions, while ORATARO ERP might handle administrative tasks. This variety allows institutions to choose and customize solutions based on their specific needs."
  }
  
  
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of ORATARO</h3>
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
