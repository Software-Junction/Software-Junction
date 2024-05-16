import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const uspData = [
  {
    title: "Rapid Store Creation",
    content:
      'Sellacious boasts the ability to create a fully functional online store or Joomla Marketplace in under <span style="color:#FC5185 ;"><strong>2 minutes</strong></span>. This quick setup ensures that users can kickstart their eCommerce journey swiftly and efficiently.',
  },
  {
    title: "Rule Filtering",
    content:
      'With more than <span style="color:#FC5185 ;"><strong>500</strong></span> combinations available, Sellacious provides detailed rule filters for aspects such as tax, discount, and shipping. This level of customization ensures that businesses can adapt their rules based on geographic location, date, quantity, size, and more.',
  },
  {
    title: "Multiple Variants Support",
    content:
      "Sellacious supports multiple product variants based on attributes like colors, size, model, etc. This flexibility caters to businesses with diverse product offerings.",
  },
  {
    title: "Multivendor Architecture",
    content:
      "The native multi-seller architecture simplifies the onboarding and management of sellers. The platform is optimized to perform well under various circumstances, ensuring a smooth marketplace operation.",
  },
  {
    title: "Special Categories",
    content:
      "Sellers can be charged fees based on specific distinctions in their listings, such as foregrounding, highlighting, or defining special categories. This feature adds an extra layer of customization to the pricing structure.",
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
            <h3 className="mb-3">USP of Sellacious</h3>
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
