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
            <h3>What is Aavaz ?</h3>
            <p>
              Aavaz 360 is a customer communication platform that seamlessly
              integrates marketing, sales, and support functions. It enables
              businesses to engage with customers across multiple channels,
              creating fluid conversations and enhancing customer success. By
              breaking down barriers to communication, Aavaz ensures that
              businesses can easily and effectively interact with their
              customers, fostering brand engagement and loyalty. With features
              such as unified workflows and real-time insights, Aavaz empowers
              businesses to deliver customer-centric experiences and drive
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
