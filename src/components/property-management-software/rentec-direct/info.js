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
            <h3>What is Rentec Direct ?</h3>
            <p>
              Rentec Direct is a top-rated property management software offering
              comprehensive solutions for landlords and professional property
              managers. With pricing starting at $45/month for landlords and
              $55/month for property managers, it provides unlimited US-based
              support. The software includes features like a professional
              website for property listings, complete accounting tools, tenant
              screening with instant reports, free online tenant payments, and
              online file management. Rentec Direct is endorsed by prominent
              entities such as Entrepreneur, Forbes, and Realtor, and stands out
              for its exceptional customer service, guaranteeing the best
              service experience. Clients praise its user-friendly interface,
              efficiency, and the convenience of reaching support through phone,
              email, or chat.
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
