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
            <h3>What is Lybrate ?</h3>
            <p>
              Lybrate is a dynamic clinic management software that streamlines
              medical practitioners' daily tasks. This user-friendly platform
              allows doctors to effortlessly manage patient records,
              prescriptions, and appointments. With secure data storage on
              Amazon Cloud servers, multilingual SMS reminders, and smart
              billing features, Lybrate ensures efficient practice management.
              The software facilitates seamless connectivity with patients
              through its Smart Patient Connect feature, fostering the exchange
              of medical documents for enhanced patient engagement. Lybrate
              stands out for its commitment to empowering doctors with essential
              patient information, emphasizing ease of use, transparent pricing,
              and reliable service.
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
