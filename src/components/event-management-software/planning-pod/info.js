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
            <h3>What is Planning Pod ?</h3>
            <p>
              Planning Pod is a event management software that streamlines
              processes and communications for event planners and venues. With
              over 20,000 events managed, it offers three powerful solutions in
              one platform: Venue Management Software for simplified event
              bookings, Event Planning Software for real-time tracking of event
              details, and Floor Plan Software for creating professional event
              layouts. The platform integrates over 180,000 events and provides
              20+ easy-to-use tools that work together, helping users track
              details, save time, collaborate effectively, and work seamlessly
              in a virtual environment. Trusted by 20,000+ event professionals,
              Planning Pod is a go-to solution for event management, offering
              tools for CRM, lead management, email communications, floor plan
              creation, registrations, and more.
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
