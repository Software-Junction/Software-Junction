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
            <h3>What is Enthu ?</h3>
            <p>
              Enthu.AI is an advanced agent coaching software designed to
              enhance sales team performance by automating sales monitoring,
              improving customer experience, and increasing revenue. It captures
              customer interactions across various channels and provides
              insights for multiple teams to optimize operations, sales,
              support, and marketing efforts. With Enthu.AI, you can evaluate
              agent performance, provide timely coaching interventions, and
              transform mediocre agents into sales rockstars. Trusted by over
              100 brands, it offers trackable parameters, predictive call
              quality, and seamless speech-to-text accuracy, making it the go-to
              solution for driving consistency in revenue and predictability in
              outcomes.
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
