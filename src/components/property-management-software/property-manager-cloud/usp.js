import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Paperless Operations",
    content:
      "Embrace a greener approach by going entirely paperless, reducing clutter, and streamlining administrative tasks.",
  },
  {
    title: "PMC Tenant Portal",
    content:
      "Foster transparent communication with tenants, offering a centralized hub for information, notices, and collaboration.",
  },
  {
    title: "Work Order System",
    content:
      "Tackle maintenance issues swiftly with an organized work order system, ensuring prompt resolution and tenant satisfaction.",
  },
  {
    title: "Online Rent Collections",
    content:
      "Say goodbye to traditional rent collection methods; effortlessly collect rents online, enhancing convenience for both property managers and tenants.",
  },
  {
    title: "Lease and Addendum Creator",
    content:
      "Craft legally sound leases and addendums effortlessly, ensuring compliance and minimizing legal risks.",
  },
  {
    title: "Tenant Screening",
    content:
      "Mitigate risks by conducting comprehensive tenant screenings, safeguarding your properties and ensuring a reliable tenant base.",
  },
  {
    title: "Income Tracker",
    content:
      "Gain real-time insights into your property's financial performance, empowering strategic decision-making.",
  },
  {
    title: "Owner Portal",
    content:
      "Keep property owners informed and satisfied with a dedicated portal providing insights into property performance.",
  },
  {
    title: "Online Applications",
    content:
      "Streamline the tenant application process with online applications, reducing paperwork and expediting tenant approvals.",
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
            <h3 className="mb-3">USP of Property Manager Cloud</h3>
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
