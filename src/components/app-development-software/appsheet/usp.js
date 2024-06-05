import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../appsheet/appsheet.module.scss";

const uspData = [
  {
    title: "No Coding Required",
    content:
      "AppSheet allows users to build mobile and desktop apps without the need for coding. This empowers individuals and teams to create customized solutions tailored to their specific business needs.",
  },
  {
    title: "Data Capture and Customization",
    content:
      'The platform supports the capture of rich data using various inputs such as forms, barcodes, locations, signatures, and photos. Users can customize app features, user experience UX, security, and branding according to their requirements.',
  },
  {
    title: "Integration with Google Workspace and Third-Party Apps",
    content:
      "AppSheet seamlessly integrates with Google Workspace apps like Gmail, Sheets, and Spaces. Additionally, it connects to third-party apps such as <span style=\"color:#FC5185 ;\"><strong> Office 365</strong></span>, Dropbox, and Salesforce.com. The platform also allows integration with SQL databases, Apigee, REST APIs, and OData.",
  },
  {
    title: "User Testimonials",
    content:
      "Real-world experiences from users highlight the platform's effectiveness. For instance, Singapore Press Holdings' Head of Corporate Systems, Hua Cheng Hong, emphasizes how AppSheet allows them to prioritize development work and maximize their contribution to the business.",
  },
  {
    title: "Empowering Small and Large Businesses",
    content:
      "AppSheet is credited with leveling the playing field for businesses of different sizes. Ryan Holcomb, CEO at Pantechs Laboratories, notes that small businesses can develop and deploy custom, in-house built apps quickly to meet their exact needs without the need for external hiring.",
  },
  {
    title: "Integration with Google Workspace",
    content:
      "The platform is fully integrated with Google Workspace, showcasing how it complements Google's suite of tools to enhance connectivity, creativity, and collaboration.",
  },
  {
    title: "Wide Adoption",
    content:
      'Over <span style="color:#FC5185 ;"><strong>4.5</strong></span> million apps have been created with AppSheet, indicating its widespread use and popularity among users.',
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
            <h3 className="mb-3">USP of AppSheet</h3>
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
