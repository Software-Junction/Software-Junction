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
            <h3>What is EventsAir ?</h3>
            <p>
              EventsAir is a centralized event management platform, empowering
              over 350,000 events globally. With a 30-year history, it has
              successfully supported major events like the London Olympics and
              G20 Summit. This all-in-one solution seamlessly handles virtual,
              in-person, and hybrid events, offering unlimited registrations and
              transparent flat-rate monthly pricing. From attracting exhibitors
              and managing sponsors to creating engaging experiences with
              features like interactive tools, social networking, and attendee
              apps, EventsAir ensures seamless event execution. With robust
              pre-event, during-event, and post-event capabilities, it caters to
              diverse needs, making it a preferred choice for conferences,
              meetings, and world events.
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
