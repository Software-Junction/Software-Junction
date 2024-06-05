import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../horizon/hor.module.scss";

const uspData = [
  {
    "title": "Efficient Order Processing",
    "content": "Streamline your operations by eliminating manual order management with loading sheet and VAN statement handling."
  },
  {
    "title": "Credit Control",
    "content": "Take control of your finances with advanced credit management capabilities to manage customer credit effectively."
  },
  {
    "title": "Bulk Order Processing",
    "content": "Increase productivity and reduce workload by processing sales orders in bulk, saving you time and effort."
  },
  {
    "title": "Warehouse Optimization",
    "content": "Improve inventory control and reduce operational costs with efficient warehouse management tools."
  },
  {
    "title": "Financial Insight",
    "content": "Access comprehensive ledger summaries for a clear and detailed financial overview, empowering better decision-making."
  },
  {
    "title": "Offers and Schemes",
    "content": "Easily manage and track special offers and schemes, enhancing your sales strategies."
  },
  {
    "title": "Customization and Communication",
    "content": "Tailor your bill printing with your logo and simplify communication with customers through email invoicing for a professional touch."
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
            <h3 className="mb-3">USP of Horizon ERP</h3>
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
