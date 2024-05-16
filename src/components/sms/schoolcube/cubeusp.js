import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Academic Records Management",
    "content": "The system allows schools to efficiently track and analyze students' academic records. It includes features such as monitoring class and subject attendance, generating charts to visualize academic progress, and providing scorecards and transcripts for comprehensive academic assessment."
  },
  {
    "title": "Customizable and Precise",
    "content": "The portal is highly customizable to cater to the unique grading structures and requirements of each school. This customization ensures accurate computations, allowing schools to adapt the software to their specific needs and standards."
  },
  {
    "title": "Financial Solutions",
    "content": "SchoolCube offers financial solutions to simplify fee payments and collections. This includes features like students' wallets, staff accounts, staff payroll/pay-slips, and the generation of receipts and vouchers. These tools contribute to efficient financial management within the school."
  },
  {
    "title": "Secure and Reliable",
    "content": "Emphasizing secure hosting on robust and reliable cloud systems, SchoolCube ensures that sensitive data is protected. Access levels are managed effectively, guaranteeing that only authorized personnel can access specific information, adding an extra layer of security."
  },
  {
    "title": "Partnerships",
    "content": "SchoolCube proudly associates with reputable partners such as Forbes, Microsoft, AWS, and others. These partnerships not only enhance the credibility of the software but also indicate a strong industry presence and collaborative efforts to provide a comprehensive solution."
  },
  {
    "title": "User-Friendly Interface",
    "content": "The software has been carefully designed to offer a simple and user-friendly interface. This design choice aims to provide an intuitive and pleasant experience for users, making it easier for them to navigate and utilize the features effectively."
  },
  {
    "title": "Global Reach",
    "content": "Highlighting schools like Revocube in different regions demonstrates the global reach of SchoolCube. This showcases its adaptability to various educational settings and suggests a broad user base, further establishing its reputation in the education technology sector."
  },
  {
    "title": "Experience and Expertise",
    "content": "The mention of a carefully and simply designed system, combined with the right ingredients, emphasizes the software's development process. This suggests a level of expertise and thoughtfulness in crafting a solution that meets the diverse needs of educational institutions."
  }
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
const renderHTML = (rawHTML) => {
  return React.createElement("p", {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
};

const Cubeusp = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of SchoolCube</h3>
          </Col>
          {uspData.map((item, index) => (
            <Col lg={4} className="mb-4" key={index}>
              <div
                className={`${styles["cub-box-bgclr"]} box h-100 p-4 rounded-4 border text-center`}
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

export default Cubeusp;
