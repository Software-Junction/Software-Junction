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
            <h3>What is AcmeInsight ?</h3>
            <p>
              AcmeInsight: Revolutionize your business with our cutting-edge
              software. AcmeInsight is a powerful, user-friendly platform
              designed to streamline operations and boost efficiency. Whether
              you're in retail, hospitality, or any other industry, our software
              offers a range of features to optimize inventory management, sales
              tracking, and customer engagement. With AcmeInsight, you can make
              data-driven decisions, enhance customer experiences, and propel
              your business to new heights. Experience the future of business
              management with AcmeInsight today!
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
