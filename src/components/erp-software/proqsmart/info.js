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
            <h3>What is ProQsmart ?</h3>
            <p>
              ProQsmart is an AI-powered procurement platform designed to
              streamline CapEx procurement processes, ensuring timely contract
              awards to optimal vendors at the best prices. With its intelligent
              insights and automation, ProQsmart empowers businesses to achieve
              up to 40% savings in procurement time and 10% in direct costs. It
              offers transparency, maximum savings, and enhanced collaboration
              while simplifying complex sourcing requirements and tendering
              processes. Experience faster project deliveries, reduced lead
              times, and improved cost control with ProQsmart, setting new
              standards for collaboration, compliance, and cost savings in
              procurement.
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
