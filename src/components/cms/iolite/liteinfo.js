import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Liteinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Iolite School Management Software ?</h3>
            <p>
              Iolite School Management Software is a specialized solution
              meticulously crafted for educational institutions, serving various
              school boards such as GSEB, CBSE, and ICSE. With multilingual
              support in Hindi, Gujarati, and English, it simplifies
              administrative tasks, academic management, HR functions, and
              financial calculations. The software features a customizable
              Content Management System for dynamic website management,
              efficient attendance tracking, library administration, and
              seamless communication with students, parents, and teachers.
              Trusted by over 20 clients and utilized by more than 5,000 users
              across India, Iolite School Management Software significantly
              enhances overall school administration and workflow efficiency.
            </p>
            <div
              className={`${styles["lite-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["lite-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Liteinfo;
