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
            <h3>What is Property-xRM ?</h3>
            <p>
              Property-xRM is a Real Estate CRM software powered by Microsoft
              Dynamics 365. Tailored for homebuilders and developers, it
              optimizes sales cycles with smart automations, offering end-to-end
              solutions for residential and commercial portfolios. This
              all-in-one software excels in lead, inventory, marketing,
              document, reporting, and maintenance management, ensuring
              efficient operations. With a focus on customer relationships, it
              nurtures growth in Real Estate and Proptech industries, leveraging
              the latest in Microsoft technology and offering a unique,
              user-centric CRM engine.
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
