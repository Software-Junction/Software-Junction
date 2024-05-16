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
            <h3>What is Sellfy ?</h3>
            <p>
              Sellfy is an intuitive and hassle-free eCommerce platform tailored
              for creators, offering an all-in-one solution to sell merchandise
              or digital products. With a 14-day free trial and no credit card
              required, it provides a quick and easy setup process, allowing
              users to have their stores up and running in just five minutes.
              Ideal for those who value simplicity without compromising results,
              the platform includes built-in marketing features, supports
              print-on-demand merch, facilitates digital product sales, and
              offers seamless integration for selling across various channels,
              including social media and personal websites. Backed by a 24/7
              support team, it empowers a community of over 32,000 creators to
              turn their passion into income.
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
