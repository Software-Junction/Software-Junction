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
            <h3>What is Oracle Fusion Cloud HCM ?</h3>
            <p>
              Oracle Fusion Cloud HCM stands as a leading cloud-based Human
              Capital Management (HCM) solution, connecting and enhancing all HR
              processes within an enterprise. From Core Human Resources to
              Talent Management, Workforce Management, and Payroll, it offers a
              unified user experience, AI integration, and a singular data
              model. This comprehensive suite facilitates global workforce
              management, talent lifecycle optimization, and strategic alignment
              with business objectives. Recognized by Gartner as a leader for
              eight consecutive years, Oracle Cloud HCM emphasizes innovation,
              scalability, and security to empower organizations in achieving HR
              excellence and delivering an exceptional employee experience.
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
