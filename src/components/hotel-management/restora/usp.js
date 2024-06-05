import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../restora/res.module.scss";

const uspData = [
  {
    "title": "Next-Generation Technology Integration",
    "content": "Restora POS stands out by integrating the latest technological advancements into its system, offering a cloud-based POS solution and seamless website and app integration. This ensures that your restaurant stays ahead in the digital landscape."
  },
  {
    "title": "Adaptability for Various Business Types",
    "content": "Whether you run a cafe, franchise, fast food joint, or a fine-dine restaurant, Restora POS is designed to cater to the specific needs of various business types. The versatility of the system makes it a suitable choice for a wide range of food service establishments."
  },
  {
    "title": "Contactless and Modern Features",
    "content": "In response to the evolving expectations of customers, Restora POS embraces modern features such as contactless payments, QR scanner payment, and multiple delivery methods. This not only enhances customer experience but also addresses current market trends."
  },
  {
    "title": "Empowering Digital Management",
    "content": "Restora POS empowers restaurant owners with digital management tools, offering a user-friendly interface, straightforward management system, and a fast billing process. This ensures that restaurants can keep up with the digital pace of the industry."
  },
  {
    "title": "21-Day Free Trial for Exploration",
    "content": "Restora POS allows potential clients to explore its capabilities risk-free with a <span style=\"color:#FC5185 ;\"><strong>21-day free trial.</strong></span> This commitment to transparency and confidence in the product encourages businesses to experience the benefits firsthand before making a commitment."
  },
  {
    "title": "Global Presence and Recognition",
    "content": "With a presence in Bangladesh and the UAE, Restora POS has positioned itself as a global player in the restaurant POS industry. Its world-class reputation signifies trust and reliability for businesses worldwide."
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
            <h3 className="mb-3">USP of Restora POS</h3>
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
