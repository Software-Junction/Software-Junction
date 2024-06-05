import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../gofrugal/gof.module.scss";

const uspData = [
  {
    "title": "Faster Billing",
    "content": "User-friendly interface and shortcuts for quick searches facilitate faster checkouts. Mobile billing app for uninterrupted billing from any device, ensuring super-fast checkouts."
  },
  {
    "title": "Omnichannel Capabilities",
    "content": "Branded online ordering app with prescription upload and delivery management features. Enables pharmacies to go omnichannel with apps for online ordering, order processing, and deliveries."
  },
  {
    "title": "Integrated Accounting",
    "content": "Automated tax calculations and simplified GST filing. Regular updates to stay compliant with new regulations and impactful financial reports for critical business decisions."
  },
  {
    "title": "Increased Customer Retention",
    "content": "Personalized messages, offers, and timely reminders for medication to boost customer retention. Loyalty programs to create everlasting customer loyalty."
  },
  {
    "title": "Powerful Reports",
    "content": "Access to instant reports on short-expiry, best-selling, fast or low-selling items for informed decision-making. Real-time business data analysis from anywhere."
  },
  {
    "title": "Omnichannel ERP Solution",
    "content": "Seamless management of multi-store businesses from any device with enhanced visibility. Comprehensive ERP solution covering various aspects like CRM, accounting, inventory, and more."
  },
  {
    "title": "Pharmacy-Specific Features",
    "content": "Dedicated features for pharmacy businesses, including pharmacy billing, inventory management, prescription management, and patient records."
  },
  {
    "title":"Industry Recognition",
    "content":"Award-winning software recognized as \"Top Pharmaceutical Industry Software.\" <span style=\"color:#FC5185 ;\"><strong>Trusted by 5000+</strong></span> pharmacies and chemists globally, with success stories from satisfied users."
  },
  {
    "title": "Free Trial and Easy Implementation",
    "content": "Free trial option to experience the software's benefits. Quick implementation with the ability to open an online pharmacy store  <span style=\"color:#FC5185 ;\"><strong>in just 5 days</strong></span>."
  },
  {
    "title": "ERP Flexibility",
    "content": "OnPremise ERP option for in-house management without dependency on the internet. Streamlined daily operations with high accuracy and data-driven decision-making."
  }
  
  
  
  
];
{/* <span style=\"color:#FC5185 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Gofrugal's Pharmacy Software</h3>
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
