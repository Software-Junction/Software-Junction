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
            <h3>What is Librarian ?</h3>
            <p>
              Librarian by Broadcom is amainframe software offering advanced
              library management services. With its Change Control Facility
              (CCF), Librarian automates control features for efficient
              manipulation of libraries, supporting parallel and concurrent
              development. This solution simplifies application management
              through comprehensive change control methodologies, including
              reporting, performance monitoring, security, and archiving.
              Librarian enhances compliance with an audit trail for tracking and
              reporting changes, while its interactive CCF streamlines change
              processes for source code development. Ultimately, Librarian
              empowers organizations to work smarter by providing real-time
              results in mainframe environment management.
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
