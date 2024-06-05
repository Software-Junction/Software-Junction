import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../margerp/marg.module.scss";

const uspData = [
  {
    "title": "Customization",
    "content": "Marg offers highly customizable software to adapt to your business's unique needs."
  },
  {
    "title": "Comprehensive Modules",
    "content": "A wide range of integrated modules for all-in-one business management."
  },
  {
    "title": "Localized Support",
    "content": "Tailored solutions and support for the Indian market."
  },
  {
    "title": "GST Compliance",
    "content": "Ensures compliance with the complex GST regulations in India."
  },
  {
    "title": "User-Friendly Interface",
    "content": "Easy-to-use software for users of all technical backgrounds."
  },
  {
    "title": "Mobile App",
    "content": "Stay connected and manage operations on the go with their mobile app."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Marg ERP 9+Accounting</h3>
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
