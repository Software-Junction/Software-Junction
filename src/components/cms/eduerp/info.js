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
            <h3>What is eduERP ?</h3>
            <p>
              eduERP® is an advanced ERP System tailored for educational
              institutions, schools, and universities, functioning as a
              comprehensive Campus Management System. This web and mobile
              solution caters to administrators, faculty, and management,
              complemented by a dedicated mobile app for students and parents.
              It addresses the crucial need for efficient management in
              educational settings, freeing up academic staff from manual
              paperwork to prioritize teaching and skill development. With its
              user-friendly interface, eduERP® stands as a technology-driven
              solution that enhances the functionality of schools, colleges, and
              universities, making it an indispensable asset in the education
              sector.
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
