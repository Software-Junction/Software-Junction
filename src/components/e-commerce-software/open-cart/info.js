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
            <h3>What is OpenCart ?</h3>
            <p>
              OpenCart is a leading open-source eCommerce platform designed for
              businesses of all sizes. With a user-friendly interface and
              powerful store management features, it enables seamless control
              over products, customers, orders, and more. The platform's
              marketplace offers a diverse selection of 13,000+ modules and
              themes, allowing for easy customization and expansion. Users can
              enjoy reliable support through a vibrant community forum with over
              110,000 members or opt for dedicated technical assistance.
              OpenCart Cloud provides a hassle-free experience, allowing users
              to launch their store on Amazon-hosted solutions with a
              complimentary 7-day trial.
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
