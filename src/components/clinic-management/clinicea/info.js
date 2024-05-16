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
            <h3>What is Clinicea ?</h3>
            <p>
              Clinicea, established in November 2012, is a globally acclaimed
              clinic management platform renowned for its simplicity and
              effectiveness. Operating across 6 continents and supporting 20+
              medical specialties, Clinicea boasts a 4.9 satisfaction rating.
              Offering features such as customizable EMR, stunning prescription
              creation, and visual visit comparisons, it stands out with smart
              imaging tools and integrated virtual assistants. Emphasizing
              patient engagement, it facilitates online bookings, feedback, and
              loyalty programs. With a focus on data security and compliance,
              Clinicea is hosted on Microsoft Azure Cloud. Client testimonials
              highlight its customization, support, and seamless clinic
              operations.
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
