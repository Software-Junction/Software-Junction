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
            <h3>What is Farvision ERP ?</h3>
            <p>
              Farvision ERP is a and flexible cloud-based Real Estate ERP
              software in India, designed to unlock success in the real estate
              and construction industry. With a focus on implementing best
              industry practices, it seamlessly integrates functions across
              departments, providing anytime, anywhere access to company data.
              The software's key features include dashboards for quick access to
              business facts, catering to builders, property managers, HR and
              payroll, contractors, facility managers, and manufacturing units.
              Trusted by the industry for over 30 years, Farvision ERP has
              earned recognition as a preferred ERP partner and boasts a global
              presence with 7+ countries utilizing its services.
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
