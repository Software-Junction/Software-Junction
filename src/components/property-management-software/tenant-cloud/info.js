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
            <h3>What is TenantCloud ?</h3>
            <p>
              TenantCloud is a software designed to perfect the management of
              rental properties. This feature-rich solution facilitates listing
              vacant rentals on multiple sites, screening tenants through
              background and credit checks, collecting rent online via various
              payment methods, and executing paperless lease agreements with
              e-signatures. With easy accounting tools, users can efficiently
              manage financial data, generate comprehensive reports, and
              streamline tax preparation. The software also offers fast online
              maintenance request management, built-in tenant screening, and
              customizable rental applications. TenantCloud caters to landlords,
              property managers, tenants, and service professionals, providing a
              user-friendly platform to enhance efficiency, communication, and
              overall property management operations.
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
