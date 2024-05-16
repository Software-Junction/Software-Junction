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
            <h3>What is Infor CloudSuite™ ERP ?</h3>
            <p>
              Infor CloudSuite™ ERP is a leading industry cloud solution that
              enables organizations to seamlessly transition to the cloud,
              optimizing their business operations. With preconfigured modern
              features, it offers manageable costs, smooth deployment, and
              continuous innovation, ensuring business continuity and growth.
              Recognized as a Leader in the 2023 Gartner® Magic Quadrant™ for
              Cloud ERP, Infor CloudSuite™ ERP provides deep industry
              functionality, security, and uptime, empowering organizations to
              unlock the value of the cloud and stay ahead in today's fast-paced
              business environment.
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
