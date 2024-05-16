import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "User-Friendly Templates",
    content:
      "Ready-made templates for Agile, Scrum, Kanban, Bug tracking, and DevOps offer a quick start for teams. Customizable templates accommodate different team workflows, providing flexibility.",
  },
  {
    title: "Integration Flexibility",
    content:
      "Jira integrates seamlessly with other tools, supporting an open relationship with various applications. Teams can easily add tools from the Atlassian Marketplace, making Jira a central source of truth.",
  },
  {
    title: "Developer-Focused DevOps",
    content:
      "Open DevOps in Jira Software allows developers to focus on coding by simplifying issue updates and integration with various tools. The emphasis is on keeping developers focused while ensuring alignment with the business.",
  },
  {
    title: "Proven Results",
    content:
      'Highlighting benefits such as a <span style="color:#FC5185 ;"><strong>900%</strong></span> increase in deployments and a <span style="color:#FC5185 ;"><strong>50%</strong></span> decrease in cycle time. Trusted by more than <span style="color:#FC5185 ;"><strong>100,000</strong></span> organizations, reinforcing its effectiveness in real-world scenarios.',
  },
  {
    title: "Scalability",
    content:
      'Jira Software is built for teams of varying sizes, from <span style="color:#FC5185 ;"><strong>1</strong></span> to <span style="color:#FC5185 ;"><strong>35,000</strong></span>, without causing growing pains. Offers best-of-breed features, security, and privacy to scale seamlessly regardless of company size.',
  },
  {
    title: "Free Forever Option",
    content:
      'Jira Software provides a free forever plan for teams up to <span style="color:#FC5185 ;"><strong>10</strong></span> members, making it accessible for small teams. This allows teams to experience and benefit from Jira\'s features without immediate cost.',
  },
  {
    title: "Enterprise Solutions",
    content:
      "Jira Software offers different plans, including Standard, Premium, and Enterprise, catering to the needs of growing teams and large enterprises. Jira Align is presented as a solution for enterprise agility.",
  },
  {
    title: "Learning Resources and Community Support",
    content:
      "Jira Software provides resources such as the Team Playbook, Community, and DevOps best practices for continuous learning. Technical support, documentation, and training options are available to ensure users get the most out of the software.",
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

const Usp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Jira Software</h3>
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
