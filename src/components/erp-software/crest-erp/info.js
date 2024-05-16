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
            <h3>What is CREST ERP ?</h3>
            <p>
              CREST ERP is a enterprise resource planning solution designed to
              optimize operations and reduce costs for mid-sized businesses.
              With seamless integration and interdependent modules covering
              areas like inventory, procurement, production, sales, and finance,
              CREST ERP streamlines processes and enhances productivity. It
              offers scalability to accommodate growth, ensures regulatory
              compliance and security through centralized data storage and
              role-based access controls, facilitates forecasting and tracking
              of orders and finances, promotes collaboration across departments,
              and ultimately leads to significant cost savings and higher
              profits.
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
