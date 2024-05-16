import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Orainfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is ORATARO ?</h3>
            <p>
              ORATARO stands as an advanced, all-encompassing school education
              platform, serving 900 institutes with a dedicated network of
              23,500 highly skilled teachers committed to student success.
              Tailored to the needs of 650,000 students, it provides smart study
              features and real-time updates on class activities, circulars, and
              homework. ORATARO's comprehensive framework addresses the
              learning, communication, and management requirements of students,
              teachers, parents, and schools. With a commitment to seamless
              education, it has become the go-to solution for an enhanced and
              integrated school management experience.
            </p>
            <div
              className={`${styles["ora-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["ora-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Orainfo;
