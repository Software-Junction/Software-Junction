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
            <h3>
              What is KareXpert's Hospital Information Management System ?
            </h3>
            <p>
              KareXpert's Hospital Information Management System (HIMS) is a
              healthcare management software designed to streamline hospital
              operations. It offers features such as role-based access control,
              IPD and OPD management, billing solutions, and facility
              management. With a user-friendly mobile and web interface, it
              enhances digital presence and patient engagement. The software
              covers diverse aspects, including Emergency Response Care, Diet
              Management, and Patient Feedback, ensuring efficient healthcare
              delivery. KareXpert's HIMS empowers hospitals with a centralized
              platform, incorporating AI, data analytics, and connectivity
              across various healthcare domains for improved patient care and
              operational excellence.
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
