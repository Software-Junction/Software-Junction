import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ready-4s/ready-4s.module.scss";

const uspData = [
  {
    "title": "Customized Solutions at Scale",
    "content": "Ready4S specializes in turning ideas into custom software development at scale, catering to diverse business needs. Their approach involves bringing products together for a faster go-to-market, augmenting IT teams, or optimizing existing processes."
  },
  {
    "title": "Proven Track Record",
    "content": "With over<span style=\"color:#FC5185 ;\"><strong> 10 years</strong></span> in the business, Ready4S showcases a successful track record, evident in  <span style=\"color:#FC5185 ;\"><strong> 85+</strong></span> happy clients and a<span style=\"color:#FC5185 ;\"><strong> 5-star</strong></span> Clutch rating. Recognizable brands such as Uber, Roche, and Coca Cola have benefited from their professional work."
  },
  {
    "title": "Collaborative Approach",
    "content": "Ready4S emphasizes a collaborative approach, with<span style=\"color:#FC5185 ;\"><strong> 1150+</strong></span> consultations conducted in a year. They focus on innovating with clients, delivering the full scope of work through self-managed teams, and ensuring agile development to meet high-performance, user experience, scale, and security requirements."
  },
  {
    "title": "Modernization Expertise",
    "content": "Ready4S offers expertise in modernizing legacy technology, providing re-architecting solutions with a data migration plan to support digital transformation."
  },
  {
    "title": "Global Reach",
    "content": "Success stories from all over the world, combined with an international client base, showcase Ready4S's ability to deliver solutions on a global scale."
  },
  {
    "title": "Top-Class Development Team",
    "content": "A team of <span style=\"color:#FC5185 ;\"><strong>50+ members</strong></span>, including top-class front-end and back-end developers, ensures the development of frictionless, custom web and mobile applications adhering to industry standards."
  },
  {
    "title": "Client Testimonials",
    "content": "Positive client testimonials from companies like Trace One and Uber highlight the quality and commitment of Ready4S, showcasing their reliability and efficiency in software development."
  },
];
{
  /* <span style=\"color:#FC5185 ;\"><strong> */
}
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
            <h3 className="mb-3">USP of Ready4S</h3>
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
