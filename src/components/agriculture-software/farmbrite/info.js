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
            <h3>What is Farmbrite ?</h3>
            <p>
              Farmbrite is an all-in-one farm management software designed for
              multi-species and biodiverse farms and ranches. It provides
              integrated tools for livestock management, farm organization,
              financial tracking, and direct online selling. With features like
              livestock record-keeping, crop planning, and collaborative task
              management, Farmbrite aims to streamline operations, boost farm
              efficiency, and increase profitability. The software also offers a
              seamless e-commerce platform for farmers to sell products directly
              to consumers online, coupled with comprehensive reporting and
              analytics to provide a complete overview of the entire farming
              operation.
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
