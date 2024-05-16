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
            <h3>What is LeadForce ?</h3>
            <p>
              Discover the future of CRM with LeadForce, a dynamic software
              solution at the forefront of lead performance optimization. With
              an inception rooted in innovative thinking and perfectionism,
              LeadForce seamlessly integrates with cloud PBX systems to reclaim
              25% of lost inbound call traffic. Transforming communication
              opportunities into instant task tracking, our platform enables
              companies to evaluate and seize every prospect efficiently. Since
              our establishment in June 2021, LeadForce has been on a mission to
              redefine success, offering flexible solutions and a
              location-independent approach. Join us in shaping the next era of
              effective and sustainable CRM performance.
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
