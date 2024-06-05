import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../celoxis/celoxis.module.scss";

const uspData = [
  {
    title: "All-in-One Solution",
    content:
      "Celoxis goes beyond traditional project management, offering a complete suite of Project Portfolio Management (PPM) tools. From project planning to resource management, custom workflow apps, and portfolio monitoring, Celoxis streamlines every aspect of your business processes.",
  },
  {
    title: "Revolutionary Custom Workflow Apps",
    content:
      "Say goodbye to manual processes and spreadsheets. Celoxis allows you to define, track, and optimize your business processes with detailed data insights through custom workflow apps.",
  },
  {
    title: "Powerful Reporting and Dashboards",
    content:
      "Experience the industry's most powerful reporting and dashboard capabilities. Celoxis offers <span style=\"color:#FC5185 ;\"><strong> 100% </strong></span>customizable dashboards that accelerate decision-making by visualizing data your way. Schedule reports directly to key stakeholders, enhancing transparency and accountability.",
  },
  {
    title: "Top-Rated by Industry Experts",
    content:
      "Celoxis boasts a consistent track record, topping the list of online project management and PPM software for over ten years. The high ratings from reputable review sites underline its reliability and effectiveness.",
  },
  {
    title: "Seamless Integration",
    content:
      "Connect seamlessly with over <span style=\"color:#FC5185 ;\"><strong> 400</strong></span> popular business applications. Celoxis' easy-to-use and powerful API ensure smooth integration with any custom or in-house software, enhancing the adaptability of the solution.",
  },
  {
    title: "Trusted by Thousands",
    content:
      "Join the extensive family of businesses that have chosen Celoxis to power their projects. With thousands of satisfied customers, Celoxis stands as a reliable and trusted choice for organizations seeking excellence in project and portfolio management.",
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
            <h3 className="mb-3">USP of Celoxis</h3>
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
