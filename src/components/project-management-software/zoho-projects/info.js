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
            <h3>What is Zoho Projects ?</h3>
            <p>
              Zoho Projects is a online project management platform designed to
              enhance productivity and collaboration within dynamic teams. With
              features like Gantt charts for visual project planning, automated
              task management, and efficient time tracking through integrated
              timesheets, it streamlines project workflows. The software offers
              seamless integration with various Zoho and third-party apps,
              ensuring flexibility and compatibility. Trusted by over 4.5
              million projects, Zoho Projects provides a user-friendly
              interface, customizable dashboards, and enterprise-grade security,
              making it a leading solution for effective project management
              across diverse industries.
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
