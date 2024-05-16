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
            <h3>What is Stayflexi ?</h3>
            <p>
              Stayflexi is an All-In-One platform revolutionizing the
              hospitality industry, offering a comprehensive Operating System
              for hotels and vacation rentals. Seamlessly integrating
              operations, sales, guest management, and payments, it provides a
              fully automated AI-powered Property Management System (PMS) to
              simplify tasks and reduce costs. With features like Magic Link
              automation, flexible booking options, and a global network of
              2000+ trusted properties, Stayflexi ensures a hassle-free
              experience for hoteliers, enhancing guest satisfaction and driving
              revenue through direct bookings. It's the ultimate solution for
              modern property management, connecting last-minute unsold rooms
              with travelers, and supporting diverse property types worldwide.
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
