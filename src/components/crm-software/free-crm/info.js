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
            <h3>What is Free CRM ?</h3>
            <p>
              Free CRM Software designed to streamline your business operations.
              With cloud-based accessibility, manage every aspect of your
              business seamlessly from any device. The mobile apps for Android
              and iOS ensure you stay connected on the go, while integrations
              with WhatsApp, Facebook, Twitter, Google, and more enhance
              communication. From comprehensive contact management to robust
              sales pipeline tracking and marketing campaigns, Cogmento's Free
              CRM empowers businesses to increase sales by 30%. Experience
              enterprise-level security, real-time analytics, and verifiable
              credentials management to take your business to the next level.
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
