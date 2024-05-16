import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Seamless Google Integration",
    "content": "NetHunt CRM seamlessly integrates with Google Workspace, offering a familiar environment for users with native connections to Gmail, Calendar, Docs, and more."
  },
  {
    "title": "LinkedIn Lead Integration",
    "content": "Directly connects with LinkedIn for easy access to high-quality leads, streamlining the lead generation process."
  },
  {
    "title": "Automated Sales Processes",
    "content": "Efficiently automates lead capture, CRM profile enrichment, and lead nurturing, ensuring no leads fall through the cracks."
  },
  {
    "title": "Multi-Channel Communication",
    "content": "Centralizes communication from various channels (email, social media, telephony, messengers) for a comprehensive view of customer interactions."
  },
  {
    "title": "G2 Reviews and Google Cloud Partnership",
    "content": "Positive G2 customer reviews and recognition as a Google Cloud Partner validate the software's quality and security."
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
            <h3 className="mb-3">USP of NetHunt CRM</h3>
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
