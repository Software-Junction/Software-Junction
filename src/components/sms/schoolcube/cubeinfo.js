import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Cubeinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is SchoolCube ?</h3>
            <p>
              SchoolCube - a School Information Management System meticulously
              crafted to revolutionize academic institutions. With a focus on
              enhancing efficiency and eradicating data management challenges,
              SchoolCube offers a comprehensive solution tailored to the unique
              needs of schools. From simplified reporting and precise academic
              record management to seamless communication with parents and staff
              through instant messaging, SchoolCube is designed for a
              user-friendly experience. Explore the power of SchoolCube and
              elevate your school's operations in the realm of effective
              communication and streamlined management.
            </p>
            <div
              className={`${styles["cub-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["cub-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cubeinfo;
