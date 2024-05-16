import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Vidyainfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Vidyala School ERP ?</h3>
            <p>
              Vidyalaya, a School Management System, is a transformative
              solution for educational institutions worldwide. With a track
              record of 22+ successful years and a global clientele of 1600+,
              Vidyalaya redefines education management through cutting-edge
              technology. This comprehensive software handles all aspects, from
              admissions to academic and staff management, integrating features
              such as biometrics, virtual classes, and more. The 96% client
              retention rate, 1500+ reports, and 2500+ verified reviews
              highlight its success. Vidyalaya's recognition through awards
              makes it the preferred choice for institutions seeking an
              efficient, user-friendly, and affordable school management
              solution.
            </p>
            <div
              className={`${styles["vid-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["vid-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Vidyainfo;
