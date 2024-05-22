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
            <h3>What is Oracle Healthcare Cloud ?</h3>
            <p>
              Oracle Healthcare Cloud (OCI) is a platform tailored for the
              healthcare industry, offering a versatile solution to run a
              spectrum of workloads. From traditional healthcare systems to
              cutting-edge data science and machine learning applications, OCI
              empowers providers to collaborate efficiently and derive valuable
              insights. The platform facilitates predictive care choices and
              risk factor analysis, contributing to better patient-focused
              healthcare experiences. OCI supports rapid development and
              prototyping of applications, ensuring seamless integration with
              datasets and analyses. With secure migration options for
              applications like Epic and Cerner, OCI upholds data privacy
              through certifications such as HIPAA, providing healthcare
              organizations with a comprehensive and innovative infrastructure
              for streamlined operations and improved patient outcomes.
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
