import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../paymo/paymo.module.scss";

const uspData = [
  {
    title: "Efficiency Improvement",
    content:
      'The platform aims to boost productivity by providing built-in collaboration tools, workflows, and transparent time tracking. Customer testimonials, like the <span style="color:#FC5185;"><strong>35%</strong></span> increase in productivity from a Swiss business, highlight the platform\'s effectiveness in improving efficiency.',
  },
  {
    title: "Visual Project Planning",
    content:
      "Gantt charts are highlighted as a feature for visual project planning, allowing users to see project timelines and dependencies. Project templates are mentioned, enabling users to reuse existing project structures for faster setup and efficiency.",
  },
  {
    title: "Client Collaboration",
    content:
      "Paymo allows external users, such as clients, to be added as 'Guests' for improved collaboration. Task comments and discussions can replace external communication tools like Slack, keeping project-related discussions in one place.",
  },
  {
    title: "Innovative Time Tracking",
    content:
      "Paymo offers various time tracking apps, including web, desktop, and mobile applications. Automatic Time Tracking is a unique feature that records computer activity and generates timesheets, minimizing manual input.",
  },
  {
    title: "Multilingual and Globally Accessible",
    content:
      'Paymo is available in <span style="color:#FC5185;"><strong>22</strong></span> languages, showcasing its global accessibility and catering to a diverse user base.',
  },
  {
    title: "Testimonials and Success Stories",
    content:
      "Customer testimonials from businesses in Switzerland, Spain, and the USA validate the platform's impact on productivity, project delays, and collection rates. The platform is endorsed by various professionals, including project managers, creatives, consultants, software engineers, architects, and freelancers.",
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
            <h3 className="mb-3">USP of Paymo</h3>
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
