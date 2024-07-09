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
            <h3>What is LibraryWorld ?</h3>
            <p>
              LibraryWorld is an innovative web-based library automation service
              that eliminates the need for expensive software and hardware,
              offering a state-of-the-art system for effortless collection
              management and circulation. With a commitment to simplicity, it
              provides a 30-day free trial showcasing its comprehensive
              features, including cataloging, patron management, circulation
              tracking, and more. Trusted by thousands of libraries leveraging
              the power of the Internet, LibraryWorld's service plans encompass
              all library applications, ensuring cost-effectiveness and
              streamlined operations. Backed by dedicated customer support via
              online, email, and a 1-800 number, LibraryWorld is the go-to
              solution for libraries seeking efficient, value-driven automation.
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
