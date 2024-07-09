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
            <h3>What is Alexandria ?</h3>
            <p>
              Alexandria™ is an innovative library automation software that goes
              beyond traditional systems, positioning your library as the
              central hub of community learning. With a focus on advocacy, it
              ensures a positive impact on patrons by streamlining daily tasks,
              enhancing catalog discoverability, and increasing circulation.
              Offering unlimited user licensing, Alexandria is accessible on any
              device, meeting WCAG/ADA standards. The software excels in catalog
              enrichment, analytics, and seamless integration with top library
              solution providers. Unmatched in the industry, it provides 24/7
              live support and is committed to empowering librarians to foster a
              lifelong learning experience for their communities.
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
