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
            <h3>What is Servetel ?</h3>
            <p>
              Servetel's cloud telephony solution is a contact center platform
              designed to seamlessly connect businesses with their customers.
              With 65+ features including toll-free numbers, IVR, voice
              broadcasting, and real-time analytics, it offers efficient
              communication management. Servetel ensures optimal caller
              experiences through agent scheduling, call recording, and live
              call monitoring. Backed by a 99.99% uptime guarantee and
              end-to-end customer service, it provides hassle-free
              implementation and support. Integrated with API for CRM and
              third-party applications, Servetel empowers businesses to convert
              leads into customers effortlessly.
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
