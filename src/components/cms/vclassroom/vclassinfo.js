import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Vclassinfo = ({ styles }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>What is VClassrooming ?</h3>
            <p>
              VClassrooming is an integrated learning management and enterprise
              resource planning (ERP) software designed to transform educational
              institutions into modern digital campuses. Offering a
              comprehensive suite of features, including a robust Learning
              Management System (LMS) for K-12 and higher education, as well as
              ERP tools for data-driven decision-making, the software enhances
              student engagement, learning outcomes, and administrative
              efficiency. With user-friendly interfaces, powerful reporting
              capabilities, and unlimited user access, VClassrooming provides
              institutions with a seamless, secure, and personalized digital
              experience. Accelerate your campus's performance with this
              integrated software, fostering a dynamic and progressive learning
              environment.
            </p>
            <div
              className={`${styles["vcl-priceplan-box"]} box bg-light  rounded-4 p-3 mb-4 border`}
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
              className={styles["vcl-info-img"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Vclassinfo;
