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
            <h3>What is Panoply ?</h3>
            <p>
              Panoply is an all-in-one data platform designed to streamline data
              management for businesses. With 30 times faster implementation and
              50% cheaper costs, it offers seamless integration of over 10,000
              data sources. This platform empowers users to effortlessly store,
              analyze, and visualize data, enabling informed decision-making.
              Trusted by thousands, Panoply ensures data flows freely, promoting
              efficiency and productivity across organizations. Experience the
              ease of data management with Panoply's intuitive interface and
              comprehensive features.
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
