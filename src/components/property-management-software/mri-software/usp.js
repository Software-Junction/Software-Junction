import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../mri-software/mri-software.module.scss";

const uspData = [
  {
    title: "Real Estate Management",
    content:
      "MRI Software offers a comprehensive suite of solutions for both residential and commercial real estate management. This includes tools for property management, accounting, investment management, lease abstraction, and more.",
  },
  {
    title: "AI-First Proptech",
    content:
      "The software leverages AI-first proptech, emphasizing the integration of artificial intelligence to enhance and streamline real estate processes. This can set MRI Software apart in terms of innovation and efficiency.",
  },
  {
    title: "Open and Connected Approach",
    content:
      "MRI Software promotes an open and connected approach to software. This can be presented as a unique feature that provides users with a comprehensive view into property management, accounting, and strategic planning.",
  },
  {
    title: "Extensive Partner Ecosystem",
    content:
      'The Partner Connect program, with over <span style="color:#f95738;"><strong>140</strong></span> partners, offers flexibility and choice to users. This can be highlighted as a USP, showcasing the collaborative nature of MRI Software and the ability for users to tailor solutions to their specific needs.',
  },
  {
    title: "Global Presence",
    content:
      'MRI Software has a global presence, serving clients in over <span style="color:#f95738;"><strong>170</strong></span> countries. The extensive reach can be positioned as a strength, emphasizing the software\'s adaptability to diverse real estate markets.',
  },
  {
    title: "Continuous Innovation",
    content:
      "Showcase the commitment to innovation through features like Revenue Shield by RentPayment, demonstrating that MRI Software stays at the forefront of proptech advancements.",
  },
];
{
  /* <span style=\"color:#f95738 ;\"><strong> */
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
            <h3 className="mb-3">USP of MRI Software</h3>
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
