import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../buildium/buildium.module.scss";

const uspData = [
  {
    "title": "Scalability for Various Portfolios",
    "content": "Buildium caters to diverse property portfolios, accommodating single-family homes, small multifamily units, community associations, student housing, commercial properties, and affordable housing. It is suitable for managing portfolios of varying sizes, whether it's a few doors or several thousand, providing a unified platform for optimal performance."
  },
  {
    "title": "Efficient Payment Collections",
    "content": "The software offers features such as credit card and ACH payments, facilitating faster and automated collections from tenants, vendors, and property owners. Integration with PayNearMe allows for easy processing of retail cash payments, providing flexibility in payment methods."
  },
  {
    "title": "Enhanced Resident Services",
    "content": "Buildium emphasizes meeting the evolving expectations of residents by delivering more than just living spaces. The software enables property managers to provide additional services that enhance the resident experience, contributing to higher tenant retention rates."
  },
  {
    "title": "Customizable and Tailored Customer Onboarding",
    "content": "Buildium offers a <span style=\"color:#f95738 ;\"><strong>14-day</strong></span> free trial with customized customer onboarding, allowing users to experience the software's benefits with minimal risk. The platform is designed to adapt to the unique needs of property owners, landlords, and property management businesses."
  }
];
{/* <span style=\"color:#f95738 ;\"><strong> */}
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
            <h3 className="mb-3">USP of Buildium</h3>
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
