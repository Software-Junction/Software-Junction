import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Info = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is TicketsCandy ?</h3>
            <p>
              TicketsCandy is a event ticketing and booking solution designed to
              boost ticket sales and revenue by up to 30%. With a stellar
              platform, intuitive dashboard, and game-changing marketing tools,
              it transforms events into sensations, offering an affordable
              ticketing solution that ensures every seat is filled. Whether
              through seamless online sales, integrated widgets, or captivating
              event pages, TicketsCandy maximizes reach through partnerships
              with social networks, newsletters, and paid advertising. As a
              strategic growth partner, it provides dedicated 7-day support,
              ensuring a smooth journey from event creation to success.
            </p>
            <div
              className={`${styles["priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
            >
              <h5>Pricing Plans :</h5>
              <p>
                <Link href="#idpricing">View Detailed pricing</Link>
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Image
              src="/images/astralss.png"
              alt="astralss"
              height="10"
              width="600"
              className={styles["info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Info;
