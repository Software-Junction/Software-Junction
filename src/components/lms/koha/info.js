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
            <h3>What is Koha ILS ?</h3>
            <p>
              Koha, the world's pioneer in free and open-source library systems,
              is a fully featured and scalable library management solution.
              Developed through collaborative efforts involving libraries,
              volunteers, and global support companies, Koha sets the standard
              for innovation. The recent release of version 23.05 showcases its
              ongoing commitment to enhancement, offering responsive design for
              diverse devices. With a vibrant community shaping its evolution,
              Koha stands as a dynamic and inclusive platform, transforming
              library operations globally.
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
