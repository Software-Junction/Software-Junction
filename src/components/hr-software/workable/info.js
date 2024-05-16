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
            <h3>What is Workable ?</h3>
            <p>
              Workable is a recruiting software designed to facilitate the
              entire hiring process, offering features for sourcing, evaluating,
              automating, and managing employee onboarding. With one-click job
              posting, AI-powered candidate sourcing, and collaborative
              applicant evaluation, Workable enables companies to efficiently
              find and hire the right talent. The platform automates tasks like
              interview scheduling, expediting the recruiting process. Trusted
              by over 27,000 companies globally since 2012, Workable is known
              for its user-friendly interface, world-class support, and
              commitment to data security, making it an essential tool for
              modern, efficient, and secure recruitment.
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
