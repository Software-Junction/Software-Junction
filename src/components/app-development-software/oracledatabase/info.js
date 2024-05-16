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
            <h3>What is Oracle Database ?</h3>
            <p>
              Oracle Database is a, high-performance, and cost-optimized
              database management system offering various services and products,
              including Autonomous Database, Exadata, and MySQL HeatWave. It
              supports multiple data models, such as relational, NoSQL, and
              in-memory databases, catering to diverse application needs. The
              Autonomous Database, available on Oracle Cloud, simplifies
              management tasks through automation, ensuring high performance,
              reliability, and security. Oracle's solutions enable flexible
              deployment options, including on-premises, public cloud, or
              private cloud, allowing organizations to meet specific
              requirements for data residency, latency, and scalability. The
              platform also excels in data security, offering encryption, key
              management, and advanced security features to guard against data
              breaches.
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
