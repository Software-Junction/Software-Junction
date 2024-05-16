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
            <h3>What is Zoho Books ?</h3>
            <p>
              Zoho Books, a comprehensive online accounting software solution
              offered by Zoho Corporation. With a user-friendly interface and
              powerful features, Zoho Books simplifies your financial management
              tasks. It allows you to effortlessly manage your business's
              finances, track expenses, create invoices, and handle payroll.
              Whether you're a small business owner or a freelance professional,
              Zoho Books is designed to streamline your accounting processes,
              making it easier for you to focus on growing your business.
              Explore the world of efficient financial management with Zoho
              Books today.
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
