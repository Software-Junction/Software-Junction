import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Universal Access and Deliverability",
    "content": "Alexandria ensures universal access by being accessible on any device through any browser without the need for app downloads. It is the only Integrated Library System (ILS) to meet WCAG/ADA standards, emphasizing inclusivity. Cloud-hosted, providing reader-focused interfaces that reach all users with unlimited user licensing."
  },
  {
    "title": "Catalog Enrichment & Analytics for Engagement and Discoverability",
    "content": "Recognizing the different needs of various patrons, Alexandria focuses on engaging students effectively, from early readers to advanced learners. The software's mission is to make the library catalog more accessible, discoverable, and easier to find, maximizing the investment in the library resources."
  },
  {
    "title": "Connecting Students to Curriculum through Partnerships & Integrations",
    "content": "Alexandria collaborates with best-in-class library solution providers, ensuring a comprehensive and tailored library experience. The emphasis is on delivering a one-size-fits-all library solution that aligns with the mission of both Alexandria and its partners."
  },
  {
    "title": "Search Technology with Navigator",
    "content": "Alexandria Navigator introduces a powerful search technology that offers real-time, full-text searching. Metadata independence, access to local to major international databases, and source-agnostic results set it apart as a cutting-edge solution."
  }
  
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Alexusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of Alexandria</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["alx-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Alexusp;
