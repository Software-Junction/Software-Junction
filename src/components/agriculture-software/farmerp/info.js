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
            <h3>What is FarmERP ?</h3>
            <p>
              FarmERP is a farm business management software that has led the
              agricultural industry's digital transformation since 2001.
              Operating in over 25 countries, FarmERP focuses on sustainable
              agriculture, aligning with UN SDGs like Zero Hunger and Climate
              Change. As a member of GLOBALG.A.P and Sustainable Rice Platform,
              it elevates food safety standards globally. FarmERP's
              comprehensive platform supports Fresh Fruit and Vegetable
              businesses, ensuring safe food production, climate resilience, and
              traceability. With a single ERP tool, it streamlines processes for
              various agribusiness verticals, promoting productivity and
              profitability while minimizing environmental impact.
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
