import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../infotech/tech.module.scss'

const uspData = [
  {
    title: "Experienced and Dedicated Team",
    content:
    "The company boasts a team of IT professionals with over a decade of combined experience. This experienced and dedicated team is presented as a valuable asset, indicating that clients can expect to work with seasoned professionals who have a deep understanding of the industry and are committed to delivering high-quality solutions."
  },
  {
    title: "Client-Centric Approach",
    content:
    "Innate Infotech emphasizes its commitment to client satisfaction. The focus is on actively listening to clients, understanding their needs, and being fully dedicated to helping them derive maximum benefits from their business. This client-centric approach suggests a partnership where the client's goals and satisfaction are top priorities."
  },
  {
    title: "Ease of Operation in Secure Online Environments",
    content:
    "Recognizing the challenges businesses face in operating securely online, Innate Infotech pledges to make it easy for clients. The company may provide solutions or services that simplify the process of maintaining a secure online presence. This commitment suggests a focus on user-friendly and secure online interactions."
  },
  {
    title: "Wide Range of Services",
    content:
    "Innate Infotech offers a diverse suite of services, covering everything from custom software development to web hosting, content writing, and internet marketing. This breadth of services implies that clients can rely on a single provider for various aspects of their online presence, streamlining their digital strategy."
  },
  {
    title: "Strategic Internet Marketing",
    content:
    "The company offers to build advertising campaigns tailored to clients' niches and budgets. This strategic approach to internet marketing implies a focus on creating effective and targeted campaigns to ensure that businesses can be easily found online, reaching their intended audience efficiently."
  }
  
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
            <h3 className="mb-3">USP of Innate Infotech</h3>
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
