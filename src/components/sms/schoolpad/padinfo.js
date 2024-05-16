import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Padinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is SchoolPad ?</h3>
            <p>
              SchoolPad is India's leading School Management Software, offering
              a comprehensive ERP system designed to enhance school efficiency
              through digitization and automation. Trusted by 8000+ educators,
              it facilitates seamless organization and management of student
              progress, fostering better parent-teacher communication. With
              powerful features, including pre-admission inquiries, student data
              management, attendance tracking, examination and result
              generation, online fee transactions, and more, SchoolPad brings a
              digital transformation to schools. Over 300 schools have chosen
              SchoolPad to streamline their operations, making it the go-to
              solution for running educational institutions more effectively.
            </p>
            <div
              className={`${styles["pad-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["pad-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Padinfo;
