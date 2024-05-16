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
            <h3>What is WorkflowGen ?</h3>
            <p>
              WorkflowGen is a digital process automation platform designed to
              streamline and optimize business workflows in a low-code
              environment. Trusted by global corporations such as 3M, ABB, and
              Sony, it enables the creation of adaptive workflows with fast
              prototyping and low-code approaches, ensuring quick delivery of
              customized solutions. With advanced features like GraphQL API,
              webhooks, and Node.js integrations, it facilitates highly
              integrated processes, supporting mobile apps, web applications,
              and microservices. Cloud-optimized for Azure, WorkflowGen
              seamlessly connects to Office 365 and G Suite, offering a
              competitive process automation component to enhance software
              offerings and boost team efficiency.
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
