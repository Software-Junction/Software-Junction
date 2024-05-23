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
            <h3>What is Hospilogix ?</h3>
            <p>
              NextGen's Hospilogix is a web-based Hospital Management Software
              (HMS) solution designed on open-source technologies. With a proven
              track record in over 100 hospitals across India, ranging from 30
              to 800 bed units, it offers seamless electronic management of
              critical hospital functions, from patient registration to
              discharge. Notable clients include Medanta, Metro Group of
              Hospitals, Primus Group of Hospitals, the Indian Army, and the
              Indian Air Force. This comprehensive HMS solution ensures NABH and
              NABL compliance, quick implementation (some units in just 3 days),
              and 7-day support for critical issues.
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
