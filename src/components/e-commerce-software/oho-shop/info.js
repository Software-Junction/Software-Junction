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
            <h3>What is OhoShop ?</h3>
            <p>
              OhoShop is a solution that empowers businesses to effortlessly
              launch personalized iOS and Android mobile apps, responsive
              websites, and progressive web apps (PWAs). With features like
              catalog management, order and payment processing, and delivery
              management, OhoShop offers a seamless buying experience. Utilizing
              a Pay As You Go (SaaS) model, it ensures no big investment,
              requires no IT maintenance, and comes with free upgrades. The
              platform's sale booster features, including social media sharing,
              push notifications, and SEO-friendly websites, cater to diverse
              industries, making it an ideal choice for businesses seeking a
              mobile retail presence with minimal hassle.
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
