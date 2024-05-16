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
            <h3>What is eBuild Construction ?</h3>
            <p>
              eBuild Construction is a construction management software designed
              to streamline and optimize the entire process of custom home
              building and renovations. This software facilitates efficient
              consultation and planning, integrates seamlessly with architects
              and engineers for cohesive design-build solutions, manages a
              trusted network of subcontractors and suppliers for general
              contracting, and ensures successful project outcomes through
              streamlined construction management practices. With a focus on
              cost-effectiveness, quality workmanship, and client satisfaction,
              eBuild Construction aims to build lasting customer relationships
              by delivering superior results in the construction industry.
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
