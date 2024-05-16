import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Ease of Use and Accessibility",
    content:
      "Users can effortlessly create and personalize their apps and websites without the need for significant investments or technical expertise. It follows a Pay As You Go (SaaS Model), eliminating the need for large upfront costs.",
  },
  {
    title: "Performance and Maintenance",
    content:
      "OhoShop ensures incredible performance with no IT and server maintenance hassles. Users benefit from free maintenance and upgrades, providing a hassle-free experience.",
  },
  {
    title: "Sales Booster Features",
    content:
      'The platform includes built-in promotional features such as social media sharing, push notifications, SEO-friendly websites, discount and coupon management, <span style="color:#FC5185 ;"><strong>10</strong></span>x faster checkout, QR code/deep link integration, enhancing the potential for increased sales.',
  },
  {
    title: "Diverse Industry Application",
    content:
      "OhoShop caters to a wide range of industries, including apparel and fashion, restaurants, grocery stores, pharmacy and medical stores, bakery and confectionery shops, flower and decoration shops, gift shops, baby products, jewelry, cosmetics, and any other retail businesses looking to go mobile.",
  },
  {
    title: "Customer-Centric Approach",
    content:
      "The software enables businesses to retain customers by providing a mobile presence, boost sales through targeted notifications, understand customer behavior through feedback and reviews, and increase the customer base through social media sharing and referral features.",
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
            <h3 className="mb-3">USP of Ohoshop</h3>
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
