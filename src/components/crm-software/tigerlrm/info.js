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
            <h3>What is TigerLRM ?</h3>
            <p>
              TigerLRM, the ultimate CRM with Sales Enablement designed to
              transform your sales teams into powerhouses of efficiency and
              success. Fueled by AI and ChatGPT, TigerLRM goes beyond
              traditional CRMs, offering an all-in-one solution that combines
              intuitive CRM tools with cutting-edge Sales Enablement features.
              Experience a 300% boost in conversion rates as TigerLRM automates
              tasks, simplifies workflows, and maximizes your team's output.
              From AI-powered lead scoring to comprehensive sales reports,
              TigerLRM provides a seamless and effective approach to managing
              leads, closing deals, and delivering superior customer service.
              Ready to revolutionize your sales process? Sign up for TigerLRM
              today – where innovation meets results.
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
