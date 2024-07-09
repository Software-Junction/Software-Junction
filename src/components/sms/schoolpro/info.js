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
            <h3>What is SchoolPro ?</h3>
            <p>
              SchoolPRO is a user-friendly and affordable school administration
              software, streamlining complex tasks for educational institutions.
              Offering rich functionality and customizable reporting, it
              empowers schools to confidently manage day-to-day operations. With
              seamless integration capabilities, SchoolPRO connects with finance
              software and learning management systems, enhancing overall
              efficiency. Trusted by schools in Australia, Asia, and beyond,
              this software ensures smart workflows and robust data integrity
              checks for a hassle-free administration experience. Experience the
              simplicity and flexibility of SchoolPRO, making school management
              easy, clever, and different.
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
