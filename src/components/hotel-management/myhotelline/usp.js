import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    "title": "Powerful Tools for Total Command",
    "content": "Equipped with powerful tools, our software enhances team productivity, minimizes errors, and significantly boosts hotel revenue. From a comprehensive Hotel PMS to a Direct Booking Engine, Channel Manager, and Revenue Management features, we offer a complete suite of solutions."
  },
  {
    "title": "No Additional Fees or Commissions",
    "content": "Our Direct Booking Engine and Channel Manager come with no additional fees or commissions. This ensures that you maximize your revenue from direct bookings without incurring extra costs."
  },
  {
    "title": "Contactless Stays and Enhanced Guest Experiences",
    "content": "Our Hotel Mobile App facilitates contactless check-ins, keyless entry, and mobile bookings. This not only enhances guest experiences but also contributes to strong brand value, loyalty, and encourages repeat bookings."
  },
  {
    "title": "Experienced Team and 24/7 Customer Support",
    "content": "Backed by a highly experienced team with over <span style=\"color:#FC5185 ;\"><strong>20 years</strong></span> in the industry, our software comes with a <span style=\"color:#FC5185 ;\"><strong>99.5%</strong></span> uptime guarantee. We provide complete customer <span style=\"color:#FC5185 ;\"><strong>support 24/7</strong></span>, ensuring that you can overcome operational challenges with ease."
  },
  {
    "title": "Proven Results and Cost Efficiency",
    "content": "Testimonials from satisfied users highlight the tangible benefits, including a <span style=\"color:#FC5185 ;\"><strong>20%</strong></span> average increase in reservations, <span style=\"color:#FC5185 ;\"><strong>100+</strong></span> manual hours eliminated monthly, and a <span style=\"color:#FC5185 ;\"><strong>26%</strong></span> lower cost compared to competitors. The software provides a <span style=\"color:#FC5185 ;\"><strong>1.5x</strong></span> technology return on investment."
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
            <h3 className="mb-3">USP of MyHotelLine</h3>
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
