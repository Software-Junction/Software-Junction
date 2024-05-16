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
            <h3>What is MediSteer ?</h3>
            <p>
              MediSteer is a web-based hospital management system developed by
              Adroit Soft India. This comprehensive product addresses the
              operational and managerial needs of hospitals, ranging from small
              clinics to large-scale medical facilities. Designed
              collaboratively by medical professionals and engineers, MediSteer
              enhances operational efficiency, reduces costs, and minimizes
              medical errors. With seamless data flow across departments, online
              consultation capabilities, and integrated modules covering
              outpatient and inpatient management, pharmacy, laboratory,
              finance, and more, MediSteer ensures a holistic solution for
              healthcare institutions, promoting improved patient care,
              increased staff productivity, and overall customer satisfaction.
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
