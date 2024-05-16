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
            <h3>What is Hotelogix ?</h3>
            <p>
              Hotelogix is a cloud-based hotel management software that empowers
              hoteliers to enhance operational efficiency and guest experiences.
              With features such as reservation management, real-time channel
              updates, and mobile PMS, it offers a comprehensive solution for
              hotel operations. The software helps increase revenue by 20%,
              boosts online bookings by 45%, and saves 60% in staff time.
              Trusted by hoteliers in over 100 countries, Hotelogix provides a
              unified dashboard for managing multiple properties, a powerful web
              booking engine for commission-free direct bookings, and
              enthusiastic 24x7 support. It's a subscription-based model that
              facilitates cost-effective operations and real-time
              decision-making, ensuring a seamless hotel management experience.
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
