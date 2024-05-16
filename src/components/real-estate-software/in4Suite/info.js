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
            <h3>What is In4Suite ?</h3>
            <p>
              In4Suite® is a ERP software designed for the Real Estate and
              Construction industry. This powerful platform offers complete
              visibility into business information, streamlining processes,
              improving efficiencies, managing complexities, and ultimately
              increasing revenue. With modules covering aspects such as land
              management, legal processes, project management, finance, HR, and
              more, In4Suite® ensures the seamless integration of all facets of
              a real estate and construction business. It features advanced
              Business Intelligence for insightful analytics, integrates with
              popular tools, and provides mobile apps for on-the-go management.
              In4Suite® is the go-to solution for automating and optimizing the
              day-to-day operations of real estate businesses, offering a
              user-friendly experience and world-class global support.
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
