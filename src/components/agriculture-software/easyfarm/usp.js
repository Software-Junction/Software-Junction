import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "ffortless Record Keeping",
    content:
    " Say goodbye to complicated bookkeeping! EasyFarm simplifies farm record-keeping with a single-entry input approach. No more closing months or posting transactions – everything happens in real-time."
  },
  {
    title: " 📊 Powerful Reporting ",
    content:
    "Benefit from easy input screens, powerful reports, and complete flexibility. EasyFarm empowers you with insights into your farming operations like never before."
  },
  {
    title: "👩‍🌾 Trusted by Farmers and Educators:",
    content:
    " With over<span style=\"color:#FC5185 ;\"><strong> 2499 happy farmers</strong></span> and <span style=\"color:#FC5185 ;\"><strong>20 years</strong></span> of supporting educators, EasyFarm has proven its reliability and effectiveness in the field."
  },
  {
    title: "🌍 Accessible Anytime, Anywhere",
    content:
    " Manage your farm from anywhere with EasyFarm's user-friendly interface. Experience the freedom to access and update your records whenever you need."
  },
  {
    title: "🔒 Security and Stability",
    content:
    " Trust EasyFarm's stability with <span style=\"color:#FC5185 ;\"><strong> 30+ years</strong></span> of field use. Your data is secure, and our software provides a stable platform for your farm management needs."
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
            <h3 className="mb-3">USP of EasyFarm</h3>
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
