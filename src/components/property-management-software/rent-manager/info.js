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
            <h3>What is Rent Manager ?</h3>
            <p>
              Rent Manager is a t property management software designed for
              companies overseeing real estate portfolios of varying sizes.
              Serving as an integrated solution, it amalgamates essential
              business features, including comprehensive accounting and
              reporting tools, intuitive marketing and mobile capabilities,
              thorough work order and management functionalities, and extensive
              software customization options. Whether handling large or small
              properties, Rent Manager empowers businesses to efficiently manage
              their operations. With top-notch customer care, onboarding
              support, and a variety of training options, Rent Manager ensures
              users maximize their software experience. Its flexibility extends
              to seamless integration with a growing network of technology
              providers, making it a versatile and indispensable tool for
              growing and streamlining property management businesses.
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
