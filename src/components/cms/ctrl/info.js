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
            <h3>What is Ctrl Campus ?</h3>
            <p>
              Ctrl Campus is India's premier user-friendly campus management
              software, recognized as the top choice for educational
              institutions. With advanced ERP systems, it intelligently handles
              admission, academics, and administration processes. This
              comprehensive software includes modules for student information
              management, finance tracking, admissions management, and efficient
              human resource oversight. Offering customized solutions, fast
              implementation, data security, and seamless integration, Ctrl
              Campus stands as the go-to choice for streamlining educational
              institution operations. Experience the future of campus management
              with Ctrl Campus - where innovation meets efficiency.
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
              src="/images/ctrlss.png"
              alt="ctrlss"
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
