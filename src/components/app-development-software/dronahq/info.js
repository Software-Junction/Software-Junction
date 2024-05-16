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
            <h3>What is DronaHQ ?</h3>
            <p>
              DronaHQ is a powerful low-code platform enabling engineering and
              business operations teams to swiftly build custom applications and
              internal tools. With a user-friendly drag-and-drop interface, it
              facilitates the creation of pixel-perfect GUIs, admin panels, and
              embeddable features, cutting down development time from weeks to
              days. The platform offers seamless integrations with diverse data
              sources, including databases, APIs, and third-party apps.
              Developers appreciate its extensibility, allowing them to use
              JavaScript for data manipulation, import libraries, and debug with
              precision. DronaHQ ensures secure deployment, compliance, and
              version management, making it an ideal choice for organizations
              ranging from startups to Fortune 500 companies.
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
