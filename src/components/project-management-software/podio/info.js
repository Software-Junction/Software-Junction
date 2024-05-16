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
            <h3>What is Podio ?</h3>
            <p>
              Podio is a low-code platform designed to streamline collaboration
              and project management. Serving as a centralized work hub, it
              consolidates data, integrates workflows, and offers robust tools
              for customizing business solutions. With a user-friendly interface
              and fast setup, Podio enhances team communication, accelerates
              project delivery, and ensures data security with features like
              automated workflows, granular access control, and compliance with
              rigorous security standards. Trusted by organizations like
              ChanceLight, Podio facilitates efficient, action-oriented
              collaboration, making it an indispensable tool for businesses
              aiming to drive projects forward seamlessly.
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
