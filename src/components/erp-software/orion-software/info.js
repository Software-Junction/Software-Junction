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
            <h3>What is Orion Software's ERP solution ?</h3>
            <p>
              Orion Software's ERP solution is a tool designed to optimize
              business efficiency for mid-size to large enterprises,
              particularly in the construction industry. With features ranging
              from collection dashboards to financial statement analysis, it
              offers tailored solutions adaptable to various business needs. Its
              integration capabilities, including API support and utility
              programs, ensure seamless incorporation with existing accounting
              systems. Backed by a team of efficiency experts, Orion Software
              collaborates closely with clients to streamline operations,
              enhance productivity, and drive growth, making it an invaluable
              asset for construction businesses seeking innovative solutions.
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
