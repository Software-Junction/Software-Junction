import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../procore/procore.module.scss";

const uspData = [
  {
    title: "Comprehensive Construction Management Platform",
    content:
      "Procore offers a top-rated construction management platform designed to provide end-to-end solutions for owners, general contractors, and subcontractors. It covers the entire construction process from tendering to project closeout.",
  },
  {
    title: "Mobile Project Management",
    content:
      "The platform facilitates mobile project management, allowing teams to connect seamlessly between site and office. This feature enhances efficiency and collaboration by providing real-time updates and communication.",
  },
  {
    title: "Quality & Safety Management",
    content:
      "Procore includes robust quality and safety management tools that help mitigate risks. Users can make informed decisions using real-time data from the site, manage site diaries, inspections, and incidents all in one centralized location.",
  },
  {
    title: "Financial Management Integration",
    content:
      "The platform provides real-time financial insight into the health of construction projects through integrated cost management. This ensures that project and site teams are connected to accounting processes, promoting financial transparency.",
  },
  {
    title: "Global Success Stories",
    content:
      'Procore boasts a track record of over <span style="color:#f95738 ;"><strong>1,000,000</strong></span> projects in <span style="color:#f95738 ;"><strong>150+</strong></span> countries, with numerous industry leaders and well-known companies attesting to its effectiveness. Customer success stories, such as Ananda Development, highlight the positive impact Procore has on construction teams worldwide.',
  },
  {
    title: "Extensive Integrations",
    content:
      'Procore\'s App Marketplace features seamless integrations with over <span style="color:#f95738 ;"><strong>500</strong></span> out-of-the-box applications, allowing users to connect to the tools they already use and love.',
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
            <h3 className="mb-3">USP of Procore</h3>
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
