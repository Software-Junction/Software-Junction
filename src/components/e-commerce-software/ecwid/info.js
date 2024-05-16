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
            <h3>What is Ecwid ?</h3>
            <p>
              Ecwid is a powerful E-commerce platform that enables individuals
              and small businesses to effortlessly sell their products online.
              With a free forever plan, users can establish their online store
              with just a few clicks, reaching a vast audience on various
              platforms such as websites, social media, and marketplaces like
              Amazon. Boasting the title of the №1 fastest implementation
              e-commerce platform in 2023, Ecwid simplifies management through a
              centralized dashboard for inventory, order tracking, pricing, and
              more. Additionally, it offers robust marketing tools, including
              Google and Facebook advertising, to accelerate business growth.
              Expert support, a mobile app for on-the-go management, and an
              extensive app store further enhance the Ecwid experience.
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
