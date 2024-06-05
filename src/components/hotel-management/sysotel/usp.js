import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../sysotel/sys.module.scss";

const uspData = [
  {
    "title": "Comprehensive AI/ML-Based System",
    "content": "SYSOTEL.AI employs Artificial Intelligence (AI) and Machine Learning (ML) technologies comprehensively. This means the system uses advanced algorithms to analyze large sets of data, providing valuable insights and predictions that assist hoteliers in making informed decisions."
  },
  {
    "title": "Revenue and Yield Optimization",
    "content": "SYSOTEL.AI focuses on increasing both the top line (total revenue) and optimizing the bottom line (net profit) for hoteliers. By leveraging the system, hotels can potentially boost their revenue by <span style=\"color:#FC5185 ;\"><strong>15-20%</strong></span> and optimize their bottom line by <span style=\"color:#FC5185 ;\"><strong>12-18%,</strong></span> indicating a significant impact on overall financial performance."
  },
  {
    "title": "Operational Solutions",
    "content": "SYSOTEL.AI provides operational solutions aimed at streamlining and optimizing hotel operations. This includes tools such as an Intelligent Booking Engine, AI Chatbot, and Intelligent Virtual Concierge, all of which contribute to a more efficient and guest-friendly operation."
  },
  {
    "title": "AI/ML-Based Decision Making",
    "content": "The system leverages AI and ML for data-driven decision-making. This implies that the decisions made within the system are based on sophisticated analyses of real-time and historical data, leading to more informed and strategic choices."
  },
  {
    "title": "Real-Time Data Insights",
    "content": "SYSOTEL.AI provides instant access to real-time market data and actionable insights. This ensures that hoteliers have up-to-date information to make timely decisions in response to market changes."
  },
  {
    "title": "Dedicated to Maximizing Profitability",
    "content": "The primary goal of SYSOTEL.AI is to maximize hotel profitability. This involves the systematic collection and analysis of market data, AI/ML-based evaluation of market demand, rates, and inventory, and real-time distribution to optimize revenue generation."
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
            <h3 className="mb-3">USP of SYSOTEL.AI</h3>
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
