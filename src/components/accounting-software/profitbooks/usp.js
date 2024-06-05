import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../profitbooks/pro.module.scss";

const uspData = [
  {
    "title": "User-Friendly Interface",
    "content": "ProfitBooks offers a simple and intuitive interface for easy accounting and bookkeeping."
  },
  {
    "title": "Affordability",
    "content": "It provides cost-effective solutions for small businesses and startups."
  },
  {
    "title": "Cloud-Based",
    "content": "Access your financial data from anywhere with an internet connection."
  },
  {
    "title": "Inventory Management",
    "content": "Efficiently manage your stock and inventory."
  },
  {
    "title": "GST Compliance",
    "content": "Simplify GST compliance and reporting for businesses in India."
  },
  {
    "title": "Multi-Currency Support",
    "content": "Conduct international transactions with ease."
  },
  {
    "title": "Financial Reporting",
    "content": "Access a variety of financial reports and analytics for data-driven decisions."
  },
  {
    "title": "Security",
    "content": "Protect your sensitive financial data with built-in security measures."
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
            <h3 className="mb-3">USP of ProfitBooks</h3>
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
