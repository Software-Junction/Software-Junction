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
            <h3>What is RMS Cloud ?</h3>
            <p>
              RMS Cloud is a software trusted by over 7,000 properties in 70
              countries, with a 40-year legacy of innovation. This all-in-one
              solution empowers hospitality businesses, including hotels,
              resorts, serviced apartments, and more, to seamlessly manage
              operations, boost revenue, and enhance guest experiences. With a
              comprehensive suite of features, RMS Cloud is a scalable and
              enterprise-enabled platform, offering a centralized database,
              group-level functionality, and 550+ integration partners. Trusted
              by global hospitality brands, RMS Cloud is the go-to solution for
              efficient property management, from reservation handling to
              dynamic rate management and beyond.
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
