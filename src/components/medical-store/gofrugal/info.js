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
            <h3>What is Gofrugal's Pharmacy Software ?</h3>
            <p>
              Gofrugal's Pharmacy Software is a comprehensive solution designed
              for retail pharmacies, offering features such as efficient
              inventory management, streamlined billing processes, and
              compliance with industry regulations. With user-friendly
              interfaces and mobile apps, it enables faster checkouts, ensures
              security with role-wise permissions, and provides real-time data
              analysis for informed decision-making. This software caters to
              various needs, including loyalty programs, supply chain
              management, and integrated accounting, making it an ideal choice
              for pharmacies seeking to enhance operational excellence, customer
              retention, and overall business growth.
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
