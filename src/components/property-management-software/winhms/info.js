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
            <h3>What is WINHMS ?</h3>
            <p>
              WINHMS is a hotel management software designed to meet the unique
              needs of the hospitality industry. Offering tailored solutions, it
              encompasses Front Office features like Call Monitoring and a
              Mobile Guest Application, ensuring efficient guest interactions.
              The Back Office modules ensure tight control over internal hotel
              operations, including Accounting, AR/AP, MIS, and Budgeting. With
              Material Management for procurement and inventory, Point-of-Sale
              for F&B outlets, and specialized modules for enhanced management,
              WINHMS streamlines day-to-day operations. Trusted by over 1400
              clients in 20+ countries since 2000, it is praised for its
              user-friendly interface and reliable support, making it an
              excellent choice for hoteliers seeking optimal efficiency and
              guest satisfaction.
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
