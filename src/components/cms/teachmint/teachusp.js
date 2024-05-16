import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const uspData = [
  {
    "title": "Cutting-Edge Technology",
    "content": "Teachmint emphasizes unlocking the true potential of education through cutting-edge technology. The platform is designed to provide a modern learning experience, enhance classroom management, and ensure real-time engagement."
  },
  {
    "title": "Global Recognition",
    "content": "Teachmint boasts recognition from various sources, including being ranked among the top companies by LinkedIn, receiving awards such as 'EdTech Startup of the Year,' <span style=\"color:#FC5185 ;\"><strong>and being certified with ISO27001.</strong></span> These accolades contribute to its credibility and trustworthiness."
  },
  {
    "title": "User Satisfaction",
    "content": "The platform has garnered positive feedback from users, including principals, CEOs, and school management, highlighting its seamless integration, efficiency, and support for a strong parent-school connection. A high customer satisfaction score of <span style=\"color:#FC5185 ;\"><strong> 96% adds credibility to its effectiveness.</strong></span>"
  },
  {
    "title": "International Presence",
    "content": "<span style=\"color:#FC5185 ;\"><strong>With users in over 25 countries and 15 million+ users,</strong></span> Teachmint has established a global presence, indicating its adaptability and relevance across diverse educational settings."
  },
  {
    "title": "Security Measures",
    "content": "The platform ensures the secure and efficient management of student data. <span style=\"color:#FC5185 ;\"><strong>Its ISO27001 certification</strong></span> further emphasizes the commitment to data security and privacy."
  },
  {
    "title": "Ease of Adoption",
    "content": "Teachmint emphasizes the ease of digitizing schools in minutes, making the adoption process straightforward for educational institutions."
  },
  {
    "title": "Continuous Innovation",
    "content": "Teachmint stays at the forefront of education's digital shift, offering features such as dynamic fee structures, intelligent reports, and a modern learning experience. Continuous innovation is highlighted as crucial for adapting to evolving educational needs."
  },
  {
    "title": "Supporting NEP 2020",
    "content": "The platform positions itself as ready for the <span style=\"color:#FC5185 ;\"><strong>National Education Policy (NEP) 2020,</strong></span> aligning with the latest educational standards and requirements."
  }
];
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Teachusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Teachmint</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["tec-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Teachusp;
