import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "All-in-One Solution",
    content:
      "Contractor Foreman is an all-in-one construction management suite accessible from tablets, phones, or computers. It covers various aspects of project management, financials, people management, and document handling, consolidating multiple tools into a single platform.",
  },
  {
    title: "Financial Visibility",
    content:
      "Contractor Foreman provides a high-level view of financials on a dashboard, allowing quick access to crucial numbers. Users can drill down into detailed data for job costing, estimates, invoices, and real-time cost databases.",
  },
  {
    title: "GPS-Driven Time Tracking",
    content:
      "The system offers GPS-driven time cards, enabling efficient tracking of crew hours and activities. Users can monitor productivity based on various job parameters, facilitating better management of resources.",
  },
  {
    title: "Customization and Reports",
    content:
      'Custom fields in features like Requests for Information (RFIs) and equipment logs allow users to tailor the system to their specific needs. The software includes over <span style="color:#FC5185 ;"><strong>100</strong></span> reports and <span style="color:#FC5185 ;"><strong>50</strong></span> prebuilt forms, with the ability to create custom reports for better information management.',
  },
  {
    title: "Integration Capabilities",
    content:
      'Contractor Foreman seamlessly integrates with popular tools such as QuickBooks, Google Calendar, <span style=\"color:#FC5185 ;\"><strong>Outlook 365, Zapier</strong></span>, and more. The platform\'s ability to connect with <span style="color:#FC5185 ;"><strong>50+</strong></span> other systems enhances efficiency and reduces the need for double data entry.',
  },
  {
    title: "Free Demo and Trial",
    content:
      'Prospective users can sign up for a <span style="color:#FC5185 ;"><strong>30-day</strong></span> free trial or schedule a demo to experience Contractor Foreman in action. A <span style="color:#FC5185 ;"><strong>100-day</strong></span> money-back guarantee adds an extra layer of assurance for new customers.',
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
            <h3 className="mb-3">USP of Contractor Foreman</h3>
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
