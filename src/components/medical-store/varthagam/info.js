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
            <h3>What is VarthagamSoft ?</h3>
            <p>
              VarthagamSoft is a pharmaceutical billing software designed to
              optimize business operations in Chennai. With features like
              flexible inventory classification, 100% audit capability, and easy
              billing management, it ensures faster checkouts and efficient
              stock updates. The software facilitates precise inventory
              management, including stock age analysis for better working
              capital control. Tailored for diverse industries, it offers
              solutions for pharmaceutical distribution, pharmacy management,
              FMCG, supermarket operations, rice trading, hardware, electronics,
              and more. VarthagamSoft's user-friendly interface and robust
              functionalities make it a leading choice, recognized for enhancing
              customer service, supplier management, and overall business
              growth.
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
