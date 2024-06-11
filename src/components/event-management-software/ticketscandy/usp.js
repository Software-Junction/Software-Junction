import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../ticketscandy/tic.module.scss";

const uspData = [
  {
    "title": "COMPLETELY FREE TICKETING",
    "content": "Break free from exorbitant fees and experience the liberation of selling tickets without any cost. Our platform is not just affordable; it's entirely free, ensuring your profits stay where they belong – with you."
  },
  {
    "title": "30% MORE SALES AND REVENUE",
    "content": "Unlock the secret to success with a <span style=\"color:#f95738 ;\"><strong>30%</strong></span> increase in sales and revenue. Through an ever-evolving platform, enhanced user experiences, and groundbreaking marketing tools, your event becomes a sensation that captivates audiences and turns every occasion into a success story."
  },
  {
    "title": "SEAMLESS ONLINE SELLING",
    "content": "Sell tickets anywhere online with our versatile ticketing solution. From integrating a widget seamlessly into your site for VIP experiences to crafting standalone event pages, we empower you to reach your audience effortlessly, ensuring your tickets practically sell themselves."
  },
  {
    "title": "MULTI-CHANNEL MARKETING",
    "content": "Amplify your event's reach with cutting-edge marketing tools. From Google to TikTok, and with our special touch of promotion, your event will ripple across the digital landscape, drawing attendees like never before. Partner with us and watch your event become a digital sensation."
  },
  {
    "title": "INTEGRATE WITH EASE",
    "content": "Already selling tickets online? Think of TicketsCandy as your dynamic sidekick. Integrate our platform alongside your existing solutions to diversify and amplify your reach, ensuring no ticket goes unsold and expanding your audience."
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
            <h3 className="mb-3">USP of TicketsCandy</h3>
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
