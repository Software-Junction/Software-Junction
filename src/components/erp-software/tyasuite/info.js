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
            <h3>What is TYASuite ?</h3>
            <p>
              TYASuite's Compliance Management Software offers a cloud-based
              solution for businesses to efficiently oversee and gain visibility
              into compliance activities. By centralizing compliance processes,
              it streamlines operations and ensures adherence to regulations.
              With features like procurement to pay, project management, and
              vendor management, it provides a comprehensive suite for
              businesses to manage their operations seamlessly. TYASuite's
              software enables businesses to renovate and thrive in the digital
              era by offering end-to-end solutions tailored to their needs.
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
