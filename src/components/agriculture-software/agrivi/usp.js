import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../agworld/agworld.module.scss";

const uspData = [
  {
    title: "Data-Driven Decision Making",
    content:
      "A key emphasis is placed on the importance of data-driven decision-making. The platform provides real-time insights and data that empower growers and stakeholders in the agri-food value chain to make informed decisions throughout the entire farming process.",
  },
  {
    title: "Industry-Specific Tailoring",
    content:
      "AGRIVI tailors its solutions to cater to different stakeholders in the agrifood value chain, including professional crop farmers, enterprise farming holdings, food and beverage companies, cooperatives, banks, input manufacturers, and agronomic advisory services. This industry-specific approach ensures relevance and effectiveness in addressing the unique challenges of each sector.",
  },
  {
    title: "Accessibility and Convenience",
    content:
      "The platform is accessible on various devices such as phones, tablets, and computers. This accessibility ensures ease of use and convenience for users who can access vital information seamlessly, reducing the need for multiple notebooks and enhancing overall efficiency.",
  },
  {
    title: "Proven Track Record",
    content:
      "AGRIVI highlights its success by being trusted by Fortune <span style=\"color:#FC5185 ;\"><strong>500 companies</strong></span>, showcasing case studies and testimonials from renowned organizations like Nestlé, demonstrating the platform's effectiveness in achieving sustainability goals, improving efficiency, and increasing revenue.",
  },
  {
    title: "Tailored Industry Reports",
    content:
      "AGRIVI provides industry-specific reports and resources, such as the CSRD Report – Handbook for Food and Beverage Companies. This showcases the platform's commitment to keeping users informed about industry-specific challenges and helping them meet reporting standards effortlessly.",
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
            <h3 className="mb-3">USP of AGRIVI's Farm Management Software</h3>
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
