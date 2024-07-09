import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../eduerp/erp.module.scss'

const uspData = [
  {
    title: "Web & Mobile Accessibility",
    content:
    "<strong>Description :</strong> eduERP® provides both web and mobile interfaces, allowing various stakeholders such as administrators, faculty, management, students, and parents to access the system from different devices.<br/><strong>Details :</strong> This accessibility ensures that users can stay connected and engaged with the educational ecosystem from anywhere, promoting flexibility and convenience in managing and accessing information."
  },
  {
    title: "Tailored for Various Educational Levels",
    content:
    "<strong>Description :</strong> eduERP® is designed to cater to the specific needs of different educational levels, including schools, pre-schools, colleges, universities, coaching institutes, and vocational institutes.<br/><strong>Details :</strong> The software is adaptable and customizable, ensuring that it can meet the unique requirements of diverse educational institutions, making it a versatile solution for various levels of education."
  },
  {
    title: "Dedicated Features for Librarians",
    content:
    "<strong>Description :</strong> eduERP® includes features tailored to the unique responsibilities of librarians within educational institutions.<br/><strong>Details :</strong> These features could involve tools for cataloging, managing, and tracking library resources, acknowledging the specific needs and contributions of librarians to the educational environment."
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
            <h3 className="mb-3">USP of eduERP</h3>
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
