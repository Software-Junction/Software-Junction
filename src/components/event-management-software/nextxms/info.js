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
            <h3>What is NetXMS ?</h3>
            <p>
              NetXMS is a network monitoring solution, exemplified by its latest
              version, NetXMS 4.5.1 (released on Jan 30, 2024). With a focus on
              proactive monitoring for hybrid systems, this enterprise-grade
              software offers elaborate zoning, proxy functionality, and
              versatile data processing options. NetXMS enables users to
              discover and manage diverse devices across their network,
              providing comprehensive observability through topological maps and
              connectivity views. Renowned for its modularity, extensive
              features, and scalability, NetXMS has garnered praise from users
              for its effectiveness in behavior-based issue sorting and seamless
              network management, making it an all-encompassing tool for
              organizations seeking robust, customizable, and secure network
              monitoring.
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
