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
            <h3>What is Tix ?</h3>
            <p>
              Tix is a state-of-the-art, ticketing system designed for diverse
              organizations such as universities, venues, promoters, and more.
              Offering a complete ticketing solution, Tix features integrated
              access controls, event management, and a robust reporting suite.
              With a user-friendly interface, Tix supports various sales
              channels, including online, mobile, and box office, allowing
              seamless ticket transactions. The system also includes CRM tools
              for enhanced customer relationships, email marketing capabilities,
              and secure payment processing with PCI Level 1 certification.
              Tix's transparent pricing structure, with no hidden fees and low
              service charges, makes it a risk-free choice for efficient and
              successful event ticketing.
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
