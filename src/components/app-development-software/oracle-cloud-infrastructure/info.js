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
            <h3>What is Oracle Cloud Infrastructure (OCI) ?</h3>
            <p>
              Oracle Cloud Infrastructure (OCI) is a next-generation cloud
              platform designed to efficiently run diverse applications with
              enhanced speed and security at a reduced cost. Recognized as a
              leader in strategic cloud platform services and distributed hybrid
              infrastructure by Gartner®, OCI offers a comprehensive suite of
              over 100 services globally. With features like multicloud
              integration, consistent pricing, and dedicated cloud options, OCI
              ensures flexibility and efficiency. Its distributed cloud model
              allows deployment anywhere, including data centers, offering
              complete infrastructure and platform services to meet diverse
              workload needs, from databases and AI to networking and security.
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
