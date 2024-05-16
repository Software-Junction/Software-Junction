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
            <h3>What is Bhoomi ?</h3>
            <p>
              Bhoomi, developed by edynamics Tech Solutions Private Limited, is
              a comprehensive Business Management Software tailored for the Real
              Estate industry. With unlimited user access, project and company
              management capabilities, it ensures seamless operations. Monthly
              free upgrades and separate installations provide flexibility,
              while its integration with Google Cloud guarantees efficient
              performance and strict data privacy. Boasting a user-friendly
              interface, BMS has successfully handled 18,000 leads per day,
              managed 800 projects, and garnered a user base of 2,500 with a
              remarkable 30,000 units sold to date.
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
