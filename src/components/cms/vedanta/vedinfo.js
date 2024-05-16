import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Vedinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Vedanta School ERP ?</h3>
            <p>
              Vedanta School ERP, developed by Connect Icon Pvt Ltd, is a
              cutting-edge Institution Automation System designed exclusively
              for the education sector. Founded in 2012 by industry veterans
              Rajesh Dagar and Nisha Tomar, the company leverages their 20+
              years of collective experience from esteemed organizations like
              Fidelity Investment, Sapient, IDBI Bank, Vodafone, and HP. This
              true SaaS Education ERP offers a unified platform covering
              academic and administrative processes, ensuring real-time
              decision-making for over 700 clients. With a focus on user roles
              rather than modules, Vedanta ERP features five key pillars - Front
              Office, People, Academics, Finance, and Infrastructure, providing
              adaptable reporting and secure access.
            </p>
            <div
              className={`${styles["ved-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["ved-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Vedinfo;
