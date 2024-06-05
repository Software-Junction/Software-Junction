import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../bigcommerce/bigcommerce.module.scss";

const uspData = [
  {
    title: "Enterprise Ecommerce, Simplified",
    content:
      "BigCommerce positions itself as a solution that simplifies enterprise ecommerce. With a focus on engagement, attraction, conversion, expansion, and operation, it aims to provide a comprehensive platform.",
  },
  {
    title: "Trusted Commerce Solution Provider",
    content:
      "BigCommerce is recognized by leading analysts and organizations. It is named a Challenger in the Gartner Magic Quadrant for Digital Commerce and has received positive evaluations in reports from Forrester, IDC, and Paradigm.",
  },
  {
    title: "Open SaaS Platform",
    content:
      "BigCommerce emphasizes the flexibility of its Open SaaS solution. It combines the best of SaaS and API-enabled openness, allowing businesses to customize faster without proprietary blockers, friction, or limitations.",
  },
  {
    title: "Global Scalability and Speed",
    content:
      "The platform offers scalability for the global shift to online purchasing, emphasizing speed and agility to protect and grow sales. It provides essential back-office integrations to facilitate seamless operations.",
  },
  {
    title: "Lower Total Cost of Ownership (TCO)",
    content:
      "Leading brands have experienced significantly lower TCO with BigCommerce, making it an attractive choice for businesses looking for more freedom and cost efficiency.",
  },
  {
    title: "Eco(system) Friendly",
    content:
      "The platform boasts a curated ecosystem of leading partners, including technology providers, ecommerce designers, developers, and marketers. This ecosystem is designed to help businesses innovate and succeed without limits.",
  },
  {
    title: "Customer-Centric Approach",
    content:
      "BigCommerce highlights its commitment to customer satisfaction through solution architecting, implementation services, growth services, and dedicated success managers.",
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

const Usp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="mb-3">USP of BigCommerce</h3>
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
