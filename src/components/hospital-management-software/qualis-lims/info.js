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
            <h3>What is Qualis LIMS ?</h3>
            <p>
              Qualis LIMS is an advanced Laboratory Information Management
              System, uniquely tailored to digitally transform laboratories
              across diverse industries such as Pharmaceuticals, Lifesciences,
              and more. Offering a seamless blend of versatility and
              user-friendly design, this software optimizes operations by
              automating processes and eliminating paper-based workflows.
              Boasting integrated modules for sample management, project
              tracking, and result analysis, Qualis LIMS stands out with its
              dynamic dashboards and configurable templates. With features like
              resource planning, compliance adherence, and electronic
              signatures, it ensures time-saving, reliable, and compliant
              laboratory operations, fostering uniformity, precision, and an
              enhanced user experience.
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
