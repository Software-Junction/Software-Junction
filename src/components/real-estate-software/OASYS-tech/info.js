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
            <h3>What is OASYS Tech Solutions ?</h3>
            <p>
              OASYS Tech Solutions is a leading IT consultancy and solutions
              provider, established in 2012 and headquartered in Odisha, India.
              Specializing in technology outsourcing, the company excels in
              delivering top-notch IT consultancy and ERP (SAP) services with a
              global reach. With over 11 years of successful operations and
              collaboration with international affiliates, OASYS Tech Solutions
              is committed to building lasting partnerships, fostering growth,
              and shaping the future of technology-driven business solutions.
              The company's expertise spans software asset management,
              privileged access, software licensing, and enterprise services,
              with a remarkable 99.9% customer satisfaction rate based on 750+
              reviews and 20,000 objective resources.
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
