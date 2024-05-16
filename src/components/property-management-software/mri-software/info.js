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
            <h3>What is MRI Software ?</h3>
            <p>
              MRI Software is a proptech solution that empowers real estate
              visionaries by seamlessly connecting residential and commercial
              properties. With a focus on AI-first technology, it offers
              tailored solutions for multifamily owners, operators, and
              investors, addressing lead-to-lease processes, property
              management, accounting, ID verification, and online rent payment.
              The platform extends its capabilities to affordable and public
              housing, ensuring housing compliance, managing waitlists, and
              facilitating fee accounting. MRI@Work caters to commercial
              property needs with features like property management, accounting,
              investment management, lease abstraction, and facilities
              management. The software's open and connected approach, supported
              by a vast partner ecosystem, transforms the way people live, work,
              and play in thriving communities worldwide, with over 45,000
              clients and operations in 170+ countries.
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
