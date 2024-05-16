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
            <h3>What is Vyapar ?</h3>
            <p>
              Vyapar is a versatile accounting and billing software designed to
              simplify the financial management of businesses. With
              user-friendly features, it streamlines invoicing, expense
              tracking, and inventory management. This powerful tool is an
              excellent choice for small and medium-sized enterprises, offering
              cloud-based accessibility for easy collaboration. Vyapar empowers
              businesses to handle their finances efficiently, making it a go-to
              solution for entrepreneurs seeking a hassle-free accounting
              experience.
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
