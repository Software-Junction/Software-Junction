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
            <h3>What is Zencommerce ?</h3>
            <p>
              Zencommerce – the perfect platform for visionary entrepreneurs
              seeking a modern and flexible solution to establish and manage
              their online stores. Designed for ease and innovation, Zencommerce
              offers a 14-day free trial without the need for a credit card.
              With a wealth of features, including 0% commission on sales,
              integrated graphic and payment systems, and free technical
              support, it empowers creators to bring their online business
              dreams to life. Whether you're starting from scratch or adapting
              ready-made solutions, Zencommerce provides the tools to craft a
              unique and successful online presence.
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
