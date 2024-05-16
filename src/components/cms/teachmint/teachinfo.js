import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Teachinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is Teachmint ?</h3>
            <p>
              Teachmint, an award-winning Integrated School Platform, serves as
              a robust solution for efficient exam management. With its Complete
              Mobile and Web Solution, Teachmint simplifies operations for
              schools, offering features like Fee Management, Student
              Information System, Admission Management, and a powerful Learning
              Management System. Trusted by over 15 million users across 25+
              countries, Teachmint stands out for its user-friendly interface,
              dynamic fee structures, and real-time engagement tools. It not
              only automates administrative processes for schools but also
              provides a seamless learning experience, making it a preferred
              choice for educators, students, and parents worldwide.
            </p>
            <div
              className={`${styles["tec-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["tec-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teachinfo;
