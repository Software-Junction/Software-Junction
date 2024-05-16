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
            <h3>What is Stingo ?</h3>
            <p>
              Stingo, your ultimate solution for supercharging sales and
              optimizing customer interactions. This innovative software offers
              a suite of tools, including auto-lead capture, WhatsApp chatbot
              integration, and real-time team collaboration, making it a
              game-changer in the realm of sales acceleration. Stingo's unique
              features, such as IVR Cloud Telephony, complaint desk automation,
              and toll-free options, provide a holistic approach to customer
              relationship management. With a user-friendly interface and
              flexibility for customization, Stingo stands out as the go-to
              platform for businesses aiming to enhance productivity, automate
              tasks, and witness significant sales growth.
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
