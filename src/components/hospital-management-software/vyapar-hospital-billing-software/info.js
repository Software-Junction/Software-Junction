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
            <h3>What is Vyapar Hospital Billing Software ?</h3>
            <p>
              Vyapar Hospital Billing Software is an advanced tool designed to
              streamline and enhance the billing process within healthcare
              organizations. It serves as a central platform for managing
              patient bills efficiently, integrating with healthcare records to
              ensure accurate accounting. The software automates billing tasks,
              reducing human errors and improving overall accounting
              performance. With features like real-time updates, custom branding
              templates, and advanced reporting, Vyapar empowers healthcare
              providers to make data-driven decisions. It offers benefits such
              as streamlined billing processes, simplified insurance claim
              processing, time and cost savings, increased transparency, and
              error-free billing. Vyapar's user-friendly interface, top-notch
              customer support, and cost-effective pricing options make it the
              best choice for hospitals seeking an efficient and reliable
              billing solution.
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
