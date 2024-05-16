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
            <h3>What is Saral Account ?</h3>
            <p>
              "Saral Accounts" by Relyonsoft - your comprehensive solution for
              efficient and user-friendly accounting management. This software
              simplifies financial tasks, allowing you to effortlessly handle
              invoices, expenses, and financial reports. With its intuitive
              interface and robust features, Saral Accounts streamlines
              bookkeeping and ensures compliance with tax regulations.
              Experience hassle-free accounting and financial control with this
              powerful software, designed to empower businesses of all sizes.
              Visit the website to learn more and take control of your finances
              today.
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
