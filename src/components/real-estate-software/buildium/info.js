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
            <h3>What is Buildium  ?</h3>
            <p>
              Buildium is an all-in-one property management software designed to
              streamline operations for property managers and real estate
              professionals. With a cloud-based platform, it offers features
              such as rental listings, tenant screening, lease management, rent
              collection, property accounting, maintenance requests, and
              communication tools. The software caters to a range of property
              types, including single-family homes, small multifamily units,
              community associations, student housing, commercial properties,
              and affordable housing. Buildium enhances efficiency by automating
              day-to-day tasks, improving organization through centralized data,
              and ultimately creating a better experience for property owners,
              tenants, and homeowners.
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
