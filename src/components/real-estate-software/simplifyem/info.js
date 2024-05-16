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
            <h3>What is SimplifyEm ?</h3>
            <p>
              SimplifyEm is a efficient property management software designed
              for real estate professionals, offering a comprehensive suite of
              tools to streamline tasks for property managers and landlords.
              With features such as income and expense tracking, online rental
              payment collection, tenant screening, and digital lease
              signatures, SimplifyEm aims to simplify property management
              processes. The software also provides portals for seamless
              communication with tenants and owners, professional owner reports,
              and detailed financial reports, including tax reports. Notably, it
              stands out for its affordability, responsive US-based support, and
              over $42 billion in managed property assets since its
              establishment in 2006. Try SimplifyEm for free with no credit card
              required.
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
