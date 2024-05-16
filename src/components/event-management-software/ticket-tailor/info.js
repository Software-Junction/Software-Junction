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
            <h3>What is Ticket Tailor ?</h3>
            <p>
              Ticket Tailor is a feature-rich event ticketing platform trusted
              by over 80,000 event creators worldwide. With unbeatable value and
              flexible pricing, it offers a straightforward, contract-free
              service, saving 73% compared to its lead competitor. The platform
              goes beyond ticketing, allowing events to have a positive impact
              on the planet, being a carbon-neutral B Corp. Founded by Jonny
              White, Ticket Tailor has successfully sold over 23 million
              tickets, offering a secure and reliable platform with 99.99%
              uptime, world-leading payments compliance, and a commitment to
              data security.
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
