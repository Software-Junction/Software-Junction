import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../nifty/nifty.module.scss";

const uspData = [
  {
    title: "Unified Collaboration Platform",
    content:
      "Nifty serves as a comprehensive and unified platform for project management, bringing together roadmaps, tasks, discussions, docs, forms, and reporting. This eliminates the need to switch between multiple tools, enhancing efficiency and collaboration.",
  },
  {
    title: "Real-time Progress Tracking",
    content:
      "The platform emphasizes real-time progress tracking through milestones, automated reporting, and customizable views. This feature eliminates the need for frequent status meetings, allowing teams to stay informed and make data-driven decisions efficiently.",
  },
  {
    title: "Seamless Integration and Migration",
    content:
      "Nifty supports seamless integration with other popular tools such as Asana, Basecamp, ClickUp, Jira, Trello, and Wrike. Additionally, it facilitates easy migration by allowing users to import data from various sources, ensuring a smooth transition.",
  },
  {
    title: "Client Testimonials and Industry Recognition",
    content:
      "Nifty showcases positive testimonials from a range of clients, including Verizon, Periscope Data, Emovis, VMware, IBM, L'Oreal, and NYU. Additionally, the platform has received acclaim for its design and performance on platforms like Product Hunt.",
  },
  {
    title: "Free Forever Plan",
    content:
      "Nifty offers a free forever plan, requiring no credit card information for sign-up. This allows teams to explore and benefit from the platform without financial commitment, making it accessible to a wide range of users.",
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
            <h3 className="mb-3">USP of Nifty</h3>
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
