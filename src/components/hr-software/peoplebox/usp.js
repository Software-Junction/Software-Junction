import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../peoplebox/box.module.scss";

const uspData = [
  {
    "title": "End-to-End Solution",
    "content": "<strong>Coverage :</strong> The software covers the entire spectrum of performance management, starting from the initial phase of goal setting and progressing through feedback management, progress tracking, and even succession planning. This ensures a holistic approach to managing employee performance.<br/><strong>All-in-One Platform :</strong> By providing a single platform for various performance-related functions, the software eliminates the need for organizations to use multiple tools or systems. This integrated approach promotes efficiency and consistency in managing employee performance."
  },
  {
    "title": "Strategic Planning Integration",
    "content": "<strong>Strategic Alignment :</strong> The software integrates with strategic planning initiatives, ensuring that individual and team goals are in alignment with the broader objectives of the organization. This connection between day-to-day tasks and overarching strategies enhances the organization's ability to achieve its long-term goals.<br/><strong>Holistic Approach :</strong> By supporting strategic planning, the software provides a holistic view of organizational performance. This helps leadership make informed decisions by considering the impact of individual and team contributions on the overall strategic direction."
  },
  {
    "title": "Question Library and Surveys",
    "content": "<strong>Customization :</strong> The software includes a comprehensive question library that allows organizations to create customized surveys and assessments tailored to their specific needs. This flexibility ensures that feedback collection is relevant and aligned with organizational goals.<br/><strong>Feedback Variety :</strong> Diverse feedback mechanisms, facilitated by the question library, allow organizations to gather a nuanced understanding of employee performance. This includes not only performance reviews but also insights from various perspectives, contributing to a more comprehensive assessment."
  },
  {
    "title": "Employee Alignment and Engagement",
    "content": "<strong>Alignment Tools :</strong> The software facilitates employee alignment by connecting individual goals with the broader organizational objectives. This ensures that employees understand how their work contributes to the overall success of the organization.<br/><strong>Engagement Features :</strong> Through features such as goal setting, feedback mechanisms, and recognition functionalities, the software actively promotes employee engagement. Engaged employees are more likely to be motivated and committed to achieving their performance goals."
  },
  {
    "title": "Succession Planning",
    "content": "<strong>Talent Pipeline :</strong> The software aids in identifying and nurturing talent within the organization for future leadership roles. It helps create a talent pipeline, ensuring that there are qualified individuals ready to step into key positions as needed.<br/><strong>Skills Development :</strong> Succession planning insights also contribute to skills development initiatives. By identifying the skills required for future leadership roles, the organization can implement targeted training and development programs to prepare employees for advancement."
  },
  {
    "title": "Data-Driven Decision Support",
    "content": "<strong>Analytics :</strong> The software provides robust analytics and reporting tools. These tools enable organizations to derive meaningful insights from performance data, supporting data-driven decision-making.<br/><strong>Insights for Improvement :</strong> The actionable insights generated by the software contribute to continuous improvement in both individual and organizational performance. By identifying areas for enhancement, the software empowers organizations to refine their strategies and practices over time."
  } 
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Peoplebox</h3>
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
