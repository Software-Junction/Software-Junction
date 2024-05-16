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
            <h3>What is Wave Accounting ?</h3>
            <p>
              Wave is a versatile online accounting software designed to
              simplify financial management for small businesses and
              entrepreneurs. With its user-friendly interface, Wave offers a
              range of essential financial tools, including invoicing, expense
              tracking, and payroll services. It's an ideal choice for those
              looking to streamline their accounting processes, all while
              ensuring compliance and staying on top of their financial health.
              Whether you're a freelancer or a small business owner, Wave
              provides the tools you need to take control of your finances and
              make informed decisions. Best of all, it's a cost-effective
              solution, offering many essential features for free.
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
