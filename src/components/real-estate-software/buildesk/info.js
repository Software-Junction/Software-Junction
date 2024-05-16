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
            <h3>What is Buildesk?</h3>
            <p>
              Buildesk is a top-notch CRM software tailored for real estate
              professionals, including brokers, consultants, builders, and
              property managers. Offering an end-to-end Proptech solution,
              Buildesk empowers users to seamlessly navigate the entire business
              journey, from lead generation to client retention. With a robust
              suite of tools, it ensures a smart and smooth experience for real
              estate professionals, enhancing productivity and customer service.
              Trusted by leading real estate companies and recognized with
              awards, Buildesk stands out for its comprehensive features,
              streamlined processes, and intelligent automation, making it the
              go-to solution for managing sales activities and optimizing
              operational efficiency in the real estate industry.
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
