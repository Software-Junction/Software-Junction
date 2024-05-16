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
            <h3>What is Mobincube ?</h3>
            <p>
              Mobincube is a no-code mobile app development platform that
              empowers individuals to create their own applications
              effortlessly. With over $2 million earned by users and more than
              171 million published applications, Mobincube allows you to build
              native applications without any coding skills. The platform offers
              a seamless four-step process: sign up, create, build, and publish.
              Users can monetize their apps and join the success stories of
              individuals earning significant income, making it an ideal choice
              for those seeking a simple yet powerful app development solution.
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
