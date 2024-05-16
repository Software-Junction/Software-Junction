import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Practice Management",
    "content": "<strong>Electronic Charting :</strong> Webmedy streamlines practice management by providing electronic charting capabilities, allowing healthcare professionals to maintain patient records digitally.<br/><strong>Patient Scheduling :</strong> The platform facilitates the scheduling of patient appointments, contributing to a more organized and efficient workflow.<br/><strong>Billing and Reporting :</strong> Webmedy offers features for billing and reporting, helping practices manage financial aspects and generate necessary reports for analysis."
  },
  {
    "title": "Flexible and Intuitive Charting",
    "content": "<strong>Smart Charting :</strong> Webmedy incorporates smart charting features, allowing healthcare professionals to write encounter notes using standard SOAP or customizable note types.<br/><strong> Custom Templates :</strong> The platform minimizes data entry by providing customizable templates that require just a few clicks, enhancing the speed and accuracy of documentation."
  },
  {
    "title": "Insightful Clinical Reports",
    "content": "<strong>Data Analysis :</strong> Webmedy offers clinical reports that enable practitioners to gain valuable insights into patient data, supporting informed decision-making.<br/><strong> Search Functionality :</strong> The ability to search for patients based on specific diagnoses or medications using <span style=\"color:#FC5185 ;\"><strong>ICD-10 codes</strong></span> enhances efficiency in managing patient information."
  },
  {
    "title": "Easy Billing and Revenue Cycle Management",
    "content": "<strong>Paperless Billing :</strong> The medical billing software within Webmedy expedites payment processes and reduces administrative tasks by offering paperless billing.<br/><strong> Configurable Billing :</strong> Practices can fully customize billing processes to align with their specific needs, defining billable services, product categories, and more."
  },
  {
    "title": "Patient Engagement through Portal",
    "content": "<strong>Empowering Patients :</strong> The patient portal empowers patients by providing access to their medical information, facilitating appointment requests, and enabling communication with healthcare providers.<br/><strong> Active Engagement :</strong> Webmedy promotes active patient engagement between visits through secure messaging, email, and teleappointments."
  },
  {
    "title": "Data Security",
    "content": "<strong>HIPAA Compliance :</strong> Webmedy ensures the security of patient data by deploying in a HIPAA-compliant cloud infrastructure.<br/><strong> Encryption :</strong> Data transmission is secured using military-grade <span style=\"color:#FC5185 ;\"><strong>2048-bit encryption,</strong></span> and stored data is kept in highly secure <span style=\"color:#FC5185 ;\"><strong>ISO 27001</strong></span> certified data centers."
  },
  {
    "title": "Philanthropic Initiatives",
    "content": "<strong>Charitable Donations :</strong> Webmedy contributes to charitable causes by donating a percentage of subscriptions to charity institutions worldwide.<br/><strong> Discounts for Service :</strong> Practitioners serving underprivileged communities receive up to a <span style=\"color:#FC5185 ;\"><strong>50%</strong></span> discount on subscription charges, demonstrating a commitment to social responsibility."
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
            <h3 className="mb-3">USP of Webmedy</h3>
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
