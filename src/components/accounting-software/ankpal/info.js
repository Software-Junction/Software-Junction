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
            <h3>What is Ankpal ?</h3>
            <p>
              Ankpal is a versatile financial management software designed to
              streamline your accounting processes. With its user-friendly
              interface and robust features, Ankpal simplifies bookkeeping,
              expense tracking, and invoicing, making it an ideal solution for
              businesses of all sizes. This cloud-based platform offers
              real-time financial insights, helping you make informed decisions
              and stay in control of your finances. Experience greater
              efficiency and accuracy in managing your financial tasks with
              Ankpal, ensuring your business's fiscal health is always in check.
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
