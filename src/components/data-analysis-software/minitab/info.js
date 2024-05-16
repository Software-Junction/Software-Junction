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
            <h3>What is Minitab ?</h3>
            <p>
              Minitab is a powerful statistical software offering best-in-class
              solutions for businesses, facilitating data-driven decision-making
              anytime, anywhere through its cloud accessibility. With
              market-leading products like Minitab Statistical Software and
              Minitab Engage, it enables organizations to unlock the full
              potential of their data, manage improvement initiatives, and
              achieve business excellence efficiently. Backed by robust
              technical support and a range of resources including webinars and
              customer stories, Minitab empowers users to harness valuable
              insights from their data, driving impactful outcomes and
              facilitating continuous improvement within their organizations.
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
