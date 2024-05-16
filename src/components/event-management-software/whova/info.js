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
            <h3>What is Whova ?</h3>
            <p>
              Whova is an all-in-one Event Management Software designed for
              in-person, hybrid, and virtual events. It offers features such as
              affordable event registration, time-saving event management, and
              powerful event marketing. Trusted by distinguished innovators in
              corporate, academic, government, and association events, Whova
              ensures an enhanced attendee experience with its signature event
              app, providing real-time information, personalized agendas, live
              polls, and interactive features. The software streamlines event
              logistics, saving organizers time with tasks like agenda
              management, speaker coordination, and check-in. Whova also focuses
              on delivering high ROI for sponsors and exhibitors through various
              promotional opportunities and lead generation tools.
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
