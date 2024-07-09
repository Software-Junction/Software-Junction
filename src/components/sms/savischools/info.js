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
            <h3>What is Savischools ?</h3>
            <p>
              Savischools is an advanced Online School Management System (ERP)
              powered by Amazon AWS, offering a centralized platform for K-12
              institutions and learning centers. This comprehensive solution
              streamlines school operations, from student admission and
              scheduling to library management, eLearning, and biometric
              attendance integration. With a user-friendly interface and 40+
              modules, it ensures efficient administration and fosters
              interactive communication among students, teachers, parents, and
              management. The platform provides free mobile apps for parents and
              staff, coupled with complimentary support for school setup,
              student records migration, and biometric system integration.
              Embark on a modern and effective school management journey with a
              free trial.
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
