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
            <h3>What is ProfitBooks ?</h3>
            <p>
              ProfitBooks.net is a robust online accounting software designed
              for small businesses, offering powerful features to streamline
              financial management. With a focus on efficient invoicing, it
              allows users to create professional invoices effortlessly and
              accelerate payment processing. The software enables unlimited
              invoice creation, contact management, and online payment
              collection. It goes beyond basic invoicing by facilitating expense
              recording, automatic tax calculations, and providing detailed
              sales reports for informed decision-making. ProfitBooks
              prioritizes customer success with in-app chat support, a
              comprehensive Support Center, and additional resources for
              business growth. Sign up for a 100% free account today to elevate
              your invoicing and accounting experience.
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
