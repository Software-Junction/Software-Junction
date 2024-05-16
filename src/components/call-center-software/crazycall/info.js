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
            <h3>What is CrazyCall ?</h3>
            <p>
              CrazyCall is a software solution designed to streamline calling
              efforts for businesses. It simplifies the process by offering
              features such as Inbound Calls, Click to Call Widget, and Auto
              Dialer, enabling users to easily connect with customers. With
              smart call scripts, call recordings, and monitoring capabilities,
              CrazyCall enhances productivity and customer satisfaction. Its
              Callback Widget automates lead generation, requiring minimal
              effort to expand customer base. Trusted by companies like Spazios
              and Virgin, CrazyCall offers a 14-day free trial without the need
              for credit card information.
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
