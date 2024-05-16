import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Collaboration Across Teams and Departments",
    content:
      "Taskworld facilitates seamless collaboration by allowing users to assign admins, followers, and guests across different tasks. The platform supports multiple locations, streamlining collaboration between diverse teams and branches for enhanced alignment.",
  },
  {
    title: "Context-Focused Communication",
    content:
      "The integrated chat feature enables direct communication on tasks. Users can leave comments, mention team members, and share files within the task context, promoting efficient and focused collaboration.",
  },
  {
    title: "Visual Project Management",
    content:
      "With multiple views and visualization options, Taskworld provides a comprehensive bird's-eye view of all projects. Users can choose from various overviews, such as people, deadlines, or priority, ensuring that nothing slips through the cracks.",
  },
  {
    title: "Trusted by Industry Leaders",
    content:
      "Taskworld boasts a diverse clientele, including major industry players like Accor, SoftBank, and Intersport. Its credibility is reinforced by being developed alongside big enterprises, indicating its scalability and adaptability for businesses of all sizes.",
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
            <h3 className="mb-3">USP of Taskworld</h3>
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
