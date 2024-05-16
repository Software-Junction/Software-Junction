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
            <h3>What is GOT CRM ?</h3>
            <p>
              Revolutionize your sales strategy with GOT CRM, the 2020
              game-changer in customer relationship management. Tailored for
              businesses of all sizes, our CRM boasts comprehensive features,
              including streamlined contact and lead management, efficient sales
              follow-ups, and seamless product and quote customization. Trusted
              by 2000 customers worldwide, we offer a secure and user-friendly
              platform to keep you on top of your business. Explore the synergy
              of integrating 60+ social apps, and discover why businesses choose
              GOT CRM for its unparalleled performance. Start your 15-day free
              trial today – no credit card required – and witness the future of
              CRM.
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
