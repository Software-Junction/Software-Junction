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
            <h3>What is Ecogreen Express ?</h3>
            <p>
              Ecogreen Express is a ERP software designed for pharmacy
              management, offering a seamless solution for retailers,
              wholesalers, and marketing companies across India. With a quick
              20-minute installation, it streamlines store operations, ensuring
              easy billing, home delivery scheduling, and real-time
              synchronization of inventory. This modern-day software enhances
              customer satisfaction by reducing billing time and integrates
              various payment methods. Boasting a user-friendly interface, it
              also provides essential features like drive backup for data
              stability. Ecogreen Express stands out as a trusted choice,
              empowering pharmacies with efficient operations, increased revenue
              generation, and a user-friendly experience.
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
