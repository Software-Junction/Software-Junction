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
            <h3>What is EasY GST ?</h3>
            <p>
              Easy-GST, your one-stop solution for hassle-free GST (Goods and
              Services Tax) compliance. This user-friendly software simplifies
              the complexities of tax management, making it effortless for
              businesses of all sizes. With its intuitive interface, real-time
              updates, and comprehensive features, Easy-GST streamlines tax
              filing, invoice generation, and financial reporting. Say goodbye
              to the complexities of GST, and say hello to a smoother, more
              efficient way to manage your tax obligations. Join countless
              businesses already benefiting from the convenience of Easy-GST.
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
