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
            <h3>What is Funnel ?</h3>
            <p>
              Funnel is a marketing data hub that centralizes and streamlines
              reporting and analytics processes. With its ISO & SOC2
              certifications, it ensures data security and reliability. It
              seamlessly connects, stores, organizes, and shares marketing data
              from various sources, enabling faster and accurate reporting.
              Trusted by over 2000 global customers, it empowers teams with
              actionable insights, leading to improved efficiency and optimized
              marketing budgets. With no credit card required and expert support
              available, Funnel offers a transparent and hassle-free solution
              for businesses seeking to gain control of their data.
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
