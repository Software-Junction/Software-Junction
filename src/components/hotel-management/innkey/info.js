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
            <h3>What is InnKey ?</h3>
            <p>
              InnKey – a revolutionary cloud-based solution that is reshaping
              the landscape of hotel management. InnKey sets itself apart by
              prioritizing simplicity and operational excellence, offering a
              centralized platform to streamline hotel operations. Say goodbye
              to the complexities of juggling multiple software versions and
              platforms as InnKey seamlessly integrates central reservation,
              front desk management, point of sale, and more. With a global
              footprint and cutting-edge property management system access,
              InnKey ensures efficient distribution and introduces genuine
              artificial price intelligence for advanced revenue management.
              Enjoy the perks of easy remote accessibility, scalability, and
              robust data security, making InnKey the go-to choice for hotels
              worldwide. Embark on a new era of hospitality management where
              efficiency meets exceptional customer service – welcome to the
              world of InnKey.
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
