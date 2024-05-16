import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Operations Re-design",
    "content": "<strong>Ensuring proper policies and procedures:</strong> Developing and implementing policies to ensure compliance with regulations such as HIPAA, OSHA, and Workman’s Compensation Programs.<br/><strong>Streamlined workflows:</strong> Recommending more efficient and less resource-intensive processes for clinical care, data collection/recording, and billing practices.<br/><strong>Overhead reduction strategies:</strong> Providing tactics to minimize unnecessary overhead costs within the healthcare practice."
  },
  {
    "title": "Patient Volume Increase",
    "content": "<strong>Marketing plans:</strong> Developing and implementing effective marketing strategies to attract more patients.<br/><strong>Participation in private Workman’s Comp Mediator referral program:</strong> Involvement in referral programs to increase patient volume, particularly related to workers' compensation cases."
  },
  {
    "title": "Provider Recruiting",
    "content": "<strong>Finding providers - resume screening:</strong> Assisting in the recruitment process by screening resumes of potential healthcare providers.<br/><strong>Interviewing assistance:</strong> Providing support in the interview process for recruiting new healthcare professionals."
  },
  {
    "title": "Compliance",
    "content": "<strong>Administrative manual review:</strong> Evaluating and ensuring compliance with administrative manuals.<br/><strong>HIPAA and OSHA Training:</strong> Offering training programs, both online and live, to ensure staff compliance with HIPAA and OSHA regulations.<br/><strong>Payer/billing review:</strong> Reviewing and ensuring compliance with payer and billing regulations."
  },
  {
    "title": "Organizational Assessment",
    "content": "<strong>Complimentary 1-hour assessment:</strong> Conducting an initial assessment to identify the needs, strengths, weaknesses, and opportunities within the healthcare practice.<br/><strong>In-depth evaluation:</strong> Further evaluating and addressing practice goals, strategic plans, technology needs, competitive landscape, clinical processes, and financial processes."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of ACE Health Solutions</h3>
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
