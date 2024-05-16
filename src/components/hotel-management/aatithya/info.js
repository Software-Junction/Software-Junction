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
            <h3>What is Aatithya ?</h3>
            <p>
              Aatithya is a highly flexible Hotel Management Software offered by
              Dataman Computer Systems Pvt Ltd. This comprehensive solution
              automates operations for mid-sized to large hotels, resorts,
              motels, restaurants, and cafes. Aatithya covers front office and
              back office management, restaurant POS, banquet management, club
              management, night audit, procurement, housekeeping, and payroll.
              With features like a booking engine and mobile app, it maximizes
              ease in handling diverse hotel and hospitality functions,
              enhancing revenue, and improving operational efficiency.
              Exceptional customer support and industry recognition make
              Aatithya a standout choice in hotel management software.
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
