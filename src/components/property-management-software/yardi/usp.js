import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Proven Client Success",
    content:
      'With over <span style="color:#FC5185;"><strong>35 years</strong></span> in the industry, Yardi highlights its commitment to taking care of clients, employees, and communities. Client success stories, such as those from Rexford Industrial, MG Properties Group, and the Housing Authority of the County of Santa Barbara, showcase positive outcomes using Yardi solutions.',
  },
  {
    title: "Innovative Technology Across Disciplines",
    content:
      'Yardi Elevate is mentioned as a system that spans across all disciplines, instilling confidence throughout the organization. The use of RentCafe Reach SEO services resulted in a <span style="color:#FC5185;"><strong>21%</strong></span> increase in organic traffic for MG Properties Group.',
  },
  {
    title: "Efficient Waitlist Management",
    content:
      "Yardi's RentCafe PHA is highlighted for its effectiveness in reducing waiting lists, making it easy for waitlisted households to update their status online.",
  },
  {
    title: "Global Presence and Support",
    content:
      "Yardi operates globally with sites in Asia, Australia & New Zealand, Europe, the Middle East, and North America, emphasizing its widespread adoption by businesses worldwide.",
  },
  {
    title: "Proactive Community Support",
    content:
      "Yardi is committed to supporting communities, as evidenced by its participation in events like NAMI Greater Cleveland and Nobel-Level Science, showcasing a socially responsible approach.",
  },
  {
    title: "Industry Recognition and Participation",
    content:
      "Yardi's involvement in industry events like<span style=\"color:#FC5185 ;\"><strong>  OPTECH 2023</strong></span> and its affiliation with organizations such as Multi-Housing News and Commercial Property Executive showcase its commitment to staying current with industry trends and innovations.",
  },
  {
    title: "Diverse Range of Products and Affiliates",
    content:
      "Yardi offers a range of products and affiliates, including Breeze, RentCafe, CommercialCafe, CondoCafe, StorageCafe, VendorCafe, Yardi Kube, Yardi Marketplace, Yardi Matrix, <span style=\"color:#FC5185 ;\"><strong> Point2 </strong></span>, PropertyShark, ALMSA, and more, providing clients with a diverse set of tools and resources.",
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
            <h3 className="mb-3">USP of Yardi</h3>
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
