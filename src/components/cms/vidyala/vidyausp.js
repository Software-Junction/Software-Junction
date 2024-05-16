import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "22+ Years of Expertise",
    "content": "<span style=\"color:#FC5185 ;\"><strong>With over 22 years of expertise,</strong></span> Vidyalaya brings a wealth of experience to the table. The product is a result of continuous refinement and adaptation to the evolving needs of educational institutions."
  },
  {
    "title": "Global Client Base",
    "content": "Vidyalaya boasts a global client base of<span style=\"color:#FC5185 ;\"><strong> 1600+ educational institutions.</strong></span> This widespread adoption signifies the system's reliability, effectiveness, and adaptability to diverse educational environments."
  },
  {
    "title": "Integrated School Management Software",
    "content": "Vidyalaya provides a customized school management software that integrates various features, including biometric attendance, SMS communication, online portal, e-exams, mobile apps, and more. This integration streamlines processes for seamless management."
  },
  {
    "title": "Mobile Apps for All",
    "content": "The inclusion of School App, Parent App, and Management App ensures that the entire school community has access to relevant information on their mobile devices. This enhances communication and accessibility."
  },
  {
    "title": "WhatsApp Integration",
    "content": "Vidyalaya recognizes the importance of modern communication tools and introduces WhatsApp for Education. Integrating social media applications like WhatsApp contributes to improved communication with parents."
  },
  {
    "title": "Client Retention",
    "content": "Vidyalaya prides itself on a remarkable 96% client retention rate, indicating high satisfaction and trust among its user base."
  },
  {
    "title": "Awards and Recognition",
    "content": "Vidyalaya has received multiple awards, including the Best Digital Transformation in Education, Most Innovative School Management ERP, and Education Excellence Award. These accolades highlight its excellence in the education technology sector."
  },
  {
    "title": "Proven Success Stories",
    "content": "The success stories of prestigious institutions such as Navrachana School, Nirma Vidyavihar, L.P Savani Group Of Schools, Bright International School, and KSVK Group Of Schools showcase Vidyalaya's positive impact on diverse educational setups."
  }
];
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Vidyausp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Vidyalaya School ERP</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["vid-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Vidyausp;
