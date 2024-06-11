import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "All-in-One Solution",
    "content": "What : Fedena is a versatile school management software that handles every aspect, from attendance to HR, all in one platform.<br/> Why: Streamlines operations, eliminates manual tasks, and provides a unified solution for seamless academic and administrative processes."
  },
  {
    "title": "Global Reach",
    "content": "What : <span style=\"color:#f95738 ;\"><strong>Used by 40,000+ schools and colleges in over 200 countries,</strong></span> available in 20+ languages.<br/>Why: Offers a globally accessible platform, ensuring institutions worldwide can benefit from its features and capabilities."
  },
  {
    "title": "Multipurpose Functionality",
    "content": "What : <span style=\"color:#f95738 ;\"><strong>With 100+ modules,</strong></span> Fedena serves as a multipurpose school management system. Provides a comprehensive solution adaptable to various educational needs, including examinations, online classes, and more."
  },
  {
    "title": "Customized for Education Boards",
    "content": "What : Suitable for CBSE, ICSE, Regional State Board, IB, and more.<br/> Why :  Tailored to the specific requirements of different education boards, ensuring a customized and relevant experience."
  },
  {
    "title": "Mobile App Integration",
    "content": "What : Dedicated iOS and Android apps for parents, teachers, and students.<br/> Why :  Enables convenient management of daily operations on-the-go, fostering direct communication with the school ERP."
  },
  {
    "title": "Integration Options",
    "content": "What : <span style=\"color:#f95738 ;\"><strong>Supports up to 20 integrations,</strong></span> including biometric, location, and payment gateway.<br/>Why : Enhances functionality by seamlessly integrating with other tools, offering a more holistic and efficient solution."
  },
  {
    "title": "Institute Testimonials",
    "content": "What : Wellspring International School, Vietnam, praises Fedena for managing various operations effectively.<br/>Why : Real-world testimonials validate the software's effectiveness in diverse educational settings."
  }
];
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Fedusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Fedena</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["fed-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Fedusp;
