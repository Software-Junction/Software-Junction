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
            <h3>What is Scientific Study's School Management Software ?</h3>
            <p>
              Scientific Study's School Management Software is a robust solution
              tailored to empower schools, teachers, students, and parents. With
              financial modules facilitating seamless fee management, admission
              processes, and salary administration, the software ensures
              efficient school operations. The communication modules enable
              effective messaging, news distribution, and streamlined report
              card generation. Additionally, comprehensive administration
              features, admission management capabilities, and extra
              functionalities such as online classes and digital library
              contribute to a transparent and integrated tool, revolutionizing
              school administration, academic processes, and communication
              channels
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
