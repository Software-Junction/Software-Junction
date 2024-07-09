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
            <h3>What is SmartLib ?</h3>
            <p>
              SmartLib stands as the world's foremost Cloud-Based Library
              Management Software, providing a cutting-edge solution for
              efficient and seamless library administration. With its
              best-in-class features, SmartLib enables systematic organization
              and quick access to all library tasks within a few clicks. This
              software redefines the standard, offering the most advanced
              methods for managing and accessing the entire library operation.
              Experience the future of library management with SmartLib, a
              revolutionary solution designed to optimize and streamline library
              tasks effortlessly.
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
