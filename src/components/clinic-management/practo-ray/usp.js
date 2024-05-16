import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Ayushman Bharat Digital Mission Compliance",
    "content": "Practo Ray is compliant with the Ayushman Bharat Digital Mission, showcasing its commitment to aligning with India's digital health infrastructure."
  },
  {
    "title": "User Base and Global Reach",
    "content": "Trusted by over <span style=\"color:#FC5185 ;\"><strong>50,000</strong></span> doctors. Over <span style=\"color:#FC5185 ;\"><strong>25</strong></span> million appointments booked. Used in <span style=\"color:#FC5185 ;\"><strong>5</strong></span> countries, indicating its international presence and adaptability."
  },
  {
    "title": "Reducing No-Shows and Improving Efficiency",
    "content": "<span style=\"color:#FC5185 ;\"><strong>70%</strong></span> reduction in no-shows through automated appointment reminders. Easy rescheduling and cancellations for patients. Turn-by-turn directions via smart SMSes for seamless clinic visits."
  },
  {
    "title": "Digital Records and Patient Engagement",
    "content": "Efficient management of patient data with easy access to digital health records. Automated sharing of records with patients, promoting eco-friendly practices. Increased appointment bookings <span style=\"color:#FC5185 ;\"><strong>(25%)</strong></span> when digital records are shared."
  },
  {
    "title": "Practo Prime",
    "content": "Offers a premium experience for clinics and hospitals. Features a smart calling system (Practo VN) for superior voice calling. One-time technology fee for clinic/hospital connectivity."
  },
  {
    "title": "Remote Consultations and Patient Stories",
    "content": "Facilitates remote consultations for follow-up queries. Collection of patient stories and recommendations to enhance online presence. Showcased in the 'My Doctors' section on Practo for increased repeat appointments."
  },
  {
    "title": "Data Security Measures",
    "content": "<span style=\"color:#FC5185 ;\"><strong>256-bit</strong></span> end-to-end encryption and HIPAA-compliant data center for data safety. Regular automated backups and two-factor authentication. IP whitelisting for added security."
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
            <h3 className="mb-3">USP of Practo Ray</h3>
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
