import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Connected Cloud Platform",
    content:
      "Re-Leased offers a Commercial Real Estate Connected Cloud, seamlessly integrating real estate, accounting, and business software into one global platform. This interconnected approach enhances efficiency and streamlines operations.",
  },
  {
    title: "360-Degree Property View",
    content:
      'The platform provides a complete view of properties, leases, tenants, and related information. This <span style="color:#FC5185;"><strong>360-degree</strong></span> perspective helps avoid costly mistakes, missed rent reviews, and human errors in property management.',
  },
  {
    title: "Automated Reminders and Processes",
    content:
      "Re-Leased automates various property management tasks, including lease event reminders, invoice generation, sending, and processing. This automation saves time and reduces the likelihood of errors.",
  },
  {
    title: "Global Customer Base",
    content:
      'With over <span style="color:#FC5185;"><strong>1,300</strong></span> companies and <span style="color:#FC5185;"><strong>275,000+</strong></span> leases managed on the platform, Re-Leased has gained the trust of a diverse customer base globally.',
  },
  {
    title: "Industry-Specific Solutions",
    content:
      "Re-Leased caters to different stakeholders in the commercial property sector, including property owners, property management companies, and corporate occupiers. Tailored solutions address specific needs within the industry.",
  },
  {
    title: "Trusted by Industry Leaders",
    content:
      "Re-Leased is trusted by prominent names in commercial property, such as CPP, ActivityPlex, Stasia, AMS Property, Mackersey Development, Attune Asset Management, and <span style=\"color:#FC5185 ;\"><strong> 100</strong></span> Market Group, among others.",
  },
  {
    title: "Global Team and Presence",
    content:
      'With a team of over <span style="color:#FC5185;"><strong>170</strong></span> professionals globally, Re-Leased ensures that users receive comprehensive support and assistance.',
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
            <h3 className="mb-3">USP of Re-Leased</h3>
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
