import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "User-Friendly and Intuitive Interface",
    "content": "Powered by InboxforHRTM, HROne boasts a simple and intuitive interface, eliminating the need for extensive training. The software is designed to be user-friendly, ensuring that HR professionals can navigate and utilize its features effortlessly."
  },
  {
    "title": "Cloud and Mobile Ready",
    "content": "HROne is cloud and mobile-ready, offering flexibility and accessibility. The award-winning mobile app has been used by over <span style=\"color:#FC5185 ;\"><strong> 5 lakh+ users in India.</strong></span> This adaptability allows HR professionals to manage tasks and access information on the go."
  },
  {
    "title": "Security and Compliance",
    "content": "HROne prioritizes data security, being powered with Microsoft Azure and complying with GDPR and <span style=\"color:#FC5185 ;\"><strong> ISO27001 standards.</strong></span> The emphasis on security ensures the safe handling and storage of sensitive HR data."
  },
  {
    "title": "Configurability and Integration",
    "content": "The software is not only comprehensive but also configurable, allowing organizations to tailor it according to their specific needs. HROne supports easy integration with other software through open APIs, enhancing interoperability with existing systems."
  },
  {
    "title": "Thought Leadership and Community Building",
    "content": "HROne goes beyond being just a software provider, engaging in thought leadership through blogs, podcasts, and events like Propel. The HROne CommuneTM fosters a community for HR professionals to exchange ideas and collaborate on initiatives, creating a valuable networking resource."
  },
  {
    "title": "Continuous Innovation",
    "content": "HROne positions itself as an innovative HR tech solution, evident through features like the mobile app, HROne Labs, and integration with emerging technologies like AI."
  } 
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of HROne</h3>
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
